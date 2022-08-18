import { css, Global } from "@emotion/react";
import SharpGroteskBook20Woff from "./SharpGroteskBook20.woff";

const Fonts = () => (
  <Global
    styles={css`
      /* Width 20 */
      @font-face {
        font-family: "Sharp-Grotesk";
        font-weight: 400;
        src: url("${SharpGroteskBook20Woff}") format("woff");
      }
    `}
  />
);

export default Fonts;
