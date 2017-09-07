<template>
	<div class="counter-component">
		<div class="counter-btn" @click="minus"> - </div>
		<div class="counter-show">
			<input type="text" v-model="number" @keyup="fixNumber">
		</div>
		<div class="counter-btn" @click="add"> + </div>
	</div>
</template>
<script>
export default {
	props: {
		max: {
			type: Number,
			default:5
		},
		min: {
			type: Number,
			default: 1
		}
	},
	data () {
		return {
			number: this.min
		}
	},
	watch: {
		number () {
			this.$emit('on-change', this.number)
		}
	},
	methods:{
		fixNumber () {
			let fix
			if (typeof this.number === 'string') {
				fix = NUmber(this.number.replace(/\D/g,''))
			}else {
				fix = this.number
			}
			if (fix > this.max || fix < this.min) {
				fix = this.min
			}
			this.number = fix
		},
		minus () {
			if(this.number <= this.min){
				return
			}
			this.number --
		},
		add () {
			if (this.number >= this.max) {
				return
			}
			this.number ++
		}
	}
}
</script>
<style scoped>
.chooser-component {
  position: relative;
  display: inline-block;
}
.chooser-list li{
  display: inline-block;
  border: 1px solid #e3e3e3;
  height: 25px;
  line-height: 25px;
  padding: 0 8px;
  margin-right: 5px;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
}
.chooser-list li.active {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>