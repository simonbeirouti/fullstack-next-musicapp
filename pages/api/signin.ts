import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'
import prisma from '../../lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, password } = req.body
    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    })
    if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({
            email: user.email,
            id: user.id,
            time: Date.now(),
        },
        'Hello',
        { expiresIn: '7d'}
        )
        res.setHeader(
            'Set-Cookie',
            cookie.serialize('ACCESS_TOKEN', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                maxAge: 60 * 60 * 24 * 7,
                path: '/',
            })
        )
        res.json(user)
    } else {
        res.status(401).json({ error: 'Email or password is wrong' })
    }
}