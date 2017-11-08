var date = function() {
	var date = new Date();
	var curDate = date.getFullYear() + "-" + addZero((date.getMonth() + 1)) + "-" + addZero(date.getDate());
	return curDate;
	function addZero(str) {
		if (parseInt(str) < 10) {
		    str = "0" + str;
		}
		return str;
	}
}

new Vue({
	el:'#app',
	data:{
		name:'',
		sex:'女',
		cerNum:'',
		idNum:'',
		cerName:'',
		cerDate:date(),
		company:'中华婴幼儿保健协会',
		delFlag:false
	},
	mounted:function() {
		/*this.$nextTick(() => {
			this.nowDate();
		});*/
	},
	
	computed:{
		
	},
	methods:{
		showPreview:function(){
			this.delFlag=true;
		}
		/*nowDate:function(){
			var Date = new Date();
			return this.cerDate = Date.toLocaleDateString();
		}*/
	}
})
