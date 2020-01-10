<template>
  <div id="#app" class="w-full">
    <div class="max-w-xl p-4 mx-auto" style="height: 400px;">
      
      <toggle v-slot="{ toggled, toggle, off }">
        
        <!-- Trigger -->
        <button class="px-4 py-2 bg-gray-700 rounded shadow-lg focus:bg-gray-800" @click="toggle">
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
            
            <button class="self-end px-4 py-2 mt-2 bg-gray-700 rounded shadow-lg focus:bg-gray-800" @click="off">
              Accept
            </button>
          </div>
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
