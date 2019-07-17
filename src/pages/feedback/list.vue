<template>
	<div class="container flex-c">
		<h2 class="set-title">意见反馈列表</h2>
		<div class="set-content">
			<el-table
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
					prop="date"
					label="反馈时间"
					width="180"
					align="center">
				</el-table-column>
				<el-table-column
					prop="name"
					label="姓名"
					width="180"
					align="center">
				</el-table-column>
				<el-table-column
					prop="name"
					label="联系方式"
					width="180"
					align="center">
				</el-table-column>
				<el-table-column
					prop="address"
					label="反馈内容"
					header-align="center">
				</el-table-column>
				<el-table-column
					prop="name"
					label="状态"
					width="180"
					align="center">
				</el-table-column>
				<el-table-column
					prop="name"
					label="操作人"
					width="180"
					align="center">
				</el-table-column>
				<el-table-column
					prop="name"
					label="操作"
					width="180"
					align="center">
					<template v-slot="scope">
						<el-button size="mini" @click="jumpPage('/feedback/detail',1)" type="primary">详情</el-button>
						<el-button size="mini" @click="delFeedback(1)" type="danger">删除</el-button>
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
  export default {
    name: '',
    components: {},
    props: {},
    data() {
      return {
        tableData: [

          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
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
        // let obj = {}
        // obj.page = this.current - 1;
        // obj.size = this.pageSize;
        // obj.username = this.formInline.username;
        // obj.nickname = this.formInline.nickname;
        // this.$ajax({
        //   method: "get",
        //   url: usersUrl,
        //   params: obj
        // }).then(res => {
        //   console.log(res)
        //   if (res.data.code === 0) {
        //     this.tableData = [];
        //     this.total = 0;
        //   } else {
        //     this.tableData = res.data.content;
        //     this.total = res.data.totalElements;
        //   }
        this.loading = false;
        // }).catch(error => {
        //   console.log(error);
        // });
      },
      delFeedback(e) {
        this.$confirm('您确定要删除该反馈内容吗？')
          .then(_ => {
            // this.$ajax({
            //   method: 'delete',
            //   url: userUrl + '/' + e,
            // }).then(res => {
            //   console.log(res)
            //   if (res.data.code === 1) {
                this.$message.success("删除成功");
            //     this.getFeedbackList();
            //   }
						//
            // }).catch(error => {
            //   console.log(error.response)
            // });
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
<style scoped lang="stylus">

</style>
