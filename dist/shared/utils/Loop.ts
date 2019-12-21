export default class Loop {
	public static mapTimes<R>(times: number, action: (i: number) => R): R[] {
		const arr: R[] = [];
		for (let i = 0; i < times; i++) arr.push(action(i));
		return arr;
	}

	public static objectForEach<T extends { [key in K]: T[K] }, K extends keyof T>(obj: T, act: (key: K, value: T[K], index: number, obj: T) => void): void {
		Object.keys(obj).forEach((key, index) => act(key as K, obj[key as K], index, obj));
	}

	public static objectMap<T extends { [key in K]: T[K] }, K extends keyof T, R>(obj: T, act: (key: K, value: T[K], index: number, obj: T, skip: () => void) => R): R[] {
		const arr: R[] = [];
		this.objectForEach(obj, (key: K, value, index) => {
			let skipped = false;
			const skip = () => skipped = true;
			const res = act(key, value, index, obj, skip);
			if (skipped) return;
			arr.push(res);
		});
		return arr;
	}
}