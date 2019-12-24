import "./CardPicker.style";

import * as React from "react";
import { AttributeSelector } from "@typings/general";
import ShapeGroup from "../ShapeGroup/ShapeGroup";
import Loop from "@utils/Loop";
import DOMUtils from "@utils/DOMUtils";
import TextByWidth from "../TextByWidth/TextByWidth";

export type CardPickerChanged = (shape: AttributeSelector, color: AttributeSelector, count: AttributeSelector, shade: AttributeSelector) => void;

export interface CardPickerProps {
	shape: AttributeSelector;
	color: AttributeSelector;
	count: AttributeSelector;
	shade: AttributeSelector;
	onChange: CardPickerChanged;

}
export interface CardPickerState { }

export default class CardPicker extends React.PureComponent<CardPickerProps, CardPickerState> {
	constructor(props: CardPickerProps) {
		super(props);
		this.state = {};
	}

	public render(): React.ReactNode {
		const { shape, color, count, shade, onChange } = this.props;
		return <div className="CardPicker">
			<div className="CardPicker__row">
				<div className="CardPicker__row__label"><TextByWidth fraction={0.4}>count</TextByWidth></div>
				{
					Loop.mapTimes(3, (i: AttributeSelector) => <div key={i} onClick={() => onChange(shape, color, i, shade)} className={DOMUtils.getBEMClassName("CardPicker__row__option", { selected: i === count })}>
						<div className="CardPicker__row__option__content">
							<ShapeGroup count={i} color={color} shade={shade} shape={shape} />
						</div>
					</div>)
				}
			</div>
			<div className="CardPicker__row">
				<div className="CardPicker__row__label"><TextByWidth fraction={0.4}>color</TextByWidth></div>
				{
					Loop.mapTimes(3, (i: AttributeSelector) => <div key={i} onClick={() => onChange(shape, i, count, shade)} className={DOMUtils.getBEMClassName("CardPicker__row__option", { selected: i === color })}>
						<div className="CardPicker__row__option__content">
							<ShapeGroup count={count} color={i} shade={shade} shape={shape} />
						</div>
					</div>)
				}
			</div>
			<div className="CardPicker__row">
				<div className="CardPicker__row__label"><TextByWidth fraction={0.4}>shade</TextByWidth></div>
				{
					Loop.mapTimes(3, (i: AttributeSelector) => <div key={i} onClick={() => onChange(shape, color, count, i)} className={DOMUtils.getBEMClassName("CardPicker__row__option", { selected: i === shade })}>
						<div className="CardPicker__row__option__content">
							<ShapeGroup count={count} color={color} shade={i} shape={shape} />
						</div>
					</div>)
				}
			</div>
			<div className="CardPicker__row">
				<div className="CardPicker__row__label"><TextByWidth fraction={0.4}>shape</TextByWidth></div>
				{
					Loop.mapTimes(3, (i: AttributeSelector) => <div key={i} onClick={() => onChange(i, color, count, shade)} className={DOMUtils.getBEMClassName("CardPicker__row__option", { selected: i === shape })}>
						<div className="CardPicker__row__option__content">
							<ShapeGroup count={count} color={color} shade={shade} shape={i} />
						</div>
					</div>)
				}
			</div>
		</div>;
	}
}
