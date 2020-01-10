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

## Toggle

The toggle component is a simple toggleable element that can display more data.

### Slots

| Name     | Description                                            |
| -------- | ------------------------------------------------------ |
| `opened` | A boolean value indicating if the toggle is on or off. |
| `toggle` | A method to change the state of the toggle.            |
| `open`   | A method to set the toggle on.                         |
| `hide`   | A method to set the toggle off.                        |

### Events

| Name     | Description                                | Payload               |
| -------- | ------------------------------------------ | --------------------- |
| `on`     | Triggered when the toggle is set to on.    | None.                 |
| `off`    | Triggered when the toggle is set to off.   | None.                 |
| `toggle` | Triggered when the toggle is being toggle. | `{ toggled: <bool> }` |

### Properties

| Name        | Description                                                   | Type   | Default |
| ----------- | ------------------------------------------------------------- | ------ | ------- |
| `offOnBlur` | Defines if the toggle will be closed on a click outside of it | `bool` | `true`  |

### Example

```html
<toggle v-slot="{ toggled, toggle }">
  <div class="relative">
    <!-- Trigger -->
    <button
      class="px-4 py-2 rounded bg-gray-700 shadow-lg focus:bg-gray-800"
      @click="toggle"
    >
      Toggle this
    </button>

    <!-- Content -->
    <div v-show="toggled" class="p-4 rounded bg-gray-600 shadow-xl mt-2">
      This is the content. <br />
      It's not necessarily a list, you can add anything there.
    </div>
  </div>
</toggle>
```
