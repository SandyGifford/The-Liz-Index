import "./App.style";

import * as React from "react";
import SetPickerPage from "../pages/SetPickerPage/SetPickerPage";
import DOMUtils from "@utils/DOMUtils";

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
				<div className="App__sidebarContent">
					<div className={DOMUtils.getBEMClassName("App__sidebarContent__item", { selected: true })}>
						<div className="App__sidebarContent__item__label">Track</div>
						<div className="App__sidebarContent__item__sub">manually enter cards</div>
					</div>
					<div className={DOMUtils.getBEMClassName("App__sidebarContent__item", { disabled: true })}>
						<div className="App__sidebarContent__item__label">Play</div>
						<div className="App__sidebarContent__item__sub">not currently available</div>
					</div>
					<div className={DOMUtils.getBEMClassName("App__sidebarContent__item", { disabled: true })}>
						<div className="App__sidebarContent__item__label">Shape Designer</div>
						<div className="App__sidebarContent__item__sub">not currently available</div>
					</div>
					<div className={DOMUtils.getBEMClassName("App__sidebarContent__item", { disabled: true })}>
						<div className="App__sidebarContent__item__label">Shade Designer</div>
						<div className="App__sidebarContent__item__sub">not currently available</div>
					</div>
				</div>
				<div className="App__toolbar"></div>
				<div className="App__content">
					<SetPickerPage />
				</div>
			</div>
		);
	}
}