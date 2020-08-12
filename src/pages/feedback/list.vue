<template>
	<div class="main-container">
		<div class="main-breadcrumb flex-r">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item>反馈列表</el-breadcrumb-item>
			</el-breadcrumb>
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
					width="50"
					align="center">
				</el-table-column>
				<el-table-column
					prop="addTime"
					label="反馈时间"
					width="180"
					align="center">
				</el-table-column>
				<el-table-column
					prop="linkman"
					label="姓名"
					width="180"
					align="center">
				</el-table-column>
				<el-table-column
					prop="contact"
					label="联系方式"
					width="180"
					align="center">
				</el-table-column>
				<el-table-column
					prop="content"
					label="反馈内容"
					header-align="center">
				</el-table-column>
				<el-table-column

					label="状态"
					width="180"
					align="center">
					<template v-slot="scope">
						<div v-if="scope.row.ifReply">已回复</div>
						<div class="cl-red">未回复</div>

					</template>
				</el-table-column>
				<el-table-column
					prop="name"
					label="操作"
					width="180"
					align="center">
					<template v-slot="scope">
						<el-button size="mini" @click="jumpPage('/feedback/detail',scope.row.feedbackId)" type="primary">详情
						</el-button>
						<el-button size="mini" @click="delFeedback(scope.row.feedbackId)" type="danger">删除</el-button>
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
  import {feedbacksUrl, feedbackUrl} from '../../api/api'

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
      this.getFeedbackList()
    },
    //keep-alive 组件激活时调用
    activated() {
    },
    //keep-alive 组件停用时调用。
    deactivated() {
    },
    //方法
    methods: {
      getFeedbackList() {
        this.loading = true;
        let obj = {}
        obj.page = this.current - 1;
        obj.size = this.pageSize;
				obj.sort ='addTime,desc'

        this.$ajax({
          method: "get",
          url: feedbacksUrl,
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
      delFeedback(e) {
        this.$confirm('您确定要删除该反馈内容吗？')
          .then(_ => {
            this.$ajax({
              method: 'delete',
              url: feedbackUrl + '/' + e,
            }).then(res => {
              console.log(res)
              this.$message.success(res.data.message);
              if (res.data.code === 1) {

                this.getFeedbackList();
              }

            }).catch(error => {
              console.log(error.response)
            });
          })
          .catch(_ => {
          });
      },
      jumpPage(url, v) {
        this.$router.push({
          path: url, query: {id: v}
        })
      },
      handleSizeChange(val) {
        this.pageSize = val;
        this.getFeedbackList();
      },
      handleCurrentChange(val) {
        this.current = val;
        this.getFeedbackList();
      },
    }
  }
</script>
<style scoped lang="scss">
	.cl-red {
		color: #e4393c;
	}
</style>
