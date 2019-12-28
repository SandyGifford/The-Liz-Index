import "./CardPicker.style";

import * as React from "react";
import { AttributeSelector, QuickCardsLookup, CardDef } from "@typings/general";
import ShapeGroup from "@components/ShapeGroup/ShapeGroup";
import Loop from "@utils/Loop";
import DOMUtils from "@utils/DOMUtils";
import TextByWidth from "@components/TextByWidth/TextByWidth";
import SetUtils from "@utils/SetUtils";

export type CardPickerChanged = (card: CardDef) => void;
export type Traits = "color" | "shade" | "shape" | "count";

export interface CardPickerProps {
	style?: React.CSSProperties;
	className?: string;
	card: CardDef;
	onChange?: CardPickerChanged;
	invalidCards?: QuickCardsLookup;
}
export interface CardPickerState { }

export default class CardPicker extends React.PureComponent<CardPickerProps, CardPickerState> {
	constructor(props: CardPickerProps) {
		super(props);
		this.state = {};
	}

	public render(): React.ReactNode {
		const { card, style } = this.props;
		const invalidCards = this.props.invalidCards || {};

		return <div className={this.getClassName()} style={style}>
			{
				["color", "shade", "shape", "count"].map((trait: Traits) => <div className="CardPicker__row" key={trait}>
					<div className="CardPicker__row__label"><TextByWidth fraction={0.4}>{trait}</TextByWidth></div>
					{Loop.mapTimes(3, (i: AttributeSelector) => {
						const opCard = { ...card, [trait]: i };

						return <div
							key={i}
							onClick={() => this.change(opCard)}
							onTouchStart={() => this.change(opCard)}
							className={DOMUtils.getBEMClassName("CardPicker__row__option", {
								selected: card[trait] === i,
								invalid: SetUtils.cardInLookup(opCard, invalidCards),
							})}>
							<div className="CardPicker__row__option__content">
								<ShapeGroup {...opCard} />
							</div>
						</div>;
					})}
				</div>)
			}
		</div>;
	}

	private getClassName(): string {
		const { className } = this.props;
		return "CardPicker" + (className ? " " + className : "");
	}

	private change = (card: CardDef) => {
		const { onChange } = this.props;
		if (onChange) onChange(card);
	};
}
