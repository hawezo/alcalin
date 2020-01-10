import Vue, { VNode, CreateElement } from 'vue';
import { Component } from '@/support/Component';
import {
  updateListeners,
  hasClickedAway,
  UIListener,
} from '@/support/click-away';

const data = Vue.extend({
  /*
  |--------------------------------------------------------------------------
  | Data
  |--------------------------------------------------------------------------
  */
  data: () => ({
    toggled: false,
  }),

  /*
  |--------------------------------------------------------------------------
  | Properties
  |--------------------------------------------------------------------------
  */
  props: {
    /**
     * Sets the toggle off on blur.
     */
    offOnBlur: {
      type: Boolean,
      default: false,
    },
  },

  /*
  |--------------------------------------------------------------------------
  | Events
  |--------------------------------------------------------------------------
  */
  watch: {
    toggled() {
      updateListeners(this.onClickAway as UIListener, this.toggled);
    },
  },

  /*
  |--------------------------------------------------------------------------
  | Methods
  |--------------------------------------------------------------------------
  */
  methods: {
    onClickAway(event: MouseEvent) {
      if (hasClickedAway(this.$el, event) && this.offOnBlur) {
        this.off();
        this.$emit('click-away', { event });
      }
    },

    on() {
      this.toggled = true;
      this.$emit('on');
    },

    off() {
      this.toggled = false;
      this.$emit('off');
    },

    toggle() {
      this.toggled = !this.toggled;
      this.$emit('toggle', { toggled: this.toggled });
    },
  },

  /*
  |--------------------------------------------------------------------------
  | Render
  |--------------------------------------------------------------------------
  */

  render(h: CreateElement): VNode {
    // @ts-ignore
    return this.$scopedSlots.default({
      // Properties
      toggled: this.toggled,

      // Methods
      on: this.on,
      off: this.off,
      toggle: this.toggle,

      // Behavior
      updateListeners: updateListeners,
      hasClickedAway: hasClickedAway,
    });
  },
});

export const Toggle: Component = {
  name: 'toggle',
  data,
};
