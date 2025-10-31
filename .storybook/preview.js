/** @type { import('@storybook/react-vite').Preview } */

import { allModes } from "./modes";

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    chromatic: {
      modes: {
        small: allModes["small"],
        large: allModes["large"],
      },
    },

    a11y: {
      test: "todo",
    },

    viewport: {
      viewports: {
        options: {
          small: { name: "small", styles: { width: "640px", height: "900px" } },
          large: {
            name: "large",
            styles: { width: "1024px", height: "900px" },
          },
        },
      },
    },
  },
};

export default preview;
