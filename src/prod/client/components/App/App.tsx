import "./App.style";

import * as React from "react";
import CardPicker, { CardPickerChanged } from "@components/CardPicker/CardPicker";
import SetCard from "@components/SetCard/SetCard";
import { AttributeSelector } from "@typings/general";
import Card from "../Card/Card";

export interface AppProps { }
export interface AppState {
	shape: AttributeSelector;
	color: AttributeSelector;
	count: AttributeSelector;
	shade: AttributeSelector;
}

export default class App extends React.PureComponent<AppProps, AppState> {
	constructor(props: AppProps) {
		super(props);
		this.state = {
			shape: 0,
			color: 0,
			count: 0,
			shade: 0,
		};
	}

	public render(): React.ReactNode {
		const { shape, color, count, shade } = this.state;

		return (
			<div className="App">
				<Card className="App__card">
					<CardPicker count={count} color={color} shade={shade} shape={shape} onChange={this.pickerChanged} />
				</Card>
				<SetCard className="App__card" count={count} color={color} shade={shade} shape={shape} />
			</div>
		);
	}

	private pickerChanged: CardPickerChanged = (shape, color, count, shade) => {
		this.setState({
			shape,
			color,
			count,
			shade,
		});
	};
}