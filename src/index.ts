import { VueConstructor } from 'vue';
import { Component } from '@/support/Component';
import * as components from '@/components';
import * as clickAway from '@/support/click-away';

const Alcalin = {
  install(Vue: VueConstructor) {
    Object.values(components).forEach((component: Component) => {
      Vue.use({
        ...component,
        install: (Vue: VueConstructor) => {
          Vue.component(component.name, component.data);
        },
      });
    });
  },
};

if ('undefined' !== typeof window && window.Vue) {
  window.Vue.use(Alcalin);
}

export default Alcalin;
export { components as Components };
export { clickAway as ClickAway };
