<template>
	<div class="formulaire col s12 m3 grey darken-2 ">

		<search-bar></search-bar>
		<range-input></range-input>

		<div v-if="counterMessage === true">Hé oh doucement! </div>

		<form class="addTaskForm">
			<div class="input-field col s12">
				<input id="taskname" class="validate" type="text" v-model="newTask.name">
				<label for="taskname">Task name</label>
			</div>
		</form>

		<div class="input-field col s12">
			<input id="taskhours" class="validate" type="number" v-model.number="newTask.cirticity">
			<label for="taskhours">Criticity</label>
		</div>

		<div class="input-field col s12">
			<input id="taskhours" class="validate" type="number" v-model.number="newTask.hours">
			<label for="taskhours">Hours needed</label>
		</div>


		</form>

		<a class="waves-effect waves-light btn " @click="addTask()"><i class="material-icons left">add</i>Add a task</a>

	</div>


</template>


<script>
	import { Store } from '@/Store.js'
	import { Bus } from '@/Bus.js'
	import Search from './Search.vue'
	import RangeInput from './RangeInput.vue'


	export default {
		name: 'addForm',
		components: { searchBar: Search, rangeInput: RangeInput },
		created() {
			Bus.$on('counter3', () => this.counterMessage = true)
		},
		data() {
			return {
				tasks: Store.datas.tasks,
				counterMessage: false,
				newTask: {
					name: '',
					hours: 0,
					criticity: 0
				}
			}
		},
		methods: {
			addTask: function () {
				Bus.$emit('newTaskAdded');
				if (this.newTask.name.length > 0 && this.newTask.hours > 0) {
					this.tasks.push(this.newTask);
					this.newTask = {
						name: '',
						hours: 0,
						criticity: 0
					}
				} else {
					Materialize.toast('Please, add a name and a time to your new task', 2000)
				}
			}
		}
	}

</script>


<style scoped>
	.formulaire {
		min-height: 800px;
		padding-top: 50px;
	}
	
	label,
	.input-field {
		color: white;
	}
	
	.btn {
		margin-top: 40px;
	}
	
	.addTaskForm {
		margin-top: 100px;
	}
</style>