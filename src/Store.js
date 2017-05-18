import { Bus } from '@/Bus.js'
import Search from '@/components/Search.vue'

export const Store = {
	datas: {
		counter: 0,
		word: '',
		range: 0,
		tasks: [
			{
				name: 'CR project',
				criticity: 4,
				hours: 2,
				visibility: true
			},
			{
				name: 'Users stories',
				criticity: 8,
				hours: 3,
				visibility: false
			},
			{
				name: 'Planning poker',
				criticity: 6,
				hours: 2,
				visibility: false
			},
			{
				name: 'Daily',
				criticity: 1,
				hours: 1,
				visibility: true
			},
			{
				name: 'Demo',
				criticity: 4,
				hours: 2,
				visibility: true
			},
			{
				name: 'Retro',
				criticity: 9,
				hours: 3,
				visibility: true
			},
			{
				name: 'Apero',
				criticity: 10,
				hours: 2,
				visibility: true
			},
			{
				name: 'Prioritize',
				criticity: 2,
				hours: 1,
				visibility: true
			},
			{
				name: 'Testing',
				criticity: 10,
				hours: 9,
				visibility: true
			},
			{
				name: 'Celebrate end of project',
				criticity: 8,
				hours: 4,
				visibility: true
			},

		]
	},

	search: function () {
		let tab = [];
		let reg = new RegExp(this.datas.word, "i");

		if (this.datas.word.length > 0) {
			return tab = this.datas.tasks.filter((elt) =>
				reg.test(elt.name)
			);

		} else {
			tab = this.datas.tasks;
		}

		if (this.datas.range > 0) {
			tab = this.datas.tasks.filter((elt) => elt.hours >= this.datas.range)

		} else {
			tab = this.datas.tasks
		}

		return tab;
	},
	// filterRange() {
	// 	// console.log(this.datas.range)

	// 	let tab = []

	// 	if (this.datas.range > 0) {
	// 		tab = this.datas.tasks.filter((elt) => elt.hours >= this.datas.range)

	// 	} else {
	// 		tab = this.datas.tasks
	// 	}

	// 	console.log(arr.length)
	// 	return tab
	// }

};