<script lang="ts">
import Vue, { VNode } from 'vue';

export default Vue.extend({
  /*
  |--------------------------------------------------------------------------
  | Data
  |--------------------------------------------------------------------------
  */
  data: () => ({
    expanded: false,
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

    /**
     * The tag to be used for the main wrapper.
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
  mounted() {
    if (this.closeOnBlur) {
      document.addEventListener('click', this.handleDocumentClick);
    }
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleDocumentClick);
  },

  /*
  |--------------------------------------------------------------------------
  | Methods
  |--------------------------------------------------------------------------
  */
  methods: {
    /**
     * Toggles the expanded mode.
     */
    toggle(expanded?: boolean): void {
      this.expanded = expanded ?? !this.expanded;
    },

    /**
     * Handles a click on the document.
     */
    handleDocumentClick(event: MouseEvent): void {
      if (this.shouldCloseDropdown(event)) {
        this.expanded = false;
      }
    },

    /**
     * Determines if the dropdown should be closed based on the
     * mouse event that occured.
     */
    shouldCloseDropdown({ currentTarget }: MouseEvent): boolean {
      const { $el } = this;

      return currentTarget instanceof Node && !$el.contains(currentTarget);
    },
  },

  /*
  |--------------------------------------------------------------------------
  | Render
  |--------------------------------------------------------------------------
  */
  render(h, context): VNode {
    const common: any = {
      expanded: this.expanded,
      toggle: this.toggle,
    };

    const trigger = this.$scopedSlots.default
      ? this.$scopedSlots.default({
          ...common,
        })
      : null;

    const dropdown = this.$scopedSlots.dropdown
      ? this.$scopedSlots.dropdown({
          ...common,
        })
      : null;

    return h(
      this.tag,
      {
        ...common,
      },
      [trigger],
    );
  },
});
</script>
