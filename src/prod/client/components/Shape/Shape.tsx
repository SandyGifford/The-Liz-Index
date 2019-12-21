import "./Shape.style";

import * as React from "react";
import PrimaryContext from "@client/contexts/PrimaryContext";
import DOMUtils from "@utils/DOMUtils";
import { AttributeSelector } from "@typings/general";

export interface ShapeProps {
	shape: AttributeSelector;
	color: AttributeSelector;
	shade: AttributeSelector;
}
export interface ShapeState { }

export default class Shape extends React.PureComponent<ShapeProps, ShapeState> {
	constructor(props: ShapeProps) {
		super(props);
		this.state = {};
	}

	public render(): React.ReactNode {
		return (
			<PrimaryContext.Consumer>
				{ctx => {
					const shape = ctx.shapes[this.props.shape];
					const shade = ctx.shades[this.props.shade];
					const color = ctx.colors[this.props.color];

					return <svg viewBox="-10 -10 60 120" className="Shape" color={color}>
						<defs className="Shape__defs">{shade(`pattern${this.props.shade}`)}</defs>
						<g className={DOMUtils.getBEMClassName("Shape__g", { [`pattern${this.props.shade}`]: true })}>
							{React.cloneElement(shape)}
						</g>
					</svg>;
				}
				}
			</PrimaryContext.Consumer >
		);
	}
}