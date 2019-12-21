import React from "react";
import ShadeBase from "./ShadeBase";

const Solid: ShadeBase = id => <pattern id={id} x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
	<rect x="0" y="0" width="10" height="10" />
</pattern>;

export default Solid;

