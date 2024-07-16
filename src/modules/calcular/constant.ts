import { TinyColor } from "@ctrl/tinycolor";
import type { WatermarkProps } from "antd";

export const gridStyle1: React.CSSProperties = {
  width: "34%",
  textAlign: "center",
  margin: "0 auto",
};

export const gridStyle: React.CSSProperties = {
  width: "33%",
  textAlign: "center",
  margin: "0 auto",
};

export const colors1 = ["#6253E1", "#04BEFE"];

export const getHoverColors = (colors: string[]) =>
  colors.map((color) => new TinyColor(color).lighten(5).toString());

export const getActiveColors = (colors: string[]) =>
  colors.map((color) => new TinyColor(color).darken(5).toString());

const config: any = {
  content: "牛马哞哞",
  color: "rgba(0, 0, 0, 0.15)",
  fontSize: 16,
  zIndex: 11,
  rotate: -22,
  gap: [100, 100],
  offset: undefined,
};
const { content, color, fontSize, zIndex, rotate, gap, offset } = config;

export const watermarkProps: WatermarkProps = {
  content,
  zIndex,
  rotate,
  gap,
  offset,
  font: {
    color: typeof color === "string" ? color : color.toRgbString(),
    fontSize,
  },
};

export const CitiesMap = {
  Beijing: {
    pension: 0.08,
    medical: 0.02,
    unemployment: 0.005,
    housingFund: 0.12,
    supplementaryFund: 0.03,
  },
  Shanghai: {
    pension: 0.08,
    medical: 0.02,
    unemployment: 0.005,
    housingFund: 0.07,
    supplementaryFund: 0.03,
  },
};
