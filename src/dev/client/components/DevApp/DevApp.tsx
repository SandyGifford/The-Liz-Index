import "./DevApp.style";
import io from "socket.io-client";
import * as React from "react";
import App from "@components/App/App";
import AnsiText from "@devComponents/AnsiText/AnsiText";

export interface DevAppProps { }
export interface DevAppState {
	errors: string[];
	port: number;
}

declare global {
	export interface Window {
		s: SocketIOClient.Socket;
	}
}

export default class DevApp extends React.PureComponent<DevAppProps, DevAppState> {
	private socket = io({
		port: "3001",
	});

	constructor(props: DevAppProps) {
		super(props);
		this.state = {
			errors: [],
			port: null,
		};
	}

	public componentDidMount() {
		window.s = this.socket;
		console.log(window.s);
		this.socket.on("buildSuccess", this.buildSuccess);
		this.socket.on("buildFail", this.buildFail);

		fetch("/devPort")
			.then(r => r.json())
			.then(r => this.setState({
				port: r.port,
			}));
	}

	public componentWillUnmount() {
		this.socket.off("buildSuccess", this.buildSuccess);
		this.socket.off("buildFail", this.buildFail);
	}

	public render(): React.ReactNode {
		const { errors, port } = this.state;

		if (!port) return null;

		return (
			<div className="DevApp">
				{
					errors.length ?
						<div className="DevApp__errors">{
							errors.map((error, e) => <AnsiText ansiStr={error} key={e} />)
						}</div> :
						<App />
				}
			</div>
		);
	}

	private buildSuccess = () => {
		console.log("buildSuccess");
		this.setState({
			errors: [],
		});

		this.reloadPage();
	};

	private buildFail = (errors: string[]) => {
		console.log("buildFail");
		this.setState({
			errors,
		});

		this.reloadPage();
	};

	private reloadPage = () => {
		window.location.href = `/?r=${Math.random()}`;
	};
}