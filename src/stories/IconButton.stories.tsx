import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, ButtonProps, Stack } from "@mui/material";
import { Delete, Send } from "@mui/icons-material";

export default {
  title: "MUI/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["contained", "outlined", "text"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    color: {
      options: ["primary", "secondary", "success", "error"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Stack direction="row" spacing={2}>
    <Button {...args} startIcon={<Delete />}>
      Delete
    </Button>
    <Button disabled {...args} endIcon={<Send />}>
      SEND
    </Button>
  </Stack>
);

export const LabelAndIcon = Template.bind({});
const buttonProps: ButtonProps = {
  variant: "contained",
  color: "primary",
  size: "medium",
};
LabelAndIcon.args = buttonProps;
