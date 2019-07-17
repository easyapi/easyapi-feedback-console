<template>
	<div class="container flex-c">
		<h2 class="set-title">回复模板</h2>
		<div class="set-content">
			<div class="oper text-align-right">
				<el-button size="small" type="primary" @click="showTemplateDialog(1)">新增模板</el-button>
			</div>

			<el-table
				:data="tableData"
				v-loading="loading"
				stripe
				border>

				<el-table-column
					prop="address"
					label="模板内容"
					header-align="center">
				</el-table-column>
				<el-table-column
					prop="name"
					label="操作"
					width="180"
					align="center">
					<template v-slot="scope">
						<el-button size="mini" @click="showTemplateDialog(0,1)" type="primary">修改</el-button>
						<el-button size="mini" @click="delTemplate(1)" type="danger">删除</el-button>
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

			<el-dialog
				:title="dialogTitle"
				:visible.sync="templateDialog"
				width="30%">
				<div>
					<el-input
						type="textarea"
						:rows="6"
						placeholder="请输入回复内容"
						v-model="textarea">
					</el-input>
				</div>
				<div slot="footer" class="dialog-footer">
					<el-button @click="cancel">取 消</el-button>
					<el-button type="primary" @click="submit">确 定</el-button>
				</div>
			</el-dialog>
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

        dialogTitle: "新增模板",
        templateDialog: false,
        dialogType: 1,
        textarea:"",
      }
    },
    //计算属性
    computed: {},
    watch: {},
    created() {

    },
    mounted() {
      this.getTemplateList()
    },
    //keep-alive 组件激活时调用
    activated() {
    },
    //keep-alive 组件停用时调用。
    deactivated() {
    },
    //方法
    methods: {
      showTemplateDialog(t,v) {
        this.dialogType = t;
        this.templateDialog = true;
        if (this.dialogType === 1) {
          this.dialogTitle = "新增模板";
        } else {
          this.dialogTitle = "修改模板";
        }
      },
      cancel(){
        this.templateDialog = false;
      },
	    submit(){
        this.templateDialog = false;
	    },
      getTemplateList() {
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

      delTemplate(e) {
        this.$confirm('您确定要删除该反馈内容吗？')
          .then(_ => {
            // this.$ajax({
            //   method: 'delete',
            //   url: userUrl + '/' + e,
            // }).then(res => {
            //   console.log(res)
            //   if (res.data.code === 1) {
            this.$message.success("删除成功");
            //     this.getTemplateList();
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
        this.getTemplateList();
      },
      handleCurrentChange(val) {
        this.current = val;
        this.getTemplateList();
      },
    }
  }
</script>
<style scoped lang="scss">
	.oper {
		margin-bottom: 20px;
	}
</style>
