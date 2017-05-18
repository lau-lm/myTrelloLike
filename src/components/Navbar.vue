<template>
	<div class="navbar-fixed">

		<nav>
			<!--<p>{{ visiblesTasks.length }}</p>-->
			<div class="nav-wrapper" v-bind:class="{teal: visiblesTasks.length >= 2, red: visiblesTasks.length < 2}">
				<a href="#!" class="brand-logo">Task Planner</a>
				<a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
				<ul class="right hide-on-med-and-down">
					<li>
						<div class="chip">Total : {{totalHours}} hours </div>
					</li>
					<li>
						<div class="chip">Average : {{averageHours}} hours </div>
					</li>
				</ul>
				<ul class="left hide-on-med-and-down" v-show="newTask === true">
					<li class="alertTask">
						<a class="btn btn-floating pulse"><i class="material-icons">add_alert</i></a>
					</li>
					<li>New task added !</li>
				</ul>
				<ul>
					<li>
						<router-link to="/">All tasks</router-link>
					</li>
					<li>
						<router-link to="/critique">Critical tasks</router-link>
					</li>
					<li>
						<router-link to="/hidden">Hidden tasks</router-link>
					</li>
				</ul>

			</div>
		</nav>

	</div>

</template>

<script>
	import { Store } from '@/Store.js'
	import { Bus } from '@/Bus.js'


	export default {
		name: 'navbar',
		created() {

			let objet = this
			Bus.$on('newTaskAdded', function () {
				objet.newTask = true
				setTimeout(function () {
					objet.newTask = false
				}, 2000)
			});



		},
		data() {
			return {
				tasks: Store.datas.tasks,
				message: 'cdsfds',
				newTask: false
			}
		},
		methods: {

		},
		computed: {
			totalHours: function () {
				let counter = 0;
				this.tasks.forEach(function (element) {
					counter += element.hours
				});
				return counter
			},
			averageHours: function () {
				return this.totalHours / this.tasks.length
			},
			visiblesTasks: function () {
				let arr = this.tasks.filter(function (elt) {
					return elt.visibility === true
				});
				return arr
			}
		}
	}

</script>

<style scoped>
	.alertTask {
		margin: 0 0 0 30px;
	}
</style>