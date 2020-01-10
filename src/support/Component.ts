import { ExtendedVue } from 'vue/types/vue';

export interface Component {
  name: string,
  data: ExtendedVue<any, any, any, any, any>
}
