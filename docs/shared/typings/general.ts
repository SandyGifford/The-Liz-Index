import SvgJson from "./svgJson";

export type AttributeSelector = 0 | 1 | 2;

export type ShapeAttributeSelector = AttributeSelector | string;
export type ColorAttributeSelector = AttributeSelector | string;
export type ShadeAttributeSelector = AttributeSelector | SvgJson;

export interface CardDef {
	shape: AttributeSelector;
	color: AttributeSelector;
	shade: AttributeSelector;
	count: AttributeSelector;
}

export type SetDef = [CardDef, CardDef, CardDef];

export type QuickCardsLookup = Partial<{
	[shape in AttributeSelector]: Partial<{
		[color in AttributeSelector]: Partial<{
			[shade in AttributeSelector]: Partial<{
				[count in AttributeSelector]: number
			}>
		}>
	}>
}>;
