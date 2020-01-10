import { VueConstructor } from "vue";
import * as components from "./components";

const Alcalin = {
  install(Vue: VueConstructor) {
    Object.values(components).forEach(component => {
      Vue.use(component);
    });
  }
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(Alcalin);
}

export default Alcalin;
