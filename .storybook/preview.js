/** @type { import('@storybook/react-vite').Preview } */
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const mobileViewports = {
  iphone14: {
    name: "iPhone 14",
    styles: {
      width: "390px",
      height: "844px",
    },
  },
  desktop: {
    name: "Desktop",
    styles: {
      width: "1200px",
      height: "844px",
    },
  },
};

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: "todo",
    },

    viewport: {
      viewports: {
        ...mobileViewports,
        ...INITIAL_VIEWPORTS,
      },
    },

    chromatic: {
      modes: {
        iphone14: {
          viewport: "390x844",
        },
        desktop: {
          viewport: "1200x844",
        },
      },
    },
  },
};

export default preview;
