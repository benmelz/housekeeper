import postcssSass from "@csstools/postcss-sass";
import autoprefixer from "autoprefixer";
import postcssScss from "postcss-scss";

export default {
  parser: postcssScss,
  plugins: [
    autoprefixer,
    postcssSass(),
  ],
}
