import cookie from 'cookie';

export default async (req, res) => {
    if (req.method === 'POST') {
        const { name, isEnrolled, pharmacy, phone_number } = req.body;
        const cookies = cookie.parse(req.headers.cookie ?? '');
        const access = cookies.access ?? false;

        if (access === false) {
            return res.status(401).json({
                error: 'User unauthorized to make this request'
            });
        }

        const body = JSON.stringify({
            isEnrolled,
            name,
            pharmacy,
            phone_number
        });

        try {
            const apiRes = await fetch(`${process.env.DJANGO_API_URL}/api/pharmacists`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${access}`
                },
                body: body
            });
            const data = await apiRes.json();

            if (apiRes.status === 200) {
                return res.status(200).json(data);
            } else {
                return res.status(apiRes.status).json({
                    error: data.error
                });
            }
        } catch(err) {
            return res.status(500).json({
                error: 'Something went wrong when retrieving user'
            });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        return res.status(405).json({
            error: `Method ${req.method} not allowed`
        });
    }
};