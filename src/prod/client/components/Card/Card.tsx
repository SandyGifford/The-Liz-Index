import "./Card.style";

import * as React from "react";
import MathUtils from "@utils/MathUtils";
import DOMUtils from "@utils/DOMUtils";
import { AttributeSelector } from "@typings/general";
import ShapeGroup from "../ShapeGroup/ShapeGroup";

export interface CardProps {
	shape: AttributeSelector;
	color: AttributeSelector;
	count: AttributeSelector;
	shade: AttributeSelector;
	elevation?: number;
	width?: number;
	animated?: boolean;
	repressOffset?: boolean;
}
export interface CardState { }

export default class Card extends React.PureComponent<CardProps, CardState> {
	constructor(props: CardProps) {
		super(props);
		this.state = {};
	}

	public render(): React.ReactNode {
		const { color, shade, shape, animated, count } = this.props;
		return (
			<div className={DOMUtils.getBEMClassName("Card", { animated })} style={this.getStyle()}>
				<div className="Card__shapes">
					<ShapeGroup
						color={color}
						shade={shade}
						shape={shape}
						count={count} />
				</div>
			</div>
		);
	}

	private getStyle(): React.CSSProperties {
		const { repressOffset, elevation } = this.props;
		const offsetElevation = (elevation || 0) + 3;
		return {
			boxShadow: `${offsetElevation / 5}px ${offsetElevation / 5}px ${offsetElevation / 2}px 0 rgba(0, 0, 0, ${(20 / (MathUtils.clamp(offsetElevation, 0, 40))) - 0.5})`,
			transform: !repressOffset && elevation ? `translate(${offsetElevation / -5}%, ${offsetElevation / -5}%)` : null,
			width: this.props.width,
		};
	}
}