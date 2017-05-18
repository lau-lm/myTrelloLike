<template>
	<div>
		<form>
			<div class="input-field">
				<input id="search" type="search" placeholder="Search for a task" v-model="datas.word" @keyup="callSearch()">
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
				datas: Store.datas
			}
		},
		methods: {
			callSearch: function () {
				Store.datas.word = this.datas.word
				Store.search()
			}
		}
	}

</script>


<style></style>