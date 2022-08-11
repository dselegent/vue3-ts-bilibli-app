import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "@/mock"
import "@/assets/styles/base.less"
import "@/assets/styles/iconfont.less"
import { Tab, Tabs, Swipe, SwipeItem } from 'vant';

const app = createApp(App);
app.use(Swipe);
app.use(SwipeItem);
app.use(Tab)
    .use(Tabs)
    .use(router).mount('#app')
