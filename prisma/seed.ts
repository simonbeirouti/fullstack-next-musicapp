import bcrypt from 'bcrypt'
import { artistsData } from './songsData'
import prisma from '../lib/prisma'

const run = async () => {
    await Promise.all(artistsData.map(async (artist) => {
        return prisma.artist.upsert({
            where: { name: artist.name },
            update: {},
            create: {
                name: artist.name,
                songs: {
                    create: artist.songs.map(song => ({
                        name: song.name,
                        duration: song.duration,
                        url: song.url,
                    })),
                },
            },
        })
    }))
    
    const salt = bcrypt.genSaltSync(10)
    const user = await prisma.user.upsert({
        where: { email: 'hi@email.com' },
        update: {},
        create: {
            email: 'hi@email.com',
            password: bcrypt.hashSync('password', salt),
        },
    })
    
    const songs = await prisma.song.findMany({})
    await Promise.all(
        new Array(10).fill(0).map(async (_, i) => {
            return prisma.playlist.create({
                data: {
                    name: `Playlist #${i + 1}`,
                    songs: {
                        connect: songs.map((song) => ({ 
                            id: song.id 
                        })),
                    },
                    user: {
                        connect: { id: user.id },
                    },
                },
            })
        })
    )
}

run()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
    await prisma.$disconnect()
    })