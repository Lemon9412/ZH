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
		info:{
            name:'',
            sex:'女',
            cerNum:'',
            idNum:'',
            cerName:'',
            cerDate:date(),
            company:'中华婴幼儿保健协会'
		},
		delFlag:false
	},
	mounted:function() {

	},
	computed:{
		
	},
	methods:{
		showPreview:function(){
			this.delFlag=true;
		},
        sub: function() {
		    this.delFlag = false;
            var formData = JSON.stringify(this.info); // 这里才是你的表单数据
            this.$http.post('/add', formData).then(function(resp) {
                if(resp.state=1) {
                    alert("提交成功");
                }
            }, function(resp){
                alert("提交失败");
            });
        }
	}
});
