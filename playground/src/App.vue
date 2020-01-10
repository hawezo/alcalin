<template>
  <div id="#app" class="w-full">
    <div class="max-w-xl p-4 mx-auto" style="height: 400px;">
      <toggle v-slot="{ toggled, toggle, off }">
        <div>
          <!-- Trigger -->
          <button
            class="px-4 py-2 bg-gray-700 rounded shadow-lg focus:bg-gray-800 focus:outline-none focus:shadow-outline"
            @click="toggle"
          >
            Open modal
          </button>

          <div
            class="absolute inset-0 w-screen h-screen"
            style="background: rgba(0,0,0,.5);"
            v-show="toggled"
            @click="off"
          />

          <!-- Content -->
          <div
            class="relative flex flex-col p-4 mt-2 bg-gray-600 rounded shadow-xl"
            v-show="toggled"
          >
            <div>
              This is the content. <br />
              It's not necessarily a list, you can add anything there.
            </div>

            <button
              class="self-end px-4 py-2 mt-3 bg-gray-700 rounded shadow-sm focus:bg-gray-800 hover:shadow-md focus:outline-none focus:shadow-outline"
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
