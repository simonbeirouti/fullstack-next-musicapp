import { ListItem, LinkBox, LinkOverlay, ListIcon } from "@chakra-ui/layout"
import Link from "next/link"

export default function menuItem({name, icon, route}) {
  return (
    <ListItem key={name} paddingX="20px" fontSize="16px">
        <LinkBox>
            <Link href={route}>
                <LinkOverlay>
                    <ListIcon as={icon} color="white" marginRight="20px" />
                    {name}
                </LinkOverlay>
            </Link>
        </LinkBox>
    </ListItem>
  )
}