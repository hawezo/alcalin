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

These reactive variable and methods are available in the toggle's slots.

| Name              | Description                                                          | Type     | Parameters                                                          |
| ----------------- | -------------------------------------------------------------------- | -------- | ------------------------------------------------------------------- |
| `opened`          | A boolean value indicating if the toggle is on or off.               | Variable |                                                                     |
| `on`              | A method to set the toggle on.                                       | Method   |                                                                     |
| `off`             | A method to set the toggle off.                                      | Method   |                                                                     |
| `toggle`          | A method to change the state of the toggle.                          | Method   |                                                                     |
| `updateListeners` | A method to update the click and keyboard listeners on the document. | Method   | `listener: UIListener, shouldListen: boolean`                       |
| `hasClickedAway`  | A method to check if a click has occured outside of an element.      | Method   | `element: HTMLElement | Element | Document, { target }: MouseEvent` |

### Events

| Name         | Description                                          | Payload                   |
| ------------ | ---------------------------------------------------- | ------------------------- |
| `on`         | Triggered when the toggle is set to on.              |                           |
| `off`        | Triggered when the toggle is set to off.             |                           |
| `toggle`     | Triggered when the toggle is being toggled.          | `{ toggled: <bool> }`     |
| `click-away` | Triggered when a click occurs outside of the toggle. | `{ event: <MouseEvent> }` |

### Properties

| Name        | Description                                                   | Type   | Default |
| ----------- | ------------------------------------------------------------- | ------ | ------- |
| `offOnBlur` | Defines if the toggle will be closed on a click outside of it | `bool` | `false` |

### Examples

#### Simple popover

```html
<toggle v-slot="{ toggled, toggle }">
  <div class="relative">
    <!-- Trigger -->
    <button
      class="px-4 py-2 bg-gray-700 rounded shadow-lg focus:bg-gray-800"
      @click="toggle"
    >
      Toggle this
    </button>

    <!-- Content -->
    <div v-show="toggled" class="p-4 mt-2 bg-gray-600 rounded shadow-xl">
      This is the content. <br />
      It's not necessarily a list, you can add anything there.
    </div>
  </div>
</toggle>
```

#### Simple modal

```html
<toggle v-slot="{ toggled, toggle, off }">
  <div>
    <!-- Trigger -->
    <button
      class="px-4 py-2 bg-gray-700 rounded shadow-lg focus:bg-gray-800"
      @click="toggle"
    >
      Toggle this
    </button>

    <div
      class="absolute inset-0"
      style="background: rgba(0,0,0,.5);"
      v-show="toggled"
      @click="off"
    />

    <!-- Content -->
    <div
      v-show="toggled"
      class="relative p-4 mt-2 bg-gray-600 rounded shadow-xl"
    >
      <div>
        This is the content. <br />
        It's not necessarily a list, you can add anything there.
      </div>

      <button
        class="px-4 py-2 mt-3 bg-gray-700 rounded shadow-lg focus:bg-gray-800"
        @click="toggle"
      >
        Close
      </button>
    </div>
  </div>
</toggle>
```

# TO-DO

- ListView
- TreeView
- Select
- Tags Input
