<template>
  <div class="home">
    <m-header></m-header>
    <div style="height:41px; width:100%"></div>
    <router-view/>
    <div style="height:41px; width:100%"></div>
    <van-tabbar v-model="active" active-color="#07c160" >
      <van-tabbar-item icon="home-o" 
        v-for="(tab,index) in tabBar" 
        :to="tab.path"
        :key="index">
        {{tab.name}}
        <template #icon="props">
            <img :src="props.active ? tab.icon.active : tab.icon.normal" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import mHeader from '../components/Mheader'
export default {
  name: 'Home',
  components: {
    mHeader
  },
  data(){
    return {
      active:0,
      tabBar:[
        {
          name: '首页',
          path: '/home/index/index',
          pathName: 'index',
          icon: {
            normal: require('../assets/image/home/home.png'),
            active: require('../assets/image/home/home_active.png')
          }
        },{
          name: '分类',
          path: '/home/classify/index',
          pathName: 'category',
          icon: {
            normal: require('../assets/image/home/category.png'),
            active: require('../assets/image/home/category_active.png')
          }
        },{
          name: '专题',
          path: '/home/topic/index',
          pathName: 'find',
          icon: {
            normal: require('../assets/image/home/find.png'),
            active: require('../assets/image/home/find_active.png')
          }
        },{
          name: '我的',
          path: '/home/user/index',
          pathName: 'user',
          icon: {
            normal: require('../assets/image/home/user.png'),
            active: require('../assets/image/home/user_active.png')
          }
        }
      ]
    }
  }
}
</script>
<style lang="stylus">
.van-tabbar--fixed
  z-index:3000
</style>