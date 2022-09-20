import Image from 'next/image'
import {
    Box, 
    List,
    Center,
    Divider
} from "@chakra-ui/layout"
import {
    MdHome,
    MdSearch,
    MdLibraryMusic,
    MdPlaylistAdd,
    MdFavorite
} from "react-icons/md"

import MenuItem from './menuItem'
import PlaylistItem from './playlistItem'

const navMenu = 
    [
        {
            name: "Home",
            icon: MdHome,
            route: "/"
        },
        {
            name: "Search",
            icon: MdSearch,
            route: "/search"
        },
        {
            name: "Your Library",
            icon: MdLibraryMusic,
            route: "/library"
        }]

const musicMenu = [
    {
            name: "Create Playlist",
            icon: MdPlaylistAdd,
            route: "/playlist"
        },
        {
            name: "Liked Songs",
            icon: MdFavorite,
            route: "/favorites"
    }
]

const playlists = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`)

export default function sidebar() {
  return (
    <Box 
        width="100%" 
        height="calc(100vh - 100px)" 
        bg="black" 
        paddingX="5px" 
        color="gray"
    >
        <Box paddingY="20px" height="100%">
            <Center>
                <Box width="120px" marginBottom="20px" paddingX="20px">
                    <Image src="/logo.svg" height={60} width={120} />
                </Box>
            </Center>
            <Box>
                <List spacing={3}>
                    {navMenu.map(menu => (
                        <MenuItem
                            name={menu.name}
                            icon={menu.icon}
                            route={menu.route}
                        />
                    ))}
                </List>
            </Box>
            <Center>
                <Divider width="80%" marginY="20px" color="gray.800" />
            </Center> 
            <Box>
                <List spacing={2}>
                    {musicMenu.map(menu => (
                        <MenuItem
                            name={menu.name}
                            icon={menu.icon}
                            route={menu.route}
                        />
                    ))}
                </List>
            </Box>
            <Center>
                <Divider width="80%" marginY="20px" color="gray.800" />
            </Center> 
            <Box height="75%" overflowY="auto" paddingY="20px">
                <List spacing={2}>
                    {playlists.map(playlist => (
                        <PlaylistItem 
                            name={playlist}
                            route="/"
                        />
                    ))}
                </List>
            </Box>
        </Box>
    </Box>
  )
}