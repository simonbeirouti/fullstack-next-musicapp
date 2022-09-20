import Image from 'next/image'
import Link from 'next/link'
import {
    Box, 
    List,
    ListItem,
    ListIcon,
    Center,
    Divider,
    LinkBox,
    LinkOverlay
} from "@chakra-ui/layout"
import {
    MdHome,
    MdSearch,
    MdLibraryMusic,
    MdPlaylistAdd,
    MdFavorite
} from "react-icons/md"

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
        },
        {
            name: "Create Playlist",
            icon: MdPlaylistAdd,
            route: "/playlist"
        },
        {
            name: "Liked Songs",
            icon: MdFavorite,
            route: "/liked"
        },
    ]

export default function sidebar() {
  return (
    <Box 
        width="100%" 
        height="calc(100vh - 100px)" 
        bg="black" 
        paddingX="5px" 
        color="gray"
    >
        <Box paddingY="20px">
            <Center>
                <Box width="120px" marginBottom="20px" paddingX="20px">
                    <Image src="/logo.svg" height={60} width={120} />
                </Box>
            </Center>
            <Box marginBottom="20px">
                <List spacing={3}>
                    {navMenu.map(menu => (
                        <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                            <LinkBox>
                                <Link href={menu.route}>
                                    <LinkOverlay>
                                    <ListIcon as={menu.icon} color="white" marginRight="20px" />
                                    {menu.name}
                                    </LinkOverlay>
                                </Link>
                            </LinkBox>
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Center>
                <Divider width="80%"/>
            </Center>    
        </Box>
    </Box>
  )
}