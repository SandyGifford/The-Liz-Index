import "./CardPicker.style";

import * as React from "react";
import { AttributeSelector } from "@typings/general";
import ShapeGroup from "../ShapeGroup/ShapeGroup";
import Loop from "@utils/Loop";

export interface CardPickerProps {
	shape: AttributeSelector;
	color: AttributeSelector;
	count: AttributeSelector;
	shade: AttributeSelector;
}
export interface CardPickerState { }

export default class CardPicker extends React.PureComponent<CardPickerProps, CardPickerState> {
	constructor(props: CardPickerProps) {
		super(props);
		this.state = {};
	}

	public render(): React.ReactNode {
		const { shape, color, count, shade } = this.props;
		return <div className="CardPicker">
			<div className="CardPicker__row">{
				Loop.mapTimes(3, i => <div key={i} className="CardPicker__row__option">
					<div className="CardPicker__row__option__content">
						<ShapeGroup count={i as AttributeSelector} color={color} shade={shade} shape={shape} />
					</div>
				</div>)
			}</div>
			<div className="CardPicker__row">{
				Loop.mapTimes(3, i => <div key={i} className="CardPicker__row__option">
					<div className="CardPicker__row__option__content">
						<ShapeGroup count={count} color={i as AttributeSelector} shade={shade} shape={shape} />
					</div>
				</div>)
			}</div>
			<div className="CardPicker__row">{
				Loop.mapTimes(3, i => <div key={i} className="CardPicker__row__option">
					<div className="CardPicker__row__option__content">
						<ShapeGroup count={count} color={color} shade={i as AttributeSelector} shape={shape} />
					</div>
				</div>)
			}</div>
			<div className="CardPicker__row">{
				Loop.mapTimes(3, i => <div key={i} className="CardPicker__row__option">
					<div className="CardPicker__row__option__content">
						<ShapeGroup count={count} color={color} shade={shape} shape={i as AttributeSelector} />
					</div>
				</div>)
			}</div>
		</div>;
	}
}
