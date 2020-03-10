# Alcalin

Alcalin is a [renderless](https://adamwathan.me/renderless-components-in-vuejs/) Vue component library. It only brings functionality to Vue, without styling.

> `!` This library is not ready for production at all.
> I'm waiting for Vue 3 before continuing it.

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

- [Toggle](#toggle)
- [Observer](#observer)

## Toggle

The toggle component is a simple toggleable element that can display more data. It can be used to create every kind of component that requires are on/off (or open/closed) state. It can also handle clicks outside of its first child, which makes it ideal for popovers or dropdowns, but can also be used for tooltips, modals, or even collapses.

- [See an example](https://raw.githubusercontent.com/hawezo/alcalin/master/playground/assets/toggle.gif)

### Slots

These reactive variables and methods are available in the toggle's slots.

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

## Observer

The observer component is a wrapper that will observe its content to determine if they are visible in the viewport. It uses the `IntersectionObserver`, which [isn't available on IE11](https://caniuse.com/#feat=intersectionobserver).

### Slots

These reactive variables and methods are available in the observer's slots.

| Name      | Description                                                                        | Type     | Parameters |
| --------- | ---------------------------------------------------------------------------------- | -------- | ---------- |
| `visible` | A boolean value indicating if the content is visible.                              | Variable |            |
| `entry`   | An `IntersectionObserverEntry` object corresponding to the element. Can be `null`. | Variable |            |

### Events

- **`VisibilityPayload`**: `{ entry: IntersectionObserverEntry, element: Element }`
- **`ObserverPayload`**: `{ element: Element, context: Vue }`

| Name         | Description                                    | Payload                                                   |
| ------------ | ---------------------------------------------- | --------------------------------------------------------- |
| `visible`    | Triggered when the contnet becomes visible.    | `VisibilityPayload`                                       |
| `invisible`  | Triggered when the contnet becomes invisible.  | `VisibilityPayload`                                       |
| `mounted`    | Triggered when the component is mounted.       | `{ event: <Component> }`                                  |
| `observe`    | Triggered when the observer starts to observe. | `{ observer?: IntersectionObserver, ...ObserverPayload }` |
| `disconnect` | Triggered when the observer is disconnected.   | `ObserverPayload`                                         |

### Properties

| Name          | Description                                                                                                                                           | Type       | Default |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ------- |
| `root`        | The element that is used as the viewport for checking visibility of the target. Must be the ancestor of the target. Defaults to the browser viewport. | `Element`  | `null`  |
| `rootMargin`  | Margin around the root.                                                                                                                               | `Stirng`   | `0`     |
| `threshold`   | A threshold of 1.0 means that when 100% of the target is visible within the element specified by the root option, the observer is triggered.          | `Number`   | `0`     |
| `onVisible`   | A callback to call when the content becomes visible.                                                                                                  | `Function` |         |
| `onInvisible` | A callback to call when the content becomes invisible.                                                                                                | `Function` |         |
| `wrap`        | Determines if the content of the `Observer` component must always be wrapped into `tag`.                                                              | `Boolean`  | `true`  |
| `tag`         | Defines the fallback wrapper tag if you set multiple root elements.                                                                                   | `string`   | `div`   |

### Example

```html
<observer v-slot="{ isVisible }">
  <!-- This content won't be loaded unless it's on the screen -->
  <img src="bigstuff.webp" v-if="isVisible" />
</observer>
```

# TO-DO

- ListView
- TreeView
- Select
- Tags Input
- Tabs
- Sortable
- Context Menu?
