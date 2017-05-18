<template>
	<div class="list col s12 m9 grey lighten-2">
		<ul class="collection col s12">
			<task key="task" :task="task" v-for="task in tasks" v-if="task.visibility === true">
			</task>
		</ul>
	</div>
</template>



<script>
	import { Store } from '@/Store.js'
	import Task from './Task.vue'

	export default {
		name: 'list',
		components: { task: Task },
		data() {
			return {
				tasks: Store.datas.tasks,
			}
		}
	}

</script>



<style scoped>
	.list {
		/*margin-top: 20px;*/
		padding: 20px;
		min-height: 800px;
	}
</style>