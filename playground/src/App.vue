<template>
  <div id="#app" class="w-full">
    <div class="max-w-xl p-4 mx-auto" style="height: 400px;">
      
      <toggle v-slot="{ toggled, toggle, off }" :off-on-blur="true">
        
          <!-- Trigger -->
          <button
            class="px-4 py-2 bg-gray-700 rounded shadow-lg focus:bg-gray-800"
            @click="toggle"
          >
            Toggle this
          </button>

          <!-- Content -->
          <div
            v-if="toggled"
            class="absolute p-4 mt-2 bg-gray-600 rounded shadow-xl"
          >
            This is the content. <br />
            It's not necessarily a list, you can add anything there.
          </div>

      </toggle>

      <p class="mt-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
        beatae corrupti ea quae quam omnis, molestias sit officiis amet minus
        fugiat aperiam inventore, harum praesentium nihil obcaecati suscipit
        doloribus aut.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'app',
  methods: {}
});
</script>
