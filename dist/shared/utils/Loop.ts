export default class Loop {
	public static mapTimes<R>(times: number, action: (i: number) => R): R[] {
		const arr: R[] = [];
		for (let i = 0; i < times; i++) arr.push(action(i));
		return arr;
	}
}