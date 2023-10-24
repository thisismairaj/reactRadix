import { Flex, Button } from "@radix-ui/themes"
import {
  ArrowRightIcon,
  HeartFilledIcon,
  Link1Icon,
} from "@radix-ui/react-icons"

function App() {
  return (
    <Flex gap="3" align="center">
      <Button variant="classic">
        Get started <Link1Icon />
      </Button>
      <Button variant="solid">
        Get started <HeartFilledIcon />
      </Button>
      <Button variant="soft">
        Get started <ArrowRightIcon />
      </Button>
    </Flex>
  )
}

export default App
