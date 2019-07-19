<template>
	<div class="aside">
		<div class="left-bar">
			<h3 class="tit">意见反馈</h3>
			<nav>
				<li @click="changeRoute('/feedback/list', $event)" :class="['nav-item', {'active':module=='FeedbackList'}]">
					<i class="icon-eye"></i>
					<span>意见反馈列表</span>
				</li>
				<!--<li @click="changeRoute('/feedback/template', $event)" :class="['nav-item', {'active':module=='FeedbackTemplate'}]">-->
					<!--<i class="icon-eye"></i>-->
					<!--<span>回复模板</span>-->
				<!--</li>-->
				<li @click="changeRoute('/feedback/setting-list', $event)" :class="['nav-item', {'active':module=='FeedbackSettingList'}]">
					<i class="icon-eye"></i>
					<span>反馈配置</span>
				</li>
			</nav>
		</div>
	</div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'Aside',
    components: {},
    props: {},
    data() {
      return {
        'module': 'root-set',
      }
    },
    //计算属性
    computed: {},
    watch: {
      $route: function () {
        this.module = this.$route.name
      }
    },
    created() {
      this.module = this.$route.name
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
      changeRoute: function (url, e) {
//      console.log(url);
//      console.log(e)
//      const my = e.path[0];
//      let allLi = document.getElementsByClassName('nav-item')
//      for(let i = 0; i < allLi.length; ++i) {
//        allLi[i].className = "nav-item"
//      }
//      my.classList.add('active')
//      this.$router.replace(`${url}?documentId=${this.$store.state.documentId}`)
        this.$router.replace(url)
      },
    }
  }
</script>
<style scoped lang="scss">
	.aside {
		.left-bar {
			position: absolute;
			top: 50px;
			left: 0;
			bottom: 0;
			width: 240px;
			padding: 30px 0;
			background: #ddedf4;
			overflow: auto;
		}

		.tit {
			font-size: 22px;
			margin-bottom: 30px;
			padding-left: 40px;
		}

		nav {
			margin-bottom: 40px;
			list-style-type: none;

			li {
				position: relative;
				margin-bottom: 5px;
				padding-left: 40px;
				padding-top: 6px;
				padding-bottom: 6px;
				color: #999;
				font-size: 14px;
				cursor: pointer;
				transition: all .2s ease;
				span{
					line-height: 24px;
				}
				&:hover {
					background: darken(#ddedf4,4%);
				}

				&.active {
					padding-top: 16px;
					padding-bottom: 16px;
					color: #1ac1d6;
					background: #fff;
					font-weight: bold;

					&:before {
						content: '';
						display: inline-block;
						position: absolute;
						top: 0;
						left: 0;
						bottom: 0;
						width: 6px;
						background: #1ac1d6;
					}

				}


			}

		}

		.set-wrapper {
			position: absolute;
			top: 50px;
			left: 0;
			right: 0;
			bottom: 0;
			overflow: auto;
			margin-left: 240px;

			.set-title {
				padding: 25px 30px;
				font-weight: bold;
				border-bottom: 1px solid #efefef;
			}

			.set-content {
				padding: 20px 30px;
			}

		}


	}
</style>
