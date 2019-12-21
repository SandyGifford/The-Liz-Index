import React from "react";
import Diamond from "@client/components/shapes/diamond";
import Squiggle from "@client/components/shapes/squiggle";
import Stadium from "@client/components/shapes/stadium";
import Solid from "@client/components/shades/solid";
import HalfShade from "@client/components/shades/halfShade";
import Empty from "@client/components/shades/empty";

export interface PrimaryContextData {
	shades: [(id: string) => React.ReactNode, (id: string) => React.ReactNode, (id: string) => React.ReactNode];
	shapes: [React.ReactElement, React.ReactElement, React.ReactElement];
	colors: [string, string, string];
	counts: [number, number, number];
}

export const primaryContextDefaultValue: PrimaryContextData = {
	shades: [Solid, HalfShade, Empty],
	shapes: [<Diamond />, <Squiggle />, <Stadium />],
	colors: ["red", "green", "purple"],
	counts: [1, 2, 3],
};

const PrimaryContext = React.createContext<PrimaryContextData>(primaryContextDefaultValue);

export default PrimaryContext;
