import "./Shape.style";

import * as React from "react";
import PrimaryContext from "@client/contexts/PrimaryContext";
import { ShapeAttributeSelector, ColorAttributeSelector, ShadeAttributeSelector } from "@typings/general";
import JsonSvg from "@components/JsonSvg/JsonSvg";
import uuid from "uuid";

export interface ShapeProps {
	shape: ShapeAttributeSelector;
	color: ColorAttributeSelector;
	shade: ShadeAttributeSelector;
}
export interface ShapeState {
	patternId: string;
}

export default class Shape extends React.PureComponent<ShapeProps, ShapeState> {
	constructor(props: ShapeProps) {
		super(props);
		this.state = {
			patternId: uuid(),
		};
	}

	public render(): React.ReactNode {
		const { patternId } = this.state;

		return (
			<PrimaryContext.Consumer>
				{ctx => {
					const shape = typeof this.props.shape === "number" ? ctx.shapes[this.props.shape] : this.props.shape;
					const shade = typeof this.props.shade === "number" ? ctx.shades[this.props.shade] : this.props.shade;
					const color = typeof this.props.color === "number" ? ctx.colors[this.props.color] : this.props.color;

					const { tagName, children } = shade || {};
					const attributes = { ...shade.attributes, id: patternId };

					return <svg viewBox="-10 -10 60 120" className="Shape" style={{ color }}>
						<defs className="Shape__defs">
							<JsonSvg json={{ tagName, attributes, children }} />
						</defs>
						<path
							d={shape}
							style={{ fill: `url(#${patternId})` }}
							className="Shape__path" />
					</svg>;
				}}
			</PrimaryContext.Consumer >
		);
	}
}