<template>
	<div class="header ctx-w clear">
		<div class="fl easyapi-logo clear">
			<a href="https://www.easyapi.com/" class="logo fl">
				<img src="../../public/images/logo.png" alt="" class="logo-img">
			</a>
			<a href="https://market2.easyapi.com/service/center" class="a-item">服务中心</a>
		</div>
		<div class="fr userOperation-box">
			<div class="teamServe">
				<a id="showSerInfo" :class="{active:showSerInfo}">
					<span class="teamIcon"></span>
				</a>
				<div :class="{active:showSerInfo}" class="teamServeInfo">
					<h2 class="teamServeName lr-pd-20">当前团队</h2>
					<div class="clear teamServeContent lr-pd-20">
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
						<h2 class="lr-pd-20">切换团队：</h2>
						<div class="ea-TeamList-box lr-pd-20">
							<a class="ea-Team-item flex-r" v-for="(item,index) in teamList" v-bind:key="index"
							   @click="tabTeamFn(item.team.teamId)">
								<img :src="item.team.img+'!icon.jpg'" alt="">
								<span>{{item.team.name}}</span>

							</a>
						</div>
					</div>
					<div class="creatTeam">
						<el-button type="primary" size="small" @click="jupmPage()">创建新团队</el-button>
					</div>
				</div>
			</div>
			<div class="userAvatar ea-Dropdown">
				<a>
					<img id="showPersonage" :src="photo" alt="">
				</a>
				<div :class="{active:isActive}" class="ea-DropdownMenu">
					<a href="https://account.easyapi.com/notification/">我的通知</a>
					<a href="https://account.easyapi.com/setting/data">个人设置</a>
					<a @click="quitLogin()" href="https://account.easyapi.com/logout">退出</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'Header',
    data: function () {
      return {
        inBack: false,
        searchServe: '',
        serveName: '',
        userInfo: [],
        isActive: false,
        showSerInfo: false,
      }
    },
    computed: {
      ...mapGetters([
        'photo',
        'team',
        'teamName',
        'teamImg',
        'teamList'
      ])
    },
    created: function () {
      if (this.$route.path.indexOf('/back/') < 0) {
        this.inBack = false
      } else {
        this.inBack = true
      }
      let body = document.querySelector('body');
      body.addEventListener('click', (e) => {
        if (e.target.id === 'showSerInfo' || e.target.className === 'teamIcon') {
          this.isActive = false;
          this.showSerInfo = !this.showSerInfo
        } else if (e.target.id === 'showPersonage') {
          this.isActive = !this.isActive;
          this.showSerInfo = false;
        } else {
          this.showSerInfo = false;
          this.isActive = false;
        }
      }, false)
    },

    methods: {
      quitLogin() {
        this.$store.dispatch('LogOut');
        window.location.href = "https://www.easyapi.com/user/login";
      },
      jupmPage() {
        window.location.href = "https://www.easyapi.com/launch"
      },
      tabTeamFn(id) {
        this.$store.dispatch('switchoverTeam', id);
      }
    },
    'watch': {
      $route: function () {
        if (this.$route.path.indexOf('/back/') < 0) {
          this.inBack = false
        } else {
          this.inBack = true
        }
      }
    },
    mounted() {
      this.$store.dispatch('GetUserInfo');
      this.$store.dispatch('getTeamList');
    }
  }

</script>

<style lang="scss" scoped>
	.header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: 50px;
		line-height: 50px;
		padding-left: 20px;
		padding-right: 20px;
		background-color: #1ac1d6;
		font-weight: bold;
		z-index: 888;

		.a-item {
			position: relative;
			display: inline-block;
			color: #fff;
			padding: 0 20px;
			line-height: 50px;
			text-decoration: none;
		}

		.a-item:hover {
			background: darken(#1ac1d6, 5%);
		}
	}

	.serveName-box {
		cursor: pointer;

		a.serveName {
			color: #fff;
			line-height: 50px;
			display: inline-block;

			i {
				margin-left: 5px;
			}
		}

	}

	.easyapi-logo {
		height: 50px;
	}

	.userOperation-box {
		display: inline-block;
		height: 50px;
		position: relative;

		.userAvatar {
			display: inline-block;
			vertical-align: top;

			& > a {
				padding: 0 20px;
				display: inline-block;
				height: 50px;
				cursor: pointer;
				position: relative;

				img {
					width: 35px;
					height: 35px;
					border-radius: 50%;
				}
			}

		}

		.ea-DropdownMenu {
			position: absolute;
			top: 50px;
			right: 0;
			z-index: 100;
			border: 1px solid #eee;
			border-top: none;
			box-shadow: 0px 1px 3px #ddd;
			background-color: #fff;
			border-bottom-right-radius: 5px;
			border-bottom-left-radius: 5px;
			width: 100px;
			display: none;

			&.active {
				display: block;
			}


			a {
				display: block;
				line-height: 26px;
				height: inherit;
				padding-left: 15px;
				color: #777;
				font-weight: normal;

				&:hover {
					background-color: #1ac1d6;
					color: #fff;
				}


			}

		}

		.teamServe {
			height: 50px;
			display: inline-block;
			position: relative;

			& > a {
				padding: 7.5px 20px;
				height: 50px;
				display: inline-block;

				&.active {
					background-color: #19B7CB;
				}

				&:hover {
					background-color: #19B7CB;
				}

				.teamIcon {
					display: inline-block;
					width: 35px;
					height: 35px;
					background: url("../../public/images/teamIcon.png") no-repeat;
					background-size: cover;
				}
			}


		}

		.teamServeInfo {
			position :absolute;
			top :50px;
			right: 0;
			background-color :#ffffff;
			box-shadow: 0px 1px 3px #ddd;
			border: 1px solid #eee;
			border-top: none;
			width :410px;
			border-bottom-right-radius: 5px;
			border-bottom-left-radius: 5px;
			display :none;

			&.active {
				display: block;
			}


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
			}


			.teamsServeImg {
				width: 80px;
				height: 80px;
				border-radius: 50%;
				margin-top: (10 / 2) px;

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
							margin-right: 6px;
						}


						& > span {
							flex: 1;
							vertical-align: middle;
							overflow:hidden;
							text-overflow:ellipsis;
							white-space:nowrap;
						}

					}

				}


			}

			.creatTeam {
				text-align: center;
			}


			.ea-info-btn {
				background-color: #5BC0DE;
			}


			.ea-info-btn:hover {
				background-color: #31B0D5;
			}


		}

	}


</style>
