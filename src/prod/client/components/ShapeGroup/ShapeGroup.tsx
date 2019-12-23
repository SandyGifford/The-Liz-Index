import "./ShapeGroup.style";

import * as React from "react";
import { AttributeSelector } from "@typings/general";
import Shape from "../Shape/Shape";
import Loop from "@utils/Loop";
import PrimaryContext from "@client/contexts/PrimaryContext";

export interface ShapeGroupProps {
	shape: AttributeSelector;
	color: AttributeSelector;
	count: AttributeSelector;
	shade: AttributeSelector;
}
export interface ShapeGroupState { }

export default class ShapeGroup extends React.PureComponent<ShapeGroupProps, ShapeGroupState> {
	constructor(props: ShapeGroupProps) {
		super(props);
		this.state = {};
	}

	public render(): React.ReactNode {
		const { shape, color, shade } = this.props;
		return <div className="ShapeGroup">
			<PrimaryContext.Consumer>
				{ctx => {
					const count = ctx.counts[this.props.count];
					const maxCount = Math.max(...ctx.counts);
					const pWidth = `${100 / maxCount}%`;

					return Loop.mapTimes(
						count, i => <div key={i} className="ShapeGroup__shape" style={{ flexBasis: pWidth }}>
							<Shape
								color={color}
								shade={shade}
								shape={shape} />
						</div>
					);
				}}
			</PrimaryContext.Consumer>
		</div>;
	}
}