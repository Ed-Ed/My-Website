const isSsr = process.env.MODE === "ssr" ? true : false;

module.exports = {
  presets: [
    "@babel/preset-react",
    "@babel/preset-typescript",
    [
      "@babel/preset-env",
      {
        targets: !isSsr
          ? {
              browsers: [
                "last 4 iOS versions",
                "last 3 Safari versions",
                "last 1 ChromeAndroid version",
                "last 2 Chrome versions",
                "last 2 Samsung versions",
                "last 2 Firefox versions",
                "last 1 Edge version"
              ]
            }
          : { node: "current" }
      }
    ]
  ],
  plugins: ["@loadable/babel-plugin", "@babel/plugin-syntax-dynamic-import"]
};
