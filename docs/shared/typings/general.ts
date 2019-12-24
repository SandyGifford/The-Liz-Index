import SvgJson from "./svgJson";

export type AttributeSelector = 0 | 1 | 2;

export type ShapeAttributeSelector = AttributeSelector | string;
export type ColorAttributeSelector = AttributeSelector | string;
export type ShadeAttributeSelector = AttributeSelector | SvgJson;