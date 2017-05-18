<template>
	<div>
		<form>
			<div class="input-field">
				<input id="search" type="search" placeholder="Search for a task" v-model="objet.searchRequest" @keyup="search()">
				<label class="label-icon" for="search"><i class="material-icons">search</i></label>
				<i class="material-icons">close</i>

			</div>
		</form>
	</div>
</template>


<script>
	import { Store } from '@/Store.js'
	import { Bus } from '@/Bus.js'

	export default {
		name: 'searchBar',
		data() {
			return {
				tasks: Store.datas.tasks,
				objet: Store.datas
			}
		},
		methods: {
			search: function () {
				Store.search()
			}
		}
	}

</script>


<style></style>