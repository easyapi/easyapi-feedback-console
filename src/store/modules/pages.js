import {findElem} from '../../utils/fn';
import Cookies from 'js-cookie';
//基本一级页面配置 顶部导航及左侧可显示菜单
//name，url不要重复
/*
* title标题
* name routername
* icon 图标class
* url  路径
* */
let list = [
  {
    title: "二维码海报",
    url: '/base',
    name: 'base',
    sons: [
      {
        title: '二维码海报',
        sons: [
          {
            title: "海报记录",
            url: '/base/posterRecord',
            name: 'posterRecord',
            icon: "",
          },
          {
            title: "海报模板",
            url: '/base/posterTemplate',
            name: 'posterTemplate',
            icon: "",
          },          
        ]
      },
    ]
  }
];


//扩展页面配置【配置跳转页面选中相应name】
let extend = [
  //商城
  {
    name: 'posterRecord',
    list: ['/base/posterRecord']
  },
  {
    name: 'posterTemplate',
    list: ['/base/posterTemplate']
  },
];

const pages = {
  state: {
    pagesList: list,
    extendPageList: extend,
    navBarActive: '',
    sons: [],
    sonsBarActive: '',
  },

  mutations: {
    SET_NAVBAR_AVTIVE: (state, name) => {
      state.navBarActive = name
    },
    SET_SONS: (state, urlArr) => {
      state.sons = urlArr
    },
    SET_SONS_NAVBAR_AVTIVE: (state, name) => {
      state.sonsBarActive = name
    },
  },

  actions: {
    setNavbar({commit, state}, url) {
      let pagesList = state.pagesList;
      let index = findElem(pagesList, 'url', url)
      commit('SET_NAVBAR_AVTIVE', pagesList[index].name)
      commit('SET_SONS', pagesList[index].sons)
      commit('SET_SONS_NAVBAR_AVTIVE', pagesList[index].sons[0].sons[0].name)
    },
    setSonsNavbarActive({commit, state}, url) {
      for (let v of state.extendPageList) {
        if (v.list.includes(url)) {
          commit('SET_SONS_NAVBAR_AVTIVE', v.name)
        }
      }
    }

  }
}

export default pages
