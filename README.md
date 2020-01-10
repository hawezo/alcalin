# Alcalin

Alcalin is a [renderless](https://adamwathan.me/renderless-components-in-vuejs/) Vue component library. It only brings functionality to Vue, without styling.

> `!` This library is not ready for production.

# Installation

Install the `alcalin` library with your package manager:

```console
$ yarn add alcalin
```

Register it as a Vue plugin:

```js
// main.js
import Vue from 'vue';
import App from './App.vue';
import Alcalin from 'alcalin';

Vue.config.productionTip = false;
Vue.use(Alcalin);

new Vue({
  render: h => h(App),
}).$mount('#app');
```

# Components

## Dropdown

The dropdown component is a simple toggleable element that can display more data.

### Slots

| Name     | Description                                                  |
| -------- | ------------------------------------------------------------ |
| `opened` | A boolean value indicating if the dropdown is opened or not. |
| `toggle` | A method to toggle the dropdown.                             |
| `open`   | A method to open the dropdown.                               |
| `hide`   | A method to hide the dropdown.                               |

### Events

| Name     | Description                          | Payload              |
| -------- | ------------------------------------ | -------------------- |
| `open`   | Triggered when the dropdown opens.   | None.                |
| `close`  | Triggered when the dropdown closes.  | None.                |
| `toggle` | Triggered when the dropdown toggles. | `{ opened: <bool> }` |

### Properties

| Name          | Description                                                     | Type   | Default |
| ------------- | --------------------------------------------------------------- | ------ | ------- |
| `closeOnBlur` | Defines if the dropdown will be closed on a click outside of it | `bool` | `true`  |

### Example

```html
<dropdown v-slot="{ opened, toggle }">
  <div class="relative">
    <!-- Trigger -->
    <button
      class="px-4 py-2 rounded bg-gray-700 shadow-lg focus:bg-gray-800"
      @click="toggle"
    >
      Toggle this
    </button>

    <!-- Content -->
    <div v-show="opened" class="p-4 rounded bg-gray-600 shadow-xl mt-2">
      This is the content. <br />
      It's not necessarily a list, you can add anything there.
    </div>
  </div>
</dropdown>
```
