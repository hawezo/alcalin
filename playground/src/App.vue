<template>
  <div id="#app" class="w-full">
    <div class="max-w-4xl p-4 mx-auto my-64" style="height: 400px;">
      <div class="p-6 bg-gray-800 rounded shadow-xl">
        <h1
          class="px-4 py-2 mb-4 font-bold uppercase bg-gray-700 rounded shadow-md text-md"
        >
          Toggle component examples
        </h1>

        <div class="flex">
          <modal text="Dismissible modal" />
          <modal
            text="Non-dismissible modal"
            class="ml-2"
            :dismissible="false"
          />
          <popover text="On click" class="ml-2" />
          <popover text="On hover" class="ml-2" trigger="hover" />
        </div>

        <p class="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          beatae corrupti ea quae quam omnis, molestias sit officiis amet minus
          fugiat aperiam inventore, harum praesentium nihil obcaecati suscipit
          doloribus aut. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ad dolores facere ut eaque possimus eligendi nisi doloremque!
          Possimus, ratione sint at sapiente natus quibusdam dolorem ab odit,
          necessitatibus earum cupiditate.
        </p>
      </div>

      <observer
        v-slot="{ isVisible }"
        class="flex items-center justify-center w-full"
        style="margin: 125% 0;"
      >
        <!-- This square won't be displayed if it's not appearing in the viewport -->
        <div
          class="flex items-center justify-center w-32 h-32 bg-red-500 rounded-lg shadow-lg"
          v-if="isVisible"
        >
          I am a square
        </div>
      </observer>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Modal from './Dropdown/Modal.vue';
import Popover from './Dropdown/Popover.vue';

export default Vue.extend({
  name: 'app',
  components: {
    Modal,
    Popover,
  },
});
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
