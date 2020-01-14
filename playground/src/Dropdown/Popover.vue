<template>
  <toggle v-slot="{ toggled, toggle, on, off }" :off-on-blur="true">
    <!-- Trigger -->
    <button
      class="px-4 py-2 bg-gray-700 rounded shadow-lg focus:bg-gray-800"
      ref="trigger"
      @mouseenter="hoverMode ? on() : undefined"
      @mouseleave="hoverMode ? off() : undefined"
      @click="clickMode ? toggle() : undefined"
      v-text="text"
    />

    <!-- Content -->
    <div class="absolute p-4 mt-2 bg-gray-600 rounded shadow-xl" v-if="toggled">
      This is the content. <br />
      It's not necessarily a list, you can add anything there.
    </div>
  </toggle>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'popover',
  props: {
    trigger: {
      type: String,
      default: 'click',
      validator: (value: string) => ['hover', 'click'].includes(value),
    },
    text: {
      type: String,
      default: 'Popover',
    },
  },
  computed: {
    hoverMode() {
      return 'hover' === this.trigger;
    },
    clickMode() {
      return 'click' === this.trigger;
    },
  },
});
</script>
