import "./CardPicker.style";

import * as React from "react";
import { AttributeSelector } from "@typings/general";
import ShapeGroup from "@components/ShapeGroup/ShapeGroup";
import Loop from "@utils/Loop";
import DOMUtils from "@utils/DOMUtils";
import TextByWidth from "@components/TextByWidth/TextByWidth";

export type CardPickerChanged = (shape: AttributeSelector, color: AttributeSelector, count: AttributeSelector, shade: AttributeSelector) => void;

export interface CardPickerProps {
	style?: React.CSSProperties;
	className?: string;
	shape: AttributeSelector;
	color: AttributeSelector;
	count: AttributeSelector;
	shade: AttributeSelector;
	onChange?: CardPickerChanged;

}
export interface CardPickerState { }

export default class CardPicker extends React.PureComponent<CardPickerProps, CardPickerState> {
	constructor(props: CardPickerProps) {
		super(props);
		this.state = {};
	}

	public render(): React.ReactNode {
		const { shape, color, count, shade, style } = this.props;
		return <div className={this.getClassName()} style={style}>
			<div className="CardPicker__row">
				<div className="CardPicker__row__label"><TextByWidth fraction={0.4}>count</TextByWidth></div>
				{
					Loop.mapTimes(3, (i: AttributeSelector) => <div
						key={i}
						onClick={() => this.countChanged(i)}
						onTouchStart={() => this.countChanged(i)}
						className={DOMUtils.getBEMClassName("CardPicker__row__option", { selected: i === count })}>
						<div className="CardPicker__row__option__content">
							<ShapeGroup count={i} color={color} shade={shade} shape={shape} />
						</div>
					</div>)
				}
			</div>
			<div className="CardPicker__row">
				<div className="CardPicker__row__label"><TextByWidth fraction={0.4}>color</TextByWidth></div>
				{
					Loop.mapTimes(3, (i: AttributeSelector) => <div
						key={i}
						onClick={() => this.colorChanged(i)}
						onTouchStart={() => this.colorChanged(i)}
						className={DOMUtils.getBEMClassName("CardPicker__row__option", { selected: i === color })}>
						<div className="CardPicker__row__option__content">
							<ShapeGroup count={count} color={i} shade={shade} shape={shape} />
						</div>
					</div>)
				}
			</div>
			<div className="CardPicker__row">
				<div className="CardPicker__row__label"><TextByWidth fraction={0.4}>shade</TextByWidth></div>
				{
					Loop.mapTimes(3, (i: AttributeSelector) => <div
						key={i}
						onClick={() => this.shadeChanged(i)}
						onTouchStart={() => this.shadeChanged(i)}
						className={DOMUtils.getBEMClassName("CardPicker__row__option", { selected: i === shade })}>
						<div className="CardPicker__row__option__content">
							<ShapeGroup count={count} color={color} shade={i} shape={shape} />
						</div>
					</div>)
				}
			</div>
			<div className="CardPicker__row">
				<div className="CardPicker__row__label"><TextByWidth fraction={0.4}>shape</TextByWidth></div>
				{
					Loop.mapTimes(3, (i: AttributeSelector) => <div
						key={i}
						onClick={() => this.shapeChanged(i)}
						onTouchStart={() => this.shapeChanged(i)}
						className={DOMUtils.getBEMClassName("CardPicker__row__option", { selected: i === shape })}>
						<div className="CardPicker__row__option__content">
							<ShapeGroup count={count} color={color} shade={shade} shape={i} />
						</div>
					</div>)
				}
			</div>
		</div>;
	}

	private getClassName(): string {
		const { className } = this.props;
		return "CardPicker" + (className ? " " + className : "");
	}

	private shapeChanged = (index: AttributeSelector) => {
		const { onChange, color, count, shade } = this.props;
		if (onChange) onChange(index, color, count, shade);
	};

	private colorChanged = (index: AttributeSelector) => {
		const { onChange, count, shade, shape } = this.props;
		if (onChange) onChange(shape, index, count, shade);
	};

	private countChanged = (index: AttributeSelector) => {
		const { onChange, color, shade, shape } = this.props;
		if (onChange) onChange(shape, color, index, shade);
	};

	private shadeChanged = (index: AttributeSelector) => {
		const { onChange, color, count, shape } = this.props;
		if (onChange) onChange(shape, color, count, index);
	};

}
