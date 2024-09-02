import React, { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import InfiScroll from "../index";
import { InfiniteScrollProps } from "../types";

const meta: Meta<InfiniteScrollProps> = {
  title: "Example/InfiScroll",
  component: InfiScroll,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<InfiniteScrollProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // [To Do] : Add other props here
    children: (
      <ol>
        <li>content</li>
        <li>content</li>
        <li>content</li>
        <li>content</li>
        <li>content</li>
        <li>content</li>
        <li>content</li>
      </ol>
    ),
  },
} satisfies Story;
