import "./SetPickerPage.style";

import * as React from "react";
import CardPicker, { CardPickerProps } from "@components/CardPicker/CardPicker";
import Card from "@components/Card/Card";
import Loop from "@utils/Loop";
import SetCard from "@components/SetCard/SetCard";
import { AttributeSelector } from "@typings/general";

interface SetDef {
	shape: AttributeSelector;
	color: AttributeSelector;
	shade: AttributeSelector;
	count: AttributeSelector;
}

export interface SetPickerPageProps { }
export interface SetPickerPageState {
	cards: [SetDef, SetDef, SetDef];
}

export default class SetPickerPage extends React.PureComponent<SetPickerPageProps, SetPickerPageState> {
	constructor(props: SetPickerPageProps) {
		super(props);
		this.state = {
			cards: Loop.mapTimes(3, () => ({
				shape: 0,
				color: 0,
				count: 0,
				shade: 0,
			})) as [CardPickerProps, CardPickerProps, CardPickerProps],
		};
	}

	public render(): React.ReactNode {
		const { cards } = this.state;

		return (
			<div className="SetPickerPage">
				<div className="SetPickerPage__pickers">
					{
						cards.map((card: CardPickerProps, i) => <Card className="SetPickerPage__pickers__picker" key={i}>
							<CardPicker {...card} onChange={(shape, color, count, shade) => {
								const cards = [...this.state.cards] as [CardPickerProps, CardPickerProps, CardPickerProps];
								cards[i] = { shape, color, count, shade };

								this.setState({
									cards,
								});
							}} />
						</Card>)
					}
				</div>
				<div className="SetPickerPage__cards">
					{
						cards.map((card: CardPickerProps, i) => <SetCard className="SetPickerPage__cards__card" {...card} key={i} />)
					}
				</div>
			</div>
		);
	}
}