<template>
	<div class="main-container">
		<div class="main-breadcrumb flex-r">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item>意见反馈设置</el-breadcrumb-item>
			</el-breadcrumb>
			<el-button size="small" type="primary" @click="jumpPage('/feedback/setting',1)">新增配置</el-button>
		</div>
		<div class="main-content">
			<el-table
				size="small"
				header-row-class-name="table-header--gray"
				:data="tableData"
				v-loading="loading"
				stripe
				border>
				<el-table-column
					label="编号"
					type="index"
					width="50">
				</el-table-column>
				<el-table-column
					prop="addTime"
					label="添加时间"
					width="180"
					align="center">
				</el-table-column>
				<el-table-column
					prop="emails"
					label="邮箱"
					header-align="center"
				>
				</el-table-column>
				<el-table-column
					prop="mobiles"
					label="手机号码"
					header-align="center"
				>
				</el-table-column>
				<el-table-column
					prop="theme"
					label="主题"
					width="180"
					align="center">
				</el-table-column>

				<el-table-column
					prop="name"
					label="操作"
					width="180"
					align="center">
					<template v-slot="scope">
						<el-button size="mini" @click="jumpPage('/feedback/setting',0,scope.row.feedbackConfigId)" type="primary">编辑</el-button>
						<el-button size="mini" @click="delFeedbackConfig(scope.row.feedbackConfigId)" type="danger">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
			<div class="pagination text-align-right">
				<el-pagination
					background
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
					:current-page="current"
					:page-sizes="[15, 30, 45, 60]"
					:page-size="pageSize"
					:total="total"
					layout="total, sizes, prev, pager, next, jumper"
				></el-pagination>
			</div>
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
        tableData: [],
        loading: false,
        current: 1,
        pageSize: 15,
        total: 0,
      }
    },
    //计算属性
    computed: {},
    watch: {},
    created() {

    },
    mounted() {
      this.getFeedbackConfigs()
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
        let obj = {}
        obj.page = this.current - 1;
        obj.size = this.pageSize;

        this.$ajax({
          method: "get",
          url: feedbackConfigsUrl,
          params: obj
        }).then(res => {
          // console.log(res)
          if (res.data.code === 0) {
            this.tableData = [];
            this.total = 0;
          } else {
            this.tableData = res.data.content;
            this.total = res.data.totalElements;
          }
          this.loading = false;
        }).catch(error => {
          this.loading = false;
          console.log(error);
        });
      },
      delFeedbackConfig(e) {
        this.$confirm('您确定要删除该配置吗？')
          .then(_ => {
            this.$ajax({
              method: 'delete',
              url: feedbackConfigUrl + '/' + e,
            }).then(res => {
              console.log(res)
              if (res.data.code === 1) {
            this.$message.success("删除成功");
                this.getFeedbackConfigs();
              }

            }).catch(error => {
              console.log(error.response)
            });
          })
          .catch(_ => {
          });
      },

      handleSizeChange(val) {
        this.pageSize = val;
        this.getFeedbackConfigs();
      },
      handleCurrentChange(val) {
        this.current = val;
        this.getFeedbackConfigs();
      },
      jumpPage(url,t,v){
        this.$router.push({path:url, query:{type:t, val:v}})
      }
    }
  }
</script>
<style scoped lang="scss">
	.oper {
		margin-bottom: 20px;
	}
</style>
