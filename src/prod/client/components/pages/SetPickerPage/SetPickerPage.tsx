// we need the card styles to load before
// the page styles so we can override them
import Card from "@components/Card/Card";
import "./SetPickerPage.style";

import * as React from "react";
import CardPicker from "@components/CardPicker/CardPicker";
import Loop from "@utils/Loop";
import SetCard from "@components/SetCard/SetCard";
import { SetDef, CardDef } from "@typings/general";

export interface SetPickerPageProps { }
export interface SetPickerPageState {
	currentSet: SetDef;
	history: SetDef[];
}

export default class SetPickerPage extends React.PureComponent<SetPickerPageProps, SetPickerPageState> {
	constructor(props: SetPickerPageProps) {
		super(props);
		this.state = {
			currentSet: this.getBasicSet(),
			history: [],
		};
	}

	public render(): React.ReactNode {
		const { currentSet, history } = this.state;

		return (
			<div className="SetPickerPage">
				<div className="SetPickerPage__main">
					<div className="SetPickerPage__main__content">
						<div className="SetPickerPage__main__content__pickers">{
							currentSet.map((card: CardDef, i) => <Card className="SetPickerPage__main__content__pickers__picker" key={i}>
								<CardPicker card={card} onChange={(newCard) => {
									const cards = [...this.state.currentSet] as SetDef;
									cards[i] = newCard;

									this.setState({
										currentSet: cards,
									});
								}} />
							</Card>)
						}</div>
						<div className="SetPickerPage__main__content__cards">{
							currentSet.map((card: CardDef, i) => <SetCard className="SetPickerPage__main__content__cards__card" {...card} key={i} />)
						}</div>
					</div>
				</div>
				<div className="SetPickerPage__history">
					<div className="SetPickerPage__history__submit" onClick={this.submitToHistory}>⮕ add set</div>{
						history.map((set, s) => <div className="SetPickerPage__history__set" key={s}>
							<div className="SetPickerPage__history__set__cards">{
								set.map((card, c) => <SetCard className="SetPickerPage__history__set__cards__card" {...card} key={c} />)
							}</div>
							<div className="SetPickerPage__history__set__delete" onClick={() => {
								const history = [...this.state.history];
								history.splice(s, 1);

								this.setState({
									history,
								});
							}}>×</div>
						</div>)
					}</div>
			</div>
		);
	}

	private submitToHistory = () => {
		const { history, currentSet } = this.state;

		this.setState({
			history: [...history, currentSet],
			currentSet: this.getBasicSet(),
		});
	};

	private getBasicSet(i = 0): SetDef {
		return Loop.mapTimes(3, () => ({
			shape: i,
			color: i,
			count: i,
			shade: i,
		})) as SetDef;
	}
}