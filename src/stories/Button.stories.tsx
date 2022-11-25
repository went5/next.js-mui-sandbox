import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, ButtonProps, Stack } from "@mui/material";

export default {
  title: "MUI/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["text", "outlined", "contained"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Stack direction="row" spacing={2}>
    <Button color="primary" {...args}>
      Primary
    </Button>
    <Button color="secondary" {...args}>
      Secondary
    </Button>
    <Button color="success" {...args}>
      Sucess
    </Button>
    <Button color="error" {...args}>
      Error
    </Button>
    <Button disabled {...args}>
      Disabled
    </Button>
  </Stack>
);

export const Basic = Template.bind({});
const buttonProps: ButtonProps = {
  variant: "contained",
  size: "small",
};
Basic.args = buttonProps;
