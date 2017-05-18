<template>
	<li class="collection-item">
		<span class="col s4"> Task : <span class="taskname ">{{task.name}}</span></span>

		<span class="taskhours col s3"><i class="material-icons">query_builder</i>{{task.hours}} hour<span v-if="task.hours> 1">s</span>
		</span>

		<div class="chip"> criticity : {{task.criticity}}</div>

		<a class="secondary-content"><i class="material-icons" @click="deleteTask(task)">done</i></a>
	</li>

</template>



<script>
	import { Store } from '@/Store.js'
	import { Bus } from '@/Bus.js'

	export default {
		name: 'task',
		props: ['task'],
		data() {
			return {
				datas: Store.datas,
			}
		},
		computed: {
			tasks() {
				return Store.search()
			}
		},
		methods: {
			deleteTask: function (task) {

				Store.datas.counter += 1;
				let pos = this.datas.tasks.indexOf(this.task);
				this.tasks.splice(pos, 1);
				console.log(Store.datas.counter)
				if (Store.datas.counter > 3) {
					console.log('le compteur fait plus de 3')
					Bus.$emit('counter3');
				}
			}
		}
	}

</script>



<style scoped>
	.taskname {
		font-weight: bold;
	}
	
	.collection-item {
		margin-top: 5px;
		text-align: left;
	}
</style>