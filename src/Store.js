import { Bus } from '@/Bus.js'
import Search from '@/components/Search.vue'

export const Store = {
	datas: {
		counter: 0,
		searchRequest: '',
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
		console.log(this.datas.tasks.length)

		console.log('fonction search running')
		console.log(this.datas.searchRequest)


		let regex = new RegExp(this.datas.searchRequest, "i")

		if (this.datas.searchRequest.length > 1) {
			console.log('searchRequest > 1', regex)
			this.datas.tasks = this.datas.tasks.filter(function (elt) {
				return regex.test(elt.name)
			});
		} else {
			return this.tasks
		}
		console.log(this.datas.tasks.length)
	}

};