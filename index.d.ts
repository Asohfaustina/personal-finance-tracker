declare module "*.png";
declare module "*.JPG";
declare module "*.jpg";
declare module "*.ttf";
declare module "countries-cities";
declare module "*.jpeg";
declare module "@env";

declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}


