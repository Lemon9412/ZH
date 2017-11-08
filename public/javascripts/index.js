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
			this.$http.post("/info").then(function(req){
				console.log(req.data);
				_this.infoList = req.data;
			},function (req) {
				console.info(req);
            });
		},
		delConfirm:function(req) {
			this.delFlag=true;
			this.curInfo=item;
		},
		delInfo:function() {
			var index = this.infoList.indexOf(this.curInfo);
			console.log(this.curInfo._id);
			var _id = this.curInfo._id;
			this.delFlag=false;
			this.$http.delete("/info",{id:_id}).then(function(req) {
                this.infoList.splice(index,1);
			},function(req) {
                console.info(req);
			})
		}
	}
});
