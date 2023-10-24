import { Callout, Theme, Flex, Badge, Link } from "@radix-ui/themes"
import { InfoCircledIcon, LinkBreak1Icon } from "@radix-ui/react-icons"
import "@radix-ui/themes/styles.css"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import Icon from "./Icon.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme
      accentColor="grass"
      grayColor="slate"
      radius="full"
      appearance="dark"
    >
      <App />
      <Icon />
      <Flex gap="2">
        <Badge color="orange">In progress</Badge>
        <Badge color="blue">In review</Badge>
        <Badge color="green">Complete</Badge>
        <Badge color="green" variant="outline">
          Complete
        </Badge>
        <Badge color="green" variant="solid">
          Complete
        </Badge>
        <Badge color="blue" variant="soft">
          Complete
        </Badge>
        <Badge color="green" size="2" radius="medium">
          Complete
        </Badge>
      </Flex>
      <Flex direction="column" gap="6" align="stretch">
        <Callout.Root variant="outline">
          <Callout.Icon>
            <InfoCircledIcon />
          </Callout.Icon>
          <Callout.Text>
            You will need admin privileges to install and access this
            application.
          </Callout.Text>
        </Callout.Root>
        <Callout.Root variant="surface">
          <Callout.Icon>
            <LinkBreak1Icon />
          </Callout.Icon>
          <Callout.Text>
            You will need{" "}
            <Link href="#" color="grass" underline="always" weight="bold">
              admin privileges
            </Link>{" "}
            to install and access this application.
          </Callout.Text>
        </Callout.Root>
      </Flex>
    </Theme>
  </React.StrictMode>
)
