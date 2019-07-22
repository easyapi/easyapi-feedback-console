<template>
	<div class="main-container">
		<div class="main-breadcrumb flex-r">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item to="/feedback/list">意见反馈列表</el-breadcrumb-item>
				<el-breadcrumb-item>意见反馈详情</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="main-content">
			<el-form label-width="100px">
				<el-form-item label="姓名">
					<span>{{feedbackDetail.linkman}}</span>
				</el-form-item>
				<el-form-item label="联系方式">
					<span>{{feedbackDetail.contact}}</span>
				</el-form-item>
				<el-form-item label="反馈时间">
					<span>{{feedbackDetail.addTime}}</span>
				</el-form-item>
				<el-form-item label="反馈信息">
					<div class="feedback-content">
						<p>{{feedbackDetail.content}}

						</p>
					</div>
					<div class="feedback-imgs" v-if="incisionImgs(feedbackDetail.imgs).length>0">
						<img v-for="(item,index) in incisionImgs(feedbackDetail.imgs)" :key="index" :src="item" alt="暂无图片" >
					</div>

				</el-form-item>
				<el-form-item label="反馈回复">
					<el-input
						type="textarea"
						:rows="10"
						placeholder="请输入回复内容"
						style="width: 600px"
						v-model="reply">
					</el-input>
					<!--<div>-->
					<!--<el-popover-->
					<!--placement="top-start"-->
					<!--width="400"-->
					<!--trigger="click" popper-class="feedback-popover">-->
					<!--<div class="list">-->
					<!--<div class="list-item">-->
					<!--回复1回复1回复1回复1回复1回复1回复1回复1回复1回复1回复1回复1回复1回复1回复1回复1回复1回复1-->
					<!--</div>-->
					<!--<div class="list-item">-->
					<!--回复1回复1回复1回复1回复1回复1回复1回复1回复1-->
					<!--</div>-->
					<!--<div class="list-item">-->
					<!--回复1回复1回复1回复1回复1回复1回复1回复1回复1-->
					<!--</div>-->
					<!--</div>-->
					<!--<el-button size="small" plain slot="reference">常用语</el-button>-->
					<!--</el-popover>-->
					<!--</div>-->
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submit">回复</el-button>

				</el-form-item>
			</el-form>
		</div>
	</div>
</template>
<script>
  import { feedbackUrl} from '../../api/api'
  export default {
    name: '',
    components: {},
    props: {},
    data() {
      return {
        reply:"",
        feedbackId:'',
        feedbackDetail:'',
      }
    },
    //计算属性
    computed: {},
    watch: {},
    created() {

    },
    mounted() {
      this.feedbackId=this.$route.query.id
			this.getFeedbackDetail()
    },
    //keep-alive 组件激活时调用
    activated() {
    },
    //keep-alive 组件停用时调用。
    deactivated() {
    },
    //方法
    methods: {
      submit(){
        this.$ajax({
          method: 'put',
          url: feedbackUrl+'/'+this.feedbackId,
          data: {
            reply:this.reply
          }
        }).then(res=>{
          this.$message.success(res.data.message)
	        if (res.data.code==="1"){
            this.$router.go(-1)
	        }
        }).catch(error =>{
          console.log(error.response)
          this.$message.warning(error.response.data.message)
        });
      },
      getFeedbackDetail(){
        this.$ajax({
          method: 'get',
          url: feedbackUrl+'/'+this.feedbackId,
        }).then(res=>{
	        if (res.data.code==="1"){
	          this.feedbackDetail=res.data.content;
	        }
        }).catch(error =>{
          this.$message.warning(error.response.data.message)
          console.log(error.response)
        });
      },
      incisionImgs(imgs) {
        if (imgs) {
          return imgs.split(',')
        }else {
          return []
        }
      }
    }
  }
</script>
<style scoped lang="scss">
	.feedback-content {
		padding: 20px;
		border:1px solid #ddd ;
		width: 600px;
		p{
			line-height: 24px;
		}
	}
	.feedback-imgs{
		padding: 20px;
		border:1px solid #ddd ;
		width: 600px;
		margin-top: 20px;
		img{
			width: 80px;
			height: 80px;
			margin-left: 10px;
		}
		&>img:first-child{
			margin-left: 0;
		}
	}
	.feedback-popover{
		.list{
			padding: 6px 0;
			.list-item{
				padding: 6px 0;
				border-bottom: 1px solid #ddd;
			}
			&>.list-item:last-child{

				border-bottom: none;
			}
		}
	}
</style>
