import React from "react";
import SvgJson from "@typings/svgJson";

export interface PrimaryContextData {
	shades: [SvgJson<"pattern">, SvgJson<"pattern">, SvgJson<"pattern">];
	shapes: [string, string, string];
	colors: [string, string, string];
	counts: [number, number, number];
}

export const primaryContextDefaultValue: PrimaryContextData = {
	shades: [
		{
			tagName: "pattern",
			attributes: { x: 0, y: 0, width: 10, height: 10, patternUnits: "userSpaceOnUse" },
			children: [{
				tagName: "rect",
				attributes: { x: 0, y: 0, width: 10, height: 10 },
			}],
		},
		{
			tagName: "pattern",
			attributes: { x: 0, y: 0, width: 10, height: 4, patternUnits: "userSpaceOnUse" },
			children: [{
				tagName: "rect",
				attributes: { x: 0, y: 0, width: 10, height: 2 },
			}],
		},
		{
			tagName: "pattern",
			attributes: { x: 0, y: 0, width: 10, height: 10, patternUnits: "userSpaceOnUse" },
		}],
	shapes: [
		"M 20 0 L 0 50 L 20 100 L 40 50 Z",
		"m 13.288566,4.5598006 c 8.1737,-0.069609 23.791302,4.4549814 24.22918,22.6925614 0.200501,8.350901 -7.151987,24.223962 -7.297945,37.171249 -0.145959,12.94729 7.735822,15.87087 9.48733,22.274907 0.884237,3.233037 -7.152474,7.913466 -14.595893,8.074653 C 14.017425,95.013407 1.1739741,79.598392 1.1739741,66.511885 c 0,-13.086507 7.7358232,-16.566964 8.1737005,-32.994706 C 9.536902,26.417983 1.9037689,18.20318 0.7360975,13.7482 -0.07887725,10.638851 5.114866,4.6294098 13.288566,4.5598006 Z",
		"M 0 25 V 75 C 0 105, 40, 105, 40, 75 V 25 C 40 -5, 0 -5, 0 25 Z",
	],
	colors: ["red", "green", "purple"],
	counts: [1, 2, 3],
};

const PrimaryContext = React.createContext<PrimaryContextData>(primaryContextDefaultValue);

export default PrimaryContext;
