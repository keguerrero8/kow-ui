import cookie from 'cookie';

export default async (req, res) => {
    if (req.method === 'POST') {
        res.setHeader('Set-Cookie', [
            cookie.serialize(
                'access', '', {
                    httpOnly: true,
                    secure: process.env.ENVIRONMENT !== 'dev',
                    expires: new Date(0),
                    sameSite: 'strict',
                    path: '/auth-jwt/'
                }
            ),
            cookie.serialize(
                'refresh', '', {
                    httpOnly: true,
                    secure: process.env.ENVIRONMENT !== 'dev',
                    expires: new Date(0),
                    sameSite: 'strict',
                    path: '/auth-jwt/'
                }
            )
        ]);

        return res.status(200).json({
            success: 'Successfully logged out'
        });
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({
            error: `Method ${req.method} now allowed`
        });
    }
};