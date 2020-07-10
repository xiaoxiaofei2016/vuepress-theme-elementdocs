import store from './store';
// import Antd from 'ant-design-vue';
import ElementUI from 'element-ui'
import './styles/index.scss';

export default ({
  Vue,
  options,
  router,
  siteData,
}) => {
  Vue.mixin({ store })
  Vue.use(ElementUI)
}