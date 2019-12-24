import "./Card.style";

import * as React from "react";
import MathUtils from "@utils/MathUtils";
import DOMUtils from "@utils/DOMUtils";

export interface CardProps {
	style?: React.CSSProperties;
	className?: string;
	elevation?: number;
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
		const { children } = this.props;
		return (
			<div className={this.getClassName()} style={this.getStyle()}>
				<div className="Card__content">
					{children}
				</div>
			</div>
		);
	}

	private getStyle(): React.CSSProperties {
		const { repressOffset, elevation, style } = this.props;
		const offsetElevation = (elevation || 0) + 3;

		return {
			boxShadow: `${offsetElevation / 5}px ${offsetElevation / 5}px ${offsetElevation / 2}px 0 rgba(0, 0, 0, ${(20 / (MathUtils.clamp(offsetElevation, 0, 40))) - 0.5})`,
			transform: !repressOffset && elevation ? `translate(${offsetElevation / -5}%, ${offsetElevation / -5}%)` : null,
			...style,
		};
	}

	private getClassName(): string {
		const { animated, className } = this.props;
		return DOMUtils.getBEMClassName("Card", { animated }) + (className ? " " + className : "");
	}
}