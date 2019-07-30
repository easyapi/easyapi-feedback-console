<template>
	<div class="main-container">
		<div class="main-breadcrumb flex-r">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<!--<el-breadcrumb-item to="/feedback/setting-list">意见反馈设置</el-breadcrumb-item>-->
				<!--<el-breadcrumb-item>{{title}}</el-breadcrumb-item>-->
				<el-breadcrumb-item>意见反馈设置</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="main-content">
			<el-form label-width="100px">
				<el-form-item label="邮箱">
					<el-input
						type="textarea"
						:rows="10"
						placeholder="请输入反馈邮箱，多个邮箱使用英文','隔开。例如：15181****12@qq.com,15181****12@qq.com"
						style="width: 600px"
						v-model="emails">
					</el-input>
					<div class="hint">
						多个邮箱使用英文","隔开。例如：15181****12@qq.com,15181****12@qq.com
					</div>
				</el-form-item>
				<el-form-item label="手机号码">
					<el-input
						type="textarea"
						:rows="10"
						placeholder="请输入手机号码，多个手机号码使用英文','隔开。例如：15181****12,15181****12"
						style="width: 600px"
						v-model="mobiles">
					</el-input>
					<div class="hint">
						多个手机号码使用英文","隔开。例如：15181****12,15181****12
					</div>
				</el-form-item>
				<el-form-item label="主题颜色">
					<el-color-picker v-model="theme"></el-color-picker>
				</el-form-item>

				<el-form-item>
					<el-button type="primary" @click="submit">提交</el-button>
					<div class="hint">
						当有新的反馈，会立刻通知以上设置的邮箱。
					</div>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>
<script>
  import {feedbackConfigsUrl,feedbackConfigUrl} from '../../api/api'

  export default {
    name: '',
    components: {},
    props: {},
    data() {
      return {
        type: 1,
        title: '新增意见配置',
        feedbackConfigId: '',

        emails: "",
        mobiles: '',
        theme: '#409EFF'
      }
    },
    //计算属性
    computed: {},
    watch: {},
    created() {

    },
    mounted() {
      // this.type = Number(this.$route.query.type)
      // if (this.type === 1) {
      //   this.title = '新增意见配置';
      // } else {
      //   this.title = '编辑意见配置';
      //   this.feedbackConfigId = this.$route.query.val
      //   this.getFeedbackConfigDetail()
      // }
			this.getFeedbackConfigs();
    },
    //keep-alive 组件激活时调用
    activated() {
    },
    //keep-alive 组件停用时调用。
    deactivated() {
    },
    //方法
    methods: {
      getFeedbackConfigs() {
        this.loading = true;

        this.$ajax({
          method: "get",
          url: feedbackConfigsUrl,

        }).then(res => {
          console.log(res)
          if (res.data.code === 0) {

          } else {
            let data=res.data.content[0];
            this.feedbackConfigId=data.feedbackConfigId;
            this.emails=data.emails
            this.mobiles=data.mobiles
            this.theme=data.theme
          }
          this.loading = false;
        }).catch(error => {
          this.loading = false;
          console.log(error);
        });
      },



      submit() {
        let obj = {}
        obj.theme = this.theme;
        if (this.emails) {
          if (this.emails.indexOf("，") !== -1) {
            return this.$message.warning('邮箱请使用英文逗号')
          } else {
            obj.emails = this.emails;
          }
        } else {
          return this.$message.warning('请输入邮箱')
        }
        if (this.mobiles) {
          if (this.mobiles.indexOf("，") !== -1) {
            return this.$message.warning('邮箱请使用英文逗号')
          } else {
            obj.mobiles = this.mobiles;
          }
        } else {
          return this.$message.warning('请输入手机号码')
        }
        console.log(obj)
	      // if (this.type===1){
        //   this.$ajax({
        //     method: 'post',
        //     url: feedbackConfigUrl,
        //     data: obj
        //   }).then(res => {
        //     this.$message.success(res.data.message)
        //     if (res.data.code === "1") {
        //       this.$router.go(-1)
        //     }
        //   }).catch(error => {
        //     console.log(error.response)
        //     this.$message.warning(error.response.data.message)
        //   });
	      // } else {
	      //
        //   this.$ajax({
        //     method: 'put',
        //     url: feedbackConfigUrl+'/'+this.feedbackConfigId,
        //     data: obj
        //   }).then(res => {
        //     this.$message.success(res.data.message)
        //     if (res.data.code === "1") {
        //       this.$router.go(-1)
        //     }
        //   }).catch(error => {
        //     console.log(error.response)
        //     this.$message.warning(error.response.data.message)
        //   });
	      // }

        this.$ajax({
          method: 'put',
          url: feedbackConfigUrl+'/'+this.feedbackConfigId,
          data: obj
        }).then(res => {
          this.$message.success(res.data.message)
          if (res.data.code === "1") {
            this.getFeedbackConfigs();
          }
        }).catch(error => {
          console.log(error.response)
          this.$message.warning(error.response.data.message)
        });


      },
      getFeedbackConfigDetail() {
        this.$ajax({
          method: 'get',
          url: feedbackConfigUrl + '/' + this.feedbackConfigId,
          params: {}
        }).then(res => {
          if (res.data.code === "1") {
            let data = res.data.content;
            this.theme = data.theme;
            this.emails = data.emails;
            this.mobiles = data.mobiles;
          }
        }).catch(error => {
          console.log(error.response)
        });
      }
    }
  }
</script>
<style scoped lang="scss">
	.hint {
		color: #999;
	}

</style>
