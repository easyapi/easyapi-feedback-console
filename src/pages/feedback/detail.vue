<template>
	<div class="container flex-c">
		<h2 class="set-title">反馈详情</h2>
		<div class="set-content">
			<el-form label-width="100px">
				<el-form-item label="姓名">
					<span>小明</span>
				</el-form-item>
				<el-form-item label="联系方式">
					<span>15061509527</span>
				</el-form-item>
				<el-form-item label="反馈时间">
					<span>2019-12-23</span>
				</el-form-item>
				<el-form-item label="反馈信息">
					<div class="feedback-content">
						<p>反馈内容反馈内容反馈内容反馈内容反馈内容反馈内容反馈内容反馈内容反馈内容反馈内容反馈内容反馈内容反馈内
							容反馈内容反馈内容反馈内容反馈内容反馈内容反馈内容反馈内容反馈内容反馈内容反馈内容反馈内容反馈内容反馈
							内容反馈内容反馈内容反馈内容反馈内容</p>
					</div>
					<div class="feedback-imgs">
						<img src="" alt="暂无图片">
					</div>

				</el-form-item>
				<el-form-item label="反馈回复">
					<el-input
						type="textarea"
						:rows="10"
						placeholder="请输入回复内容"
						style="width: 600px"
						v-model="textarea">
					</el-input>
					<div>
						<el-popover
							placement="top-start"
							width="400"
							trigger="click" popper-class="feedback-popover">
							<div class="list">
								<div class="list-item">
									回复1回复1回复1回复1回复1回复1回复1回复1回复1回复1回复1回复1回复1回复1回复1回复1回复1回复1
								</div>
								<div class="list-item">
									回复1回复1回复1回复1回复1回复1回复1回复1回复1
								</div>
								<div class="list-item">
									回复1回复1回复1回复1回复1回复1回复1回复1回复1
								</div>
							</div>
							<el-button size="small" plain slot="reference">常用语</el-button>
						</el-popover>
					</div>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submit">回复</el-button>

				</el-form-item>
			</el-form>
		</div>
	</div>
</template>
<script>
  export default {
    name: '',
    components: {},
    props: {},
    data() {
      return {
        textarea:"",
      }
    },
    //计算属性
    computed: {},
    watch: {},
    created() {

    },
    mounted() {

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
