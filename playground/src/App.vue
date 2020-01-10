<template>
  <div id="#app" class="w-full">
    <div class="mx-auto max-w-xl p-4" style="height: 400px;">
      <toggle v-slot="{ toggled, toggle, off }">
        <div>

          <!-- Trigger -->
          <button
            class="px-4 py-2 rounded bg-gray-700 shadow-lg focus:bg-gray-800"
            @click="toggle"
          >
            Toggle this
          </button>

          <div class="absolute inset-0" style="background: rgba(0,0,0,.5);" v-show="toggled" @click="off" />

          <!-- Content -->
          <div v-show="toggled" class="p-4 rounded bg-gray-600 shadow-xl mt-2 relative">
            <div>
              This is the content. <br/>
              It's not necessarily a list, you can add anything there.
            </div>

            <button
              class="mt-3 px-4 py-2 rounded bg-gray-700 shadow-lg focus:bg-gray-800"
              @click="toggle"
            >
              Close
            </button>
          </div>

        </div>
      </toggle>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'app',
});
</script>
