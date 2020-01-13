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

The toggle component is a simple toggleable element that can display more data. It can be used to create every kind of component that requires are on/off (or open/closed) state. It can also handle clicks outside of its first child, which makes it ideal for popovers or dropdowns, but can also be used for tooltips, modals, or even collapses.

- [See an example](https://raw.githubusercontent.com/hawezo/alcalin/master/playground/assets/toggle.gif)

### Slots

These reactive variable and methods are available in the toggle's slots.

| Name     | Description                                            | Type     | Parameters |
| -------- | ------------------------------------------------------ | -------- | ---------- |
| `opened` | A boolean value indicating if the toggle is on or off. | Variable |            |
| `on`     | A method to set the toggle on.                         | Method   |            |
| `off`    | A method to set the toggle off.                        | Method   |            |
| `toggle` | A method to change the state of the toggle.            | Method   |            |

### Events

| Name         | Description                                          | Payload                   |
| ------------ | ---------------------------------------------------- | ------------------------- |
| `on`         | Triggered when the `on` method is called.            |                           |
| `off`        | Triggered when the `off` method is called.           |                           |
| `toggle`     | Triggered when the `toffle` method is called.        | `{ toggled: <bool> }`     |
| `mounted`    | Triggered when the component is mounted.             | `{ event: <Component> }`  |
| `toggled`    | Triggered when the component is being toggled.       | `{ toggled: <bool> }`     |
| `click-away` | Triggered when a click occurs outside of the toggle. | `{ event: <MouseEvent> }` |

### Properties

| Name        | Description                                                         | Type     | Default |
| ----------- | ------------------------------------------------------------------- | -------- | ------- |
| `offOnBlur` | Defines if the toggle will be closed on a click outside of it.      | `bool`   | `false` |
| `tag`       | Defines the fallback wrapper tag if you set multiple root elements. | `string` | `div`   |

### Examples

#### Simple popover

```html
<toggle v-slot="{ toggled, toggle }" :off-on-blur="true">
  <!-- Trigger -->
  <button
    class="px-4 py-2 bg-gray-700 rounded shadow-lg focus:bg-gray-800"
    @click="toggle"
  >
    Toggle this
  </button>

  <!-- Content -->
  <div class="absolute p-4 mt-2 bg-gray-600 rounded shadow-xl" v-if="toggled">
    This is the content. <br />
    It's not necessarily a list, you can add anything there.
  </div>
</toggle>
```

#### Simple modal

```html
<toggle v-slot="{ toggled, toggle, off }">
  <!-- Trigger -->
  <button
    class="px-4 py-2 bg-gray-700 rounded shadow-lg focus:bg-gray-800"
    @click="toggle"
  >
    Toggle this
  </button>

  <!-- Content -->
  <div class="absolute inset-0 flex items-center justify-center" v-if="toggled">
    <!-- Overlay - remove @click to force the click on a button -->
    <div class="absolute inset-0 bg-black opacity-50" @click="off" />

    <!-- Modal -->
    <div class="absolute flex flex-col p-4 mt-2 bg-gray-600 rounded shadow-xl">
      <p>
        This is the content. <br />
        It's not necessarily a list, you can add anything there.
      </p>

      <button
        class="self-end px-4 py-2 mt-2 bg-gray-700 rounded shadow-lg focus:bg-gray-800"
        @click="off"
      >
        Accept
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
- Tabs
- Sortable
- Storage
- Pagination
- Context Menu
