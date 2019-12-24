import "./ShapeGroup.style";

import * as React from "react";
import { AttributeSelector, ShapeAttributeSelector, ColorAttributeSelector, ShadeAttributeSelector } from "@typings/general";
import Shape from "@components/Shape/Shape";
import Loop from "@utils/Loop";
import PrimaryContext from "@client/contexts/PrimaryContext";

export interface ShapeGroupProps {
	shape: ShapeAttributeSelector;
	color: ColorAttributeSelector;
	shade: ShadeAttributeSelector;
	count?: AttributeSelector;
	countOverride?: number;
}
export interface ShapeGroupState { }

export default class ShapeGroup extends React.PureComponent<ShapeGroupProps, ShapeGroupState> {
	constructor(props: ShapeGroupProps) {
		super(props);
		this.state = {};
	}

	public render(): React.ReactNode {
		const { shape, color, shade, countOverride } = this.props;
		return <div className="ShapeGroup">
			<PrimaryContext.Consumer>
				{ctx => {
					const count = typeof countOverride === "number" ? countOverride : ctx.counts[this.props.count];
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