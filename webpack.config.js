module: {
    rules: [
      {
        test: /\.mjs$/,
        resolve: { fullySpecified: false },
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
        exclude: /node_modules/,
      },
    ],
  },