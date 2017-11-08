new Vue({
	el:'#app',
	data:{
		infoList:[],
		delFlag:false,
		curInfo:''
	},
	mounted:function() {
		this.$nextTick(function(){
			this.getInfoList();
		})
	},
	computed:{
		
	},
	methods:{
		getInfoList:function() {
			var _this = this;
			this.$http.post("/info").then(function(data){
				_this.infoList = eval("(" + data +")");
			},function (data) {
				console.info(data);
            });
		},
		delConfirm:function(item) {
			this.delFlag=true;
			this.curInfo=item;
		},
		delInfo:function() {
			var index = this.infoList.indexOf(this.curInfo);
			this.infoList.splice(index,1);
			this.delFlag=false;
		}
	}
});
