import { VueConstructor } from 'vue/types/umd';

export const installify = (component: any) => {
  component.install = (Vue: VueConstructor) => {
    Vue.component(component.name, component);
  };
};
