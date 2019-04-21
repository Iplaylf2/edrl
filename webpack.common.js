const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "demo.js",
    library: "Demo",
    libraryTarget: "umd",
    libraryExport: "default"
  },
  plugins: [new CleanWebpackPlugin()],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "@Src": path.resolve(__dirname, "src")
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          },
          {
            loader: "less-loader"
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  externals: {
    react: "React"
  }
};
