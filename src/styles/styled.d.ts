import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: "#f5f5f5";
      secondary: "#e0e0e0";
      background: "#fff";
      text: "#333";
      border: "#e0e0e0";
    };
  }
}
