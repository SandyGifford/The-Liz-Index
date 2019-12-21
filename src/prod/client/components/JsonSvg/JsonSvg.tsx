import "./JsonSvg.style";

import * as React from "react";
import SvgJson from "@typings/svgJson";

export interface JsonSvgProps {
	json: SvgJson;
}
export interface JsonSvgState { }

export default class JsonSvg extends React.PureComponent<JsonSvgProps, JsonSvgState> {
	constructor(props: JsonSvgProps) {
		super(props);
		this.state = {};
	}

	public render(): React.ReactNode {
		const { tagName, attributes, children } = this.props.json;

		return React.createElement(tagName, attributes, (children || []).map((child, index) => <JsonSvg key={index} json={child} />));
	}
}