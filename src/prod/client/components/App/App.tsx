import "./App.style";

import * as React from "react";
import PrimaryContext, { primaryContextDefaultValue } from "@client/contexts/PrimaryContext";
import Card from "@components/Card/Card";

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
				<PrimaryContext.Provider value={primaryContextDefaultValue}>
					<Card shape={2} color={2} shade={2} count={2} width={100} animated elevation={this.state.elevation} />
					<Card shape={1} color={1} shade={1} count={1} width={200} elevation={this.state.elevation} />
					<Card shape={0} color={0} shade={0} count={0} width={300} elevation={this.state.elevation} />
				</PrimaryContext.Provider>
			</div>
		);
	}

	private changeElevation = (e: MouseEvent) => {
		this.setState({
			elevation: e.clientX / 10,
		});
	};
}