<template>
	<form action="#">
		<p>Filter tasks by duration</p>
		<p>{{datas.range}}</p>
		<p class="range-field">
			<input type="range" id="test5" min="0" max="15" v-model.number="datas.range" @click="callRangefunction()" />
		</p>
	</form>
</template>


<script>
	import { Store } from "@/Store.js"

	export default {
		name: "rangeInput",
		data() {
			return {
				datas: Store.datas
			}
		},
		methods: {
			callRangefunction: function () {
				Store.search();
			}
		}
	}

</script>




<style></style>