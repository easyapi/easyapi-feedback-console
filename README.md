# EasyAPI意见反馈控制台 

## 项目介绍
意见反馈

## 相关技术和第三方库

* [vue2.0中文网](https://vuefe.cn/v2/guide/)
* [ECMAScript 6 入门](http://es6.ruanyifeng.com/)
* [vuex中文文档](https://vuex.vuejs.org/zh-cn/)
* [vue-router2中文文档](https://router.vuejs.org/zh-cn/)
* [Element-ui组件库](https://element.eleme.cn/)
* [vue-cli脚手架](https://github.com/vuejs/vue-cli)

---

## 开发调试

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 项目目录结构

``` bash
├── README.md
├── dist                    #打包后输出文件夹
├── public          
  ├── imgages               #图片     
  ├── index.html               #入口      
├── node_modules            #依赖模块
├── package.json
├── src                     #源码          
  ├── api
  │   ├── api.js            #API列表
  │   └── fetch.js          #axios封装
  ├── assets                #静态资源
  │     ├── font             #css
  │   ├── font             #字体
  │   ├── images            #图片
  │   └── styles            #样式表
  ├── components            #业务组件
  │   ├── Header.vue        #Header组件
  │   └── Aside.vue     #Aside组件
  ├── pages                 #页面文件
  ├── router                #路由配置
  ├── store                 #Vuex配置
  ├── utils                  #依赖工具函数
  ├── App.vue               
  └── main.js               #入口



```

## 命名规范

* 使用kebab-case（短横线）命名方式
* 图片资源采用的命名规范
* CSS命名规范
* 常规名称命名方案，参见EasyAPI中英文翻译
* API接口方法命名，例如getUser，getUserList，createUser，updateUser，deleteUser，其他方法尽量动词在前，例如cancelOrder 取消订单

## 其他说明

* page目录页面命名规范，文件命令简明扼要，例如/pages/api/list.vue表示API列表页，/pages/api/detail.vue表示API详情页，其他还包括edit.vue，info.vue，report.vue
* 如果页面必须是2个单词组成，使用短横线分隔命名，例如文章分类article-category，另外考虑是否可以使用/pages/article/category/list.vue来命名，尽量不使用短横线
* page目录中尽量采用样式表和页面分离开发，例如login文件夹中包含login.vue，login.styl
* 自定义组建说明，基于成熟的组建进行自定义开发，可平滑升级，打造属于EasyAPI的Vue组件库，以EasyAPI缩写ea为前缀，例如ea-table
* 布局已放到pages/layout/ 文件夹下的layout.vue
* 网络请求已使用axios，并封装到fetch.js
* 用户信息等全局变量，必须使用store管理，包括相关api请求放置到modules文件夹下

## Vue方法放置顺序
    components
    props
    data
    created
    mounted
    activited
    update
    beforeRouteUpdate
    metods
    filter
    computed
    watch

## 常见问题


**1. 编译失败**

	请使用cnpm试试

**2. 编译成功启动失败**

	请确保网络正常，可提供错误给相关工程师
