import "./TextByWidth.style";

import * as React from "react";
import * as ReactDOM from "react-dom";

export interface TextByWidthProps {
	fraction: number;
}
export interface TextByWidthState {
	fontSize: number;
}

export default class TextByWidth extends React.PureComponent<TextByWidthProps, TextByWidthState> {
	private resizeObserver: ResizeObserver;

	constructor(props: TextByWidthProps) {
		super(props);
		this.state = {
			fontSize: 10, // arbitrary
		};

		this.resizeObserver = new ResizeObserver(this.recalculateFontSize);
	}

	public render(): React.ReactNode {
		const { children } = this.props;
		const { fontSize } = this.state;

		return <div className="TextByWidth" style={{ fontSize }}>{children}</div>;
	}

	public componentDidMount() {
		this.recalculateFontSize();
		this.resizeObserver.observe(ReactDOM.findDOMNode(this) as HTMLDivElement);
	}

	public componentDidUpdate(prevProps: TextByWidthProps) {
		if (prevProps.fraction !== this.props.fraction) this.recalculateFontSize();
	}

	private recalculateFontSize = () => {
		this.setState({ fontSize: this.props.fraction * (ReactDOM.findDOMNode(this) as HTMLDivElement).offsetWidth });
	}
}