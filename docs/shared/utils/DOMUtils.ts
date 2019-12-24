import Loop from "./Loop";

export default class DOMUtils {
	public static getBEMClassName(baseName: string, modifiers: { [mod in string]: boolean }): string {
		return baseName + Loop.objectMap(modifiers, (mod, isTrue, index, obj, skip) => {
			if (!isTrue) skip();
			return ` ${baseName}--${mod}`;
		}).join("");
	}
}