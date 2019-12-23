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
		return <div className="CardPicker">
			{/* <div className="CardPicker__row">{
				Loop.mapTimes(3, i => <div key={i} className="CardPicker__row__option">
					<ShapeGroup count={2} color={2} shade={i as AttributeSelector} shape={1} />
				</div>)
			}</div> */}
			<div className="CardPicker__row">{
				Loop.mapTimes(3, i => <div key={i} className="CardPicker__row__option">
					<ShapeGroup count={2} color={i as AttributeSelector} shade={1} shape={1} />
				</div>)
			}</div>
			{/* <div className="CardPicker__row">{
				Loop.mapTimes(3, i => <div key={i} className="CardPicker__row__option">
					<ShapeGroup count={2} color={2} shade={i as AttributeSelector} shape={1} />
				</div>)
			}</div>
			<div className="CardPicker__row">{
				Loop.mapTimes(3, i => <div key={i} className="CardPicker__row__option">
					<ShapeGroup count={2} color={2} shade={1} shape={i as AttributeSelector} />
				</div>)
			}</div> */}
		</div>;
	}
}
