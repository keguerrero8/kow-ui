import cookie from 'cookie';

export default async (req, res) => {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        const body = JSON.stringify({
            username,
            password
        });

        try {
            const apiRes = await fetch(`${process.env.DJANGO_API_URL}/auth-jwt/token/`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: body
            });

            const data = await apiRes.json();

            if (apiRes.status === 200) {
                res.setHeader('Set-Cookie', [
                    cookie.serialize(
                        'access', data.access, {
                            httpOnly: true,
                            secure: process.env.ENVIRONMENT !== 'dev',
                            maxAge: 60 * 30,
                            sameSite: 'strict',
                            path: '/'
                        }
                    ),
                    cookie.serialize(
                        'refresh', data.refresh, {
                            httpOnly: true,
                            secure: process.env.ENVIRONMENT !== 'dev',
                            maxAge: 60 * 60 * 24,
                            sameSite: 'strict',
                            path: '/'
                        }
                    )
                ]);

                return res.status(200).json({
                    success: 'Logged in successfully'
                });
            } else {
                return res.status(apiRes.status).json({
                    error: 'Authentication failed'
                });
            }
        } catch(err) {
            return res.status(500).json({
                error: 'Something went wrong when authenticating'
            });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ error: `Method ${req.method} not allowed` });
    } 
};