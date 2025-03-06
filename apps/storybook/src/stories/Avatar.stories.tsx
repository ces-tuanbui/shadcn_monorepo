import type { Meta, StoryObj } from "@storybook/react";

import {
  Avatar,
  AvatarImage,
  AvatarImageProps,
  AvatarStyle,
  CustomAvatarProps,
} from "@workspace/ui/components/ui/avatar";

type AvatarSizes = keyof typeof AvatarStyle.sizes;
const sizes = Object.keys(AvatarStyle.sizes) as AvatarSizes[];

const AvatarTyped = Avatar as unknown as React.ComponentType<CustomAvatarProps>;
const AvatarImageTyped =
  AvatarImage as unknown as React.ForwardRefExoticComponent<
    Omit<AvatarImageProps & React.RefAttributes<HTMLImageElement>, "ref"> &
      React.RefAttributes<HTMLImageElement>
  >;
const meta: Meta = {
  title: "Avatar",
  component: Avatar as unknown as React.ComponentType<CustomAvatarProps>,
  argTypes: {
    size: {
      description: "Defines the size of the avatar",
      table: {
        type: { summary: sizes.join("|") },
        defaultValue: { summary: "md" },
      },
      control: "select",
      options: sizes,
    },
    className: {
      description: "Override or extend the styles applied to the component",
      control: "text",
      table: {
        category: "Override/extend",
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    asChild: {
      description:
        "Radix will not render a default DOM element, instead cloning the part's child and passing it the props",
      table: {
        category: "Radix",
        type: { summary: "boolean" },
        defaultValue: { summary: "" },
      },
    },
  },
  render: ({ ...args }) => {
    return (
      <AvatarTyped {...args} asChild>
        <AvatarImageTyped
          src="https://xsgames.co/randomusers/avatar.php?g=female"
          alt="Picture of the author"
        />
      </AvatarTyped>
    );
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const All: Story = {
  render: () => {
    return (
      <div className="mb-4 flex items-center space-x-2">
        {sizes.map((size) => (
          <AvatarTyped size={size}>
            <AvatarImageTyped
              src="https://xsgames.co/randomusers/avatar.php?g=female"
              alt="Picture of the author"
            />
          </AvatarTyped>
        ))}
      </div>
    );
  },
};
