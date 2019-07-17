<template>
	<div class="container flex-c">
		<h2 class="set-title">反馈配置</h2>
		<div class="set-content">
			<el-form label-width="100px">
				<el-form-item label="反馈邮箱">
					<el-input
						type="textarea"
						:rows="10"
						placeholder="请输入反馈邮箱，多个邮箱使用英文','隔开。例如：15181****12@qq.com,15181****12@qq.com"
						style="width: 600px"
						v-model="textarea">
					</el-input>
					<div class="hint">
						多个邮箱使用英文","隔开。例如：15181****12@qq.com,15181****12@qq.com
					</div>
				</el-form-item>
				<el-form-item label="主题颜色">
					<el-color-picker v-model="color"></el-color-picker>
				</el-form-item>

				<el-form-item>
					<el-button  type="primary" @click="submit">更新配置</el-button>
					<div class="hint">
						当有新的反馈，会立刻通知以上设置的邮箱。
					</div>
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
        color:'#409EFF'
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
.hint{
	color: #999;
}

</style>
