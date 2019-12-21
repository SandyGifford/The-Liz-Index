import "./Card.style";

import * as React from "react";
import PrimaryContext from "@client/contexts/PrimaryContext";
import Loop from "@utils/Loop";
import Shape from "../Shape/Shape";
import MathUtils from "@utils/MathUtils";
import DOMUtils from "@utils/DOMUtils";

export type CardAttSelector = 0 | 1 | 2;

export interface CardProps {
	shape: CardAttSelector;
	color: CardAttSelector;
	count: CardAttSelector;
	shade: CardAttSelector;
	elevation?: number;
	width?: number;
	animated?: boolean;
}
export interface CardState { }

export default class Card extends React.PureComponent<CardProps, CardState> {
	constructor(props: CardProps) {
		super(props);
		this.state = {};
	}

	public render(): React.ReactNode {
		const { color, shade, shape, animated } = this.props;
		return (
			<div className={DOMUtils.getBEMClassName("Card", { animated })} style={this.getStyle()}>
				<div className="Card__sizer" />
				<div className="Card__shapes">
					<PrimaryContext.Consumer>
						{ctx => {
							const count = ctx.counts[this.props.count];
							const maxCount = Math.max(...ctx.counts);
							const pWidth = `${100 / maxCount}%`;

							return Loop.mapTimes(
								count, i => <div key={i} className="Card__shapes__shape" style={{ flexBasis: pWidth }}>
									<Shape
										color={color}
										shade={shade}
										shape={shape} />
								</div>
							);
						}}
					</PrimaryContext.Consumer>
				</div>
			</div>
		);
	}

	private getStyle(): React.CSSProperties {
		const elevation = (this.props.elevation || 0) + 3;
		return {
			boxShadow: elevation ? `${elevation / 5}px ${elevation / 5}px ${elevation / 2}px 0 rgba(0, 0, 0, ${(20 / (MathUtils.clamp(elevation, 0, 40))) - 0.5})` : null,
			width: this.props.width,
		};
	}
}