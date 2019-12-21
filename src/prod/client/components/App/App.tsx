import "./App.style";

import * as React from "react";
import PrimaryContext, { primaryContextDefaultValue } from "@client/contexts/PrimaryContext";
import Card from "@components/Card/Card";

export interface AppProps { }
export interface AppState { }

export default class App extends React.PureComponent<AppProps, AppState> {
	constructor(props: AppProps) {
		super(props);
		this.state = {};
	}

	public render(): React.ReactNode {
		return (
			<div className="App">
				<PrimaryContext.Provider value={primaryContextDefaultValue}>
					<div style={{ fontSize: 100 }}><Card shape={0} color={0} shade={0} count={0} height={0} /></div>
					<div style={{ fontSize: 200 }}><Card shape={1} color={1} shade={1} count={1} height={1} /></div>
					<div style={{ fontSize: 300 }}><Card shape={2} color={2} shade={2} count={2} height={2} /></div>
				</PrimaryContext.Provider>
			</div>
		);
	}
}