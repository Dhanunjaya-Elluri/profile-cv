module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.900"),
            maxWidth: "100%",
            code: {
              color: theme("colors.pink.600"),
              backgroundColor: theme("colors.gray.100"),
              borderRadius: theme("borderRadius.md"),
              padding: "0.2em 0.4em",
              fontWeight: "400",
              "&::before": { content: "none" },
              "&::after": { content: "none" },
            },
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
            pre: {
              backgroundColor: theme("colors.gray.900"),
              color: theme("colors.gray.100"),
              borderRadius: theme("borderRadius.lg"),
              padding: theme("spacing.6"),
              marginTop: theme("spacing.6"),
              marginBottom: theme("spacing.6"),
            },
            "pre code": {
              backgroundColor: "transparent",
              padding: "0",
              color: "inherit",
              fontSize: "0.9em",
            },
            h1: {
              color: theme("colors.gray.900"),
              fontWeight: "800",
              fontSize: theme("fontSize.3xl"),
              scrollMarginTop: "100px",
            },
            h2: {
              color: theme("colors.gray.900"),
              fontWeight: "700",
              fontSize: theme("fontSize.2xl"),
              marginTop: theme("spacing.10"),
              marginBottom: theme("spacing.4"),
              scrollMarginTop: "100px",
            },
            h3: {
              color: theme("colors.gray.900"),
              fontWeight: "600",
              fontSize: theme("fontSize.xl"),
              marginTop: theme("spacing.8"),
              marginBottom: theme("spacing.3"),
              scrollMarginTop: "100px",
            },
            "ul > li": {
              paddingLeft: "1.5em",
              position: "relative",
              "&::before": {
                content: '""',
                width: "0.5em",
                height: "0.5em",
                backgroundColor: theme("colors.gray.300"),
                borderRadius: "50%",
                position: "absolute",
                left: 0,
                top: "0.5em",
              },
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.300"),
            code: {
              color: theme("colors.pink.400"),
              backgroundColor: theme("colors.gray.800"),
            },
            h1: {
              color: theme("colors.gray.100"),
            },
            h2: {
              color: theme("colors.gray.100"),
            },
            h3: {
              color: theme("colors.gray.100"),
            },
            strong: {
              color: theme("colors.gray.100"),
            },
            "ul > li::before": {
              backgroundColor: theme("colors.gray.700"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
