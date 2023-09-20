export default async (req, res) => {
    if (req.method === 'POST') {
        const { 
            med_name,
            med_strength,
            quantity,
            bin,
            pcn,
            rxgroup,
            isInsurance,
            user_type,
            phone_number,
            isAdmin
        } = req.body;

        const body = JSON.stringify({ 
            med_name,
            med_strength,
            quantity,
            bin,
            pcn,
            rxgroup,
            isInsurance,
            user_type,
            phone_number,
            isAdmin
        });

        try {
            const apiRes = await fetch(`${process.env.DJANGO_API_URL}/core/requests`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: body
            });
            const data = await apiRes.json();

            if (apiRes.status === 201) {
                return res.status(201).json(data);
            } else {
                return res.status(apiRes.status).json({
                    error: data
                });
            }
        } catch(err) {
            return res.status(500).json({
                error: {internal_error: 'Something went wrong submitting the request'}
            });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({
            error: {internal_error: `Method ${req.method} not allowed`}
        });
    }
};