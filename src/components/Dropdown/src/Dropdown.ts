import Vue, { VNode, CreateElement } from 'vue';
import { Component } from '@/support/Component';
import { updateListeners, hasClickedAway, UIListener } from '@/support/click-away';

const data = Vue.extend({
  /*
  |--------------------------------------------------------------------------
  | Data
  |--------------------------------------------------------------------------
  */
  data: () => ({
    opened: false,
  }),

  /*
  |--------------------------------------------------------------------------
  | Properties
  |--------------------------------------------------------------------------
  */
  props: {
    /**
     * Closes the dropdown on blur.
     */
    closeOnBlur: {
      type: Boolean,
      default: true,
    },
  },

  /*
  |--------------------------------------------------------------------------
  | Events
  |--------------------------------------------------------------------------
  */
  watch: {
    opened() {
      updateListeners(this.onClickAway as UIListener, this.opened);
    }
  },
  

  /*
  |--------------------------------------------------------------------------
  | Methods
  |--------------------------------------------------------------------------
  */
  methods: {
    onClickAway(event: MouseEvent) {
      if (hasClickedAway(this.$el, event) && this.closeOnBlur) {
        this.close();
      }
    },

    open() {
      this.opened = true;
      this.$emit('open');
    },

    close() {
      this.opened = false;
      this.$emit('close');
    },

    toggle() {
      this.opened = !this.opened;
      this.$emit('toggle', { opened: this.opened });
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
      opened: this.opened,

      // Methods
      open: this.open,
      close: this.close,
      toggle: this.toggle,
    });
  },
});

export const Dropdown: Component = {
  name: 'dropdown',
  data,
};
