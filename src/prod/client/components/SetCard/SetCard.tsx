import "./SetCard.style";

import * as React from "react";
import { ShapeAttributeSelector, ColorAttributeSelector, ShadeAttributeSelector, AttributeSelector } from "@typings/general";
import ShapeGroup from "@components/ShapeGroup/ShapeGroup";
import Card, { CardProps } from "@components/Card/Card";

export interface SetCardProps extends CardProps {
	shape: ShapeAttributeSelector;
	color: ColorAttributeSelector;
	shade: ShadeAttributeSelector;
	count?: AttributeSelector;
	countOverride?: number;
}
export interface SetCardState { }

export default class SetCard extends React.PureComponent<SetCardProps, SetCardState> {
	constructor(props: SetCardProps) {
		super(props);
		this.state = {};
	}

	public render(): React.ReactNode {
		const {
			color,
			shade,
			shape,
			count,
			countOverride,
			elevation,
			width,
			animated,
			repressOffset,
		} = this.props;

		return (
			<Card
				elevation={elevation}
				width={width}
				animated={animated}
				repressOffset={repressOffset}>
				<ShapeGroup
					color={color}
					shade={shade}
					shape={shape}
					count={count}
					countOverride={countOverride} />
			</Card>
		);
	}
}