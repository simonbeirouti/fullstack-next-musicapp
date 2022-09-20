import { ListItem, LinkBox, LinkOverlay } from "@chakra-ui/layout"
import Link from "next/link"

export default function menuItem({name, route}) {
  return (
    <ListItem paddingX="20px" fontSize="16px" marginLeft="5px" key={name}>
        <LinkBox>
            <Link href={route}>
                <LinkOverlay>
                    {name}
                </LinkOverlay>
            </Link>
        </LinkBox>
    </ListItem>
  )
}