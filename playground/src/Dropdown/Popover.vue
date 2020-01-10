<template>
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
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'popover'
});
</script>
