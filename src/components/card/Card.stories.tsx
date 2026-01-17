import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";
import React from "react";
import { HierarchyNodeType } from "../../types/hierarchy-node.types";

const mockNode: HierarchyNodeType = {
  id: "Node-AA",
  headerTitle: "Node-AA",
  headerSubTitle: "Node-AA-Subtitle",
  content: {
    valueA: "Value A",
    valueB: "Value B",
    valueC: "Value C",
  },
  avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
  showAvatar: true,
  layout: {
    headerBackgroundColor: "#123456",
    headerTitleColor: "#ffffff",
    headerSubtitleColor: "#cccccc",
  },
  children: [],
};

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  args: {
    node: mockNode,
    showNavButton: true,
    showChildConnection: true,
    showParentConnection: true,
    positionIndex: 0,
    content: (
      <div>
        <strong>Custom Content</strong>
        <div>Value A</div>
        <div>Value B</div>
      </div>
    ),
  },
  argTypes: {
    showNavButton: {
      control: "boolean",
      description: "Button anzeigen",
    },
    showChildConnection: {
      control: "boolean",
      description: "Kinder visuell anzeigen",
    },
    showParentConnection: {
      control: "boolean",
      description: "Parent-Bezug anzeigen",
    },
    positionIndex: {
      control: { type: "number", min: 0 },
      description: "Index des Nodes im Parent",
    },
    onNavButtonClick: {
      action: "badge-clicked",
      description: "Click auf Button",
    },
    content: {
      control: false,
      description: "Beliebiger React-Content innerhalb der Card",
    },
    node: {
      control: false,
      description: "HierarchyNode-Datenobjekt",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Card ist die visuelle Repräsentation eines HierarchyNodes innerhalb eines Graphen.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {};
