import "./Card.style";

import * as React from "react";
import PrimaryContext from "@client/contexts/PrimaryContext";
import Loop from "@utils/Loop";
import Shape from "../Shape/Shape";

export type CardAttSelector = 0 | 1 | 2;

export interface CardProps {
	shape: CardAttSelector;
	color: CardAttSelector;
	count: CardAttSelector;
	shade: CardAttSelector;
	height?: number;
}
export interface CardState { }

export default class Card extends React.PureComponent<CardProps, CardState> {
	constructor(props: CardProps) {
		super(props);
		this.state = {};
	}

	public render(): React.ReactNode {
		return (
			<div className="Card" style={this.getStyle()}>
				<PrimaryContext.Consumer>
					{ctx => {
						const { color, shade, shape } = this.props;
						const count = ctx.counts[this.props.count];
						const maxCount = Math.max(...ctx.counts);
						const pWidth = `${100 / maxCount}%`;

						return Loop.mapTimes(
							count, i => <div key={i} className="Card__shape" style={{ flexBasis: pWidth }}>
								<Shape
									color={color}
									shade={shade}
									shape={shape} />
							</div>
						);
					}}
				</PrimaryContext.Consumer>
			</div>
		);
	}

	private getStyle(): React.CSSProperties {
		const height = ((this.props.height || 0) + 1) / 100;

		return {
			boxShadow: height ? `${height / 5}em ${height / 2}em ${2 * height}em 0 rgba(0, 0, 0, 0.5)` : null,
		};
	}
}