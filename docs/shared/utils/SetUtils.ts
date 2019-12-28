import { CardDef, QuickCardsLookup } from "@typings/general";
// lookup order: shape, color, shade, count

export default class SetUtils {
	public static cardInLookup(card: CardDef, lookup: QuickCardsLookup): boolean {
		const { shape, color, shade, count } = card;

		if (!lookup) return false;
		if (!lookup[shape]) return false;
		if (!lookup[shape][color]) return false;
		if (!lookup[shape][color][shade]) return false;
		if (!lookup[shape][color][shade][count]) return false;

		return true;
	}

	public static addCardToLookup(card: CardDef, lookup: QuickCardsLookup): void {
		const { shape, color, shade, count } = card;

		if (!lookup[shape]) lookup[shape] = {};
		if (!lookup[shape][color]) lookup[shape][color] = {};
		if (!lookup[shape][color][shade]) lookup[shape][color][shade] = {};

		lookup[shape][color][shade][count] = true;
	}

	public static removeCardFromLookup(card: CardDef, lookup: QuickCardsLookup): void {
		const { shape, color, shade, count } = card;

		if (!lookup[shape]) return;
		if (!lookup[shape][color]) return;
		if (!lookup[shape][color][shade]) return;

		delete lookup[shape][color][shade][count];

		if (!Object.keys(lookup[shape][color][shade]).length) delete lookup[shape][color][shade];
		if (!Object.keys(lookup[shape][color]).length) delete lookup[shape][color];
		if (!Object.keys(lookup[shape]).length) delete lookup[shape];
	}
}