<template>
  <toggle v-slot="{ toggled, toggle, off }">
    <!-- Trigger -->
    <button
      class="px-4 py-2 bg-gray-700 rounded shadow-lg focus:bg-gray-800 text-left"
      @click="toggle"
      v-text="text"
    />

    <!-- Content -->
    <div
      class="absolute inset-0 flex items-center justify-center"
      v-if="toggled"
    >
      <!-- Overlay - remove @click to force the click on a button -->
      <div class="absolute inset-0 bg-black opacity-50" @click="dismissible ? off() : undefined" />

      <!-- Modal -->
      <div
        class="absolute flex flex-col max-w-md p-4 mt-2 bg-gray-600 rounded shadow-xl"
      >
        <p>
          <b>This is the content of the modal.</b> <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et non
          officiis nesciunt iure ipsa maxime facere, ex, tempore ad, sed sunt
          mollitia rem delectus doloribus. Assumenda voluptatem molestiae porro
          repellat!
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
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'modal',
  props: {
    dismissible: {
      type: Boolean,
      default: true
    },
    text: {
      type: String,
      default: 'Popover'
    }
  }
});
</script>
