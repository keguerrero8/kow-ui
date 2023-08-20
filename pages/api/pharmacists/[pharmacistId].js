import cookie from 'cookie';

export default async (req, res) => {
    if (req.method === 'PUT') {
        const { isEnrolled } = req.body;
        const { pharmacistId } = req.query
        const cookies = cookie.parse(req.headers.cookie ?? '');
        const access = cookies.access ?? false;

        if (access === false) {
            return res.status(401).json({
                error: 'User unauthorized to make this request'
            });
        }

        const body = JSON.stringify({
            isEnrolled,
        });

        try {
            const apiRes = await fetch(`${process.env.DJANGO_API_URL}/api/pharmacists/${pharmacistId}`, {
                method: 'PUT',
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
    } else if (req.method === 'DELETE') {
        const { pharmacistId } = req.query
        const cookies = cookie.parse(req.headers.cookie ?? '');
        const access = cookies.access ?? false;

        if (access === false) {
            return res.status(401).json({
                error: 'User unauthorized to make this request'
            });
        }

        try {
            const apiRes = await fetch(`${process.env.DJANGO_API_URL}/api/pharmacists/${pharmacistId}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${access}`
                },
            });

            if (apiRes.status === 200) {
                return res.status(200)
            } else {
                return res.status(apiRes.status).json({
                    error: "Something went wrong with that operation"
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