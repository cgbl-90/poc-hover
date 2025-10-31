import { fn } from "storybook/test";
import { userEvent, within, expect } from "storybook/test";
import { allModes } from "../../.storybook/modes";

import { Square } from "./Square";

export default {
  title: "Example/Square",
  component: Square,
  parameters: {
    layout: "centered",
    chromatic: {
      modes: {
        mobile: allModes["small"],
        desktop: allModes["large"],
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    initialIsClosed: { control: "boolean" },
    label: { control: "text" },
  },
  args: { onClose: fn() },
};

export const OpenSquare = {
  args: {
    initialIsClosed: false,
    label: "Hover & Click X to Close",
  },
};

export const ClosedSquare = {
  args: {
    initialIsClosed: true,
    label: "Open Square",
  },
};

export const HoverAndClose = {
  args: {
    initialIsClosed: false,
    label: "Check Hover And Close X",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const square = canvas.getByText("Check Hover And Close X");
    await userEvent.hover(square);
    const closeButton = await canvas.findByLabelText("Close");
    await expect(closeButton).toBeInTheDocument();
    await userEvent.unhover(square);
  },
};

export const HoverAndShowX = {
  args: {
    initialIsClosed: false,
    label: "Check Hover And Show X",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const square = canvas.getByText("Check Hover And Show X");
    await userEvent.hover(square);
    const closeButton = await canvas.findByLabelText("Close");
    await expect(closeButton).toBeInTheDocument();
  },
};
