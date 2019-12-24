import "./App.style";

import * as React from "react";
import CardPicker from "../CardPicker/CardPicker";

export interface AppProps { }
export interface AppState {
	elevation: number;
}

export default class App extends React.PureComponent<AppProps, AppState> {
	constructor(props: AppProps) {
		super(props);
		this.state = {
			elevation: 0,
		};
		document.addEventListener("mousemove", this.changeElevation);
	}

	public render(): React.ReactNode {
		return (
			<div className="App">
				<CardPicker count={2} color={0} shade={1} shape={1} />
			</div>
		);
	}

	private changeElevation = (e: MouseEvent) => {
		this.setState({
			elevation: e.clientX / 10,
		});
	};
}