import { createApp } from 'vue'
import 'ant-design-vue/dist/reset.css';
import Antd from 'ant-design-vue';
import App from './app/app.vue'

const app = createApp(App)

app.use(Antd).mount('#app')
