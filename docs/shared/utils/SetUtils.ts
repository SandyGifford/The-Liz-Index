import { CardDef, QuickCardsLookup, SetDef } from "@typings/general";
// lookup order: shape, color, shade, count

export default class SetUtils {
	public static countInLookup(card: CardDef, lookup: QuickCardsLookup): number {
		const { shape, color, shade, count } = card;

		if (!lookup) return 0;
		if (!lookup[shape]) return 0;
		if (!lookup[shape][color]) return 0;
		if (!lookup[shape][color][shade]) return 0;
		if (!lookup[shape][color][shade][count]) return 0;

		return lookup[shape][color][shade][count];
	}

	public static addCardToLookup(card: CardDef, lookup?: QuickCardsLookup): QuickCardsLookup;
	public static addCardToLookup(cards: SetDef, lookup?: QuickCardsLookup): QuickCardsLookup;
	public static addCardToLookup(cards: CardDef | CardDef[], lookup: QuickCardsLookup = {}): QuickCardsLookup {
		cards = Array.isArray(cards) ? cards : [cards];

		cards.forEach(card => {
			const { shape, color, shade, count } = card;

			if (!lookup[shape]) lookup[shape] = {};
			if (!lookup[shape][color]) lookup[shape][color] = {};
			if (!lookup[shape][color][shade]) lookup[shape][color][shade] = {};
			if (!lookup[shape][color][shade][count]) lookup[shape][color][shade][count] = 0;

			lookup[shape][color][shade][count]++;
		});

		return lookup;
	}

	public static removeCardFromLookup(card: CardDef, lookup?: QuickCardsLookup): QuickCardsLookup;
	public static removeCardFromLookup(cards: SetDef, lookup?: QuickCardsLookup): QuickCardsLookup;
	public static removeCardFromLookup(cards: CardDef | CardDef[], lookup: QuickCardsLookup = {}): QuickCardsLookup {
		cards = Array.isArray(cards) ? cards : [cards];

		cards.forEach(card => {
			const { shape, color, shade, count } = card;

			if (!lookup[shape]) return;
			if (!lookup[shape][color]) return;
			if (!lookup[shape][color][shade]) return;

			delete lookup[shape][color][shade][count];

			if (!Object.keys(lookup[shape][color][shade]).length) delete lookup[shape][color][shade];
			if (!Object.keys(lookup[shape][color]).length) delete lookup[shape][color];
			if (!Object.keys(lookup[shape]).length) delete lookup[shape];
		});

		return lookup;
	}
}