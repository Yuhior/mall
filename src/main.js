import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import MyAxios from './apis/https'
import { 
  Button,Popup,Tabbar, TabbarItem,
  Toast,Col, Row,Image as VanImage, 
  Icon,Swipe, SwipeItem,Grid, GridItem,
  NoticeBar,CountDown ,Card,Sidebar, SidebarItem
} from 'vant';

Vue.config.productionTip = false
//Vue.use(MyAxios);

Vue.use(Button).use(Popup).use(Tabbar)
  .use(TabbarItem).use(Toast).use(Col)
  .use(Row).use(VanImage).use(Grid).use(GridItem)
  .use(NoticeBar).use(CountDown).use(Card)
  .use(Sidebar).use(SidebarItem).use(Icon).use(Swipe)
  .use(SwipeItem);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
