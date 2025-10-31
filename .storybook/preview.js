/** @type { import('@storybook/react-vite').Preview } */

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
        options: {
          small: { name: "Small", styles: { width: "640px", height: "900px" } },
          large: {
            name: "Large",
            styles: { width: "1024px", height: "900px" },
          },
        },
      },
    },
  },
};

export default preview;
