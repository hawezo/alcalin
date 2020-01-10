import Vue, { VNode, CreateElement } from 'vue';
import { Component } from '@/support/Component';
import {
  updateListeners,
  hasClickedAway,
  UIListener,
} from '@/support/click-away';
import { wrapSlot, WrapOptions } from '@/support/slot-wrap';

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

    /**
     * A tag for when the
     */
    tag: {
      type: String,
      default: 'div',
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
      this.$emit('toggled', { toggled: this.toggled });
    },
  },
  mounted() {
    this.$emit('mounted', this);
  },

  /*
  |--------------------------------------------------------------------------
  | Computed properties
  |--------------------------------------------------------------------------
  */
  computed: {
    wrapOptions(): WrapOptions {
      return {
        tag: this.tag,
        data: {},
      };
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
    return wrapSlot(this, h, {
      // Properties
      toggled: this.toggled,

      // Methods
      on: this.on,
      off: this.off,
      toggle: this.toggle,
    });
  },
});

export const Toggle: Component = {
  name: 'toggle',
  data,
};
