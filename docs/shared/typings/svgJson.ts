import React from "react";

type SvgJson<E extends keyof SVGElementTagNameMap = keyof SVGElementTagNameMap> = {
	tagName: E;
	attributes?: React.SVGProps<SVGElementTagNameMap[E]>;
	children?: SvgJson<keyof SVGElementTagNameMap>[];
};

export default SvgJson;
