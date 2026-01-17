import type { Meta, StoryObj } from "@storybook/react";
import BranchNavButton from "./BranchNavButton";

const meta: Meta<typeof BranchNavButton> = {
  title: "Components/BranchNavButton",
  component: BranchNavButton,
  args: {
    counter: 3,
    direction: "left",
    isVisible: true,
  },
  argTypes: {
    counter: {
      control: { type: "number", min: 0 },
      description: "Anzahl der Child-Nodes",
    },
    isVisible: {
      control: "boolean",
      description: "Ob der Button aktuell sichtbar ist",
    },
    direction: {
      control: "select",
      description: "Richtung",
    },
    onClick: {
      action: "badge-clicked",
      description: "Click-Callback mit Expand-Informationen",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "BranchNavButton zeigt die Anzahl der Child-Nodes an und signalisiert Expand/Collapse.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof BranchNavButton>;

export const Default: Story = {};
