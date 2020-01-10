<template>
  <div id="#app" class="w-full">
    <div class="max-w-xl p-4 mx-auto" style="height: 400px;">
      
      <modal :dismissable="true" />

      <popover class="mt-2" />

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
import Modal from './Dropdown/Modal.vue';
import Popover from './Dropdown/Popover.vue';

export default Vue.extend({
  name: 'app',
  components: {
    Modal,
    Popover
  }
});
</script>
