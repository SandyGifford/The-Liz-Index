import "./App.style";

import * as React from "react";
import SetPickerPage from "../pages/SetPickerPage/SetPickerPage";

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
				<div className="App__sidebarBackground" />
				<div className="App__sidebarContent"></div>
				<div className="App__toolbar"></div>
				<div className="App__content">
					<SetPickerPage />
				</div>
			</div>
		);
	}
}