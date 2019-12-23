import "./Shape.style";

import * as React from "react";
import PrimaryContext from "@client/contexts/PrimaryContext";
import { AttributeSelector } from "@typings/general";
import JsonSvg from "@components/JsonSvg/JsonSvg";
import uuid from "uuid";

export interface ShapeProps {
	shape: AttributeSelector;
	color: AttributeSelector | string;
	shade: AttributeSelector | "solid";
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
					const shape = ctx.shapes[this.props.shape];
					const shade = typeof this.props.shade === "number" ? ctx.shades[this.props.shade] : null;
					const color = typeof this.props.color === "string" ? this.props.color : ctx.colors[this.props.color];

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
				}
				}
			</PrimaryContext.Consumer >
		);
	}
}