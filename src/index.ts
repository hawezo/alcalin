import { VueConstructor } from 'vue';
import * as components from './components';

const Alcalin = {
  install (Vue: VueConstructor) {
    Object.values(components).forEach((component: any) => {
      Vue.use(component);
    });
  }
};

if ('undefined' !== typeof window && window.Vue) {
  window.Vue.use(Alcalin);
}

export default Alcalin;
