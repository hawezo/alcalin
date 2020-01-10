<template>
  <div id="#app" class="w-full">
    <div class="mx-auto max-w-xl p-4" style="height: 400px;">
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
            This is the content. <br/>
            It's not necessarily a list, you can add anything there.
          </div>
        </div>

      </dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'app',
});
</script>
