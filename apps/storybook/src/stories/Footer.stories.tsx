import { Meta, StoryObj } from "@storybook/react";
import { FooterSection } from "@workspace/ui/components/ui/footer";

const meta: Meta<typeof FooterSection> = {
  title: "FooterSection",
  component: FooterSection,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default: StoryObj<typeof FooterSection> = {
  render: () => <FooterSection />,
};
