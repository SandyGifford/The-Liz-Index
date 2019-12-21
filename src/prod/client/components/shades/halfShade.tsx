import React from "react";
import ShadeBase from "./ShadeBase";

const HalfShade: ShadeBase = id => <pattern id={id} x="0" y="0" width="10" height="4" patternUnits="userSpaceOnUse">
	<rect x="0" y="0" width="10" height="2" />
</pattern>;

export default HalfShade;

