<template>
	<div class="aside">
		<div class="navbar flex-c" v-for="(item,index) in sons" :key="index">
			<div class="title flex-r" @click="handleOpen(index,navbarOpenArr[index])">
				<b>{{item.title}}</b>
				<i class="el-icon-arrow-down arrow-icon" :class="[navbarOpenArr[index]?'rotate':'']"></i>
			</div>
			<div class="navbar-item flex-c" :style="{height:!navbarOpenArr[index]?0:''}">
				<a :class="[sonsBarActive===citem.name?'active':'']" v-for="(citem,cindex) in item.sons" :key="cindex"
				   @click="jumpPage(citem.url,index)">
					<span :class="['iconfont',citem.icon?citem.icon:'icon-member1']"></span>{{citem.title}}</a>
			</div>
		</div>


	</div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import {findElem} from '../utils/fn'

  export default {
    name: 'Aside',
    components: {},
    props: {},
    data() {
      return {
        navbarOpenArr: []
      }
    },
    //计算属性
    computed: {
      ...mapGetters([
        'sons',
        'sonsBarActive'
      ])
    },
    watch: {
      sons: async function (newV, oldv) {
        if (newV) {
          this.findElem(newV)

        }
      }
    },
    created() {
    },
    mounted() {
      this.$store.dispatch('setSonsNavbarActive', this.$route.path);

    },
    //keep-alive 组件激活时调用
    activated() {
    },
    //keep-alive 组件停用时调用。
    deactivated() {
    },
    //方法
    methods: {
      handleOpen(index,v) {
        this.$set(this.navbarOpenArr,index,!v)
      },
      findElem(v) {
        let arr = v;
        let checkedArr=[]
        for (let i in arr) {
          if (arr[i].sons) {
            let index = findElem(arr[i].sons, 'name', this.sonsBarActive)
            if (index !== -1) {
              checkedArr[i]=true
            }else {
              checkedArr[i]=false
            }
          }

        }
        this.navbarOpenArr=checkedArr
      },
      jumpPage(url, i) {
        this.$router.push({path: url, query: {}});
        this.$store.dispatch('setSonsNavbarActive', url);
        // this.$store.dispatch('setSonsNavbar', {url:url,index:i});
      },
    }
  }
</script>
<style scoped lang="scss">

</style>
