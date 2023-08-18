import cookie from 'cookie';

export default async (req, res) => {
    if (req.method === 'PUT') {
        const { 
            signed_agreement_admin, 
            contact_phone_number, 
            additional_language,
            contact_name,
            contact_title,
            contact_email,
            npi,
            signature,
            network,
            initial_rate,
            isDelivery
        } = req.body;
        
        const { id } = req.query
        const cookies = cookie.parse(req.headers.cookie ?? '');
        const access = cookies.access ?? false;

        if (access === false) {
            return res.status(401).json({
                error: 'User unauthorized to make this request'
            });
        }

        const body = JSON.stringify({ 
            signed_agreement_admin, 
            contact_phone_number, 
            additional_language,
            contact_name,
            contact_title,
            contact_email,
            npi,
            signature,
            network,
            initial_rate,
            isDelivery
        });

        try {
            const apiRes = await fetch(`${process.env.DJANGO_API_URL}/api/pharmacies/${id}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${access}`
                },
                body: body
            });
            const data = await apiRes.json();

            console.log("data response for nxt server ", data)

            if (apiRes.status === 200) {
                return res.status(200).json(data);
            } else {
                return res.status(apiRes.status).json({
                    error: data
                });
            }
        } catch(err) {
            return res.status(500).json({
                error: {internal_error: 'Something went wrong submitting the enrollment request'}
            });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        return res.status(405).json({
            error: {internal_error: `Method ${req.method} not allowed`}
        });
    }
};

// {
//     contact_title: [ 'A contact title must be provided' ],
//     contact_phone_number: [ 'The phone number entered is not valid.' ],
//     npi: [ 'A valid npi must be provided' ],
//     network: [ 'A Network must be provided' ]
//   }
  