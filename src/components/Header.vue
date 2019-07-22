<template>
	<div class="header flex-r">
		<div class="header_logo flex-r">
			<img src="../assets/images/logo.png" alt="">
			<span class="fz-14">
				意见反馈
			</span>
		</div>
		<div class="header_navbar flex-r">
			<a v-for="(item,index) in pagesList" :class="[navBarActive===item.name?'active':'']" :key="index"
			   @click="jumpPage(item.url)">{{item.title}}</a>
		</div>
		<div class="header_account flex-r">
			<el-popover
				placement="bottom-end"
				trigger="click"
				visible-arrow width="460">
				<div class="teamServeInfo">
					<h2 class="teamServeName lrPading-20">当前团队</h2>
					<div class="clear teamServeContent lrPading-20">
						<img class="lf teamsServeImg" :src='teamImg+"!icon.jpg"' alt="">
						<div class="lf teamsServeImg-R">
							<p>{{teamName}}</p>
							<div class="teamServeBtns">
								<a class="ea-btn" href="https://www.easyapi.com/team/member/">成员</a>
								<a class="ea-btn" href="https://www.easyapi.com/team/">账户</a>
								<a class="ea-btn" href="https://www.easyapi.com/team/order/">订单</a>
							</div>
						</div>
					</div>
					<div class="switchTeam-box">
						<h2 class="lrPading-20">切换团队：</h2>
						<div class="ea-TeamList-box lrPading-20">
							<a class="ea-Team-item" v-for="(item,index) in teamList" v-bind:key="index"
							   @click="tabTeamFn(item.team.teamId)">
								<img :src="item.team.img+'!icon.jpg'" alt="">
								<span>{{item.team.name}}</span>

							</a>
						</div>
					</div>
					<div class="creatTeam">
						<el-button size="small" @click="createTeamPage" type="primary">创建新团队
						</el-button>

					</div>
				</div>
				<a slot="reference" style="display: inline-block;margin-right: 20px">
					<!--<span class="teamIcon"></span>-->
					<img src="../../public/images/teamIcon.png" alt="">
				</a>
			</el-popover>


			<el-popover
				v-model="showPopover"
				popper-class="el-popover--box"
				placement="bottom-end"
				visible-arrow
				width="50"
				trigger="click">
				<div class="flex-c">
					<a href="https://account.easyapi.com/notification/">我的通知</a>
					<a href="https://account.easyapi.com/setting/data">个人设置</a>
					<a @click="logOut">退出</a>
				</div>
				<a slot="reference">
					<img :src="photo" alt="">
				</a>
			</el-popover>

		</div>
	</div>

</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    name: "Header",
    components: {},
    props: {},
    data() {
      return {
        showPopover: false
      }
    },
    //计算属性
    computed: {
      ...mapGetters([
        'photo',
        'team',
        'teamName',
        'teamImg',
        'teamList',
        'pagesList',
        'navBarActive'
      ])
    },
    watch: {},
    created() {

    },
    mounted() {
      this.$store.dispatch('getUserInfo');
      this.$store.dispatch('getTeamList');
      this.$store.dispatch('setNavbar', this.$route.matched[0].path);
    },
    //keep-alive 组件激活时调用
    activated() {
    },
    //keep-alive 组件停用时调用。
    deactivated() {
    },
    //方法
    methods: {
      createTeamPage() {
        window.location.href = "https://www.easyapi.com/launch"
      },
      jumpPage(url) {
        if (this.$route.path.indexOf(url) === -1) {
          this.$router.push({path: url, query: {}});
          this.$store.dispatch('setNavbar', url);
        }
      },
      logOut() {
        this.$router.push('/login')
        this.$store.dispatch('logOut');
        this.showPopover = false
      }
    }
  }
</script>
<style lang="scss">
	.teamIcon {
		display: inline-block;
		width: 35px;
		height: 35px;
		background: url("../../public/images/teamIcon.png") no-repeat;
		background-size: cover;
	}

	.teamServeInfo {
		background-color: #ffffff;
		border-top: none;
		width: 410px;

		.teamServeName {
			height: 50px;
			line-height: 50px;
			font-weight: bold;
			border-bottom: 1px solid #eaeaea;
		}


		.teamServeContent {
			border-bottom: 1px solid #eaeaea;
			height: 110px;
			padding-top: 10px;
			padding-bottom: 10px;

			.teamsServeImg {
				width: 80px;
				height: 80px;
				border-radius: 50%;
				margin-top: (10/2) px;
			}

			.teamsServeImg-R {
				display: inline-block;
				height: 99px;
				vertical-align: top;
				padding-left: 20px;

				& > p {
					color: #333;
					height: 39px;
					line-height: 39px;
					font-size: 1rem;

				}

				.teamServeBtns {
					height: 50px;
					line-height: 50px;

					.ea-btn {
						padding: 6px 15px;
						border: 1px solid #ddd;
						color: #333;
						border-radius: 5px;
						box-sizing: content-box;
						margin-right: 5px;
						font-weight: normal;
						font-size: 14px;
					}
				}
			}

		}


		.switchTeam-box {
			border-bottom: 1px solid #eaeaea;

			& > h2 {
				height: 50px;
				line-height: 50px;
				font-weight: bold;
			}

			.ea-TeamList-box {
				/*父元素设置弹性布局*/
				display: flex;
				/*主轴方向*/
				/*column 列上下*/
				flex-direction: row;
				/*是否换行*/
				flex-wrap: wrap;
				/*在主轴对齐方式*/
				justify-content: flex-start;

				.ea-Team-item {
					display: inline-block;
					width: 50%;
					color: #333;
					font-size: 1rem;
					font-weight: normal;
					height: 40px;
					line-height: 40px;

					& > img {
						width: 28px;
						height: 28px;
						border-radius: 50%;
						vertical-align: middle;
						margin-right: 10px;
					}

					& > span {
						vertical-align: middle;
					}
				}

			}
		}


		.creatTeam {
			text-align: center;
			padding-top: 12px;

			.ea-info-btn {
				background-color: #5BC0DE;
			}

			.ea-info-btn:hover {
				background-color: #31B0D5;
			}
		}


	}


</style>
<style scoped lang="scss">
	.el-popover--box {
		padding: 0;

		div {
			a {
				cursor: pointer;
				line-height: 26px;
				padding: 0 15px;
				color: #999999;

				&:hover {
					background: $main-color;
					color: $cl-white;
				}
			}


		}

	}
	.header_account{
		a{
			display: inline-block;
		}
	}
</style>
