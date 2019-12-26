import "./App.style";

import * as React from "react";
import CardPicker, { CardPickerProps } from "@components/CardPicker/CardPicker";
import Card from "@components/Card/Card";
import { ShapeGroupProps } from "../ShapeGroup/ShapeGroup";
import Loop from "@utils/Loop";
import SetCard from "../SetCard/SetCard";

export interface AppProps { }
export interface AppState {
	cards: [ShapeGroupProps, ShapeGroupProps, ShapeGroupProps];
}

export default class App extends React.PureComponent<AppProps, AppState> {
	constructor(props: AppProps) {
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
			<div className="App">
				<div className="App__pickers">
					{
						cards.map((card: CardPickerProps, i) => <Card className="App__pickers__picker" key={i}>
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
				<div className="App__cards">
					{
						cards.map((card: CardPickerProps, i) => <SetCard className="App__cards__card" {...card} key={i} />)
					}
				</div>
			</div>
		);
	}
}