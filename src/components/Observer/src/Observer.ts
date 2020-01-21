import Vue, { VNode, CreateElement, PropType } from 'vue';
import { Component } from '@/support/Component';
import { wrapSlot, WrapOptions } from '@/support/slot-wrap';

const data = Vue.extend({
  /*
  |--------------------------------------------------------------------------
  | Data
  |--------------------------------------------------------------------------
  */
  data: () => ({
    observer: (null as unknown) as IntersectionObserver | null,
    entry: (null as unknown) as IntersectionObserverEntry | null,
    visible: false,
  }),

  /*
  |--------------------------------------------------------------------------
  | Properties
  |--------------------------------------------------------------------------
  */
  props: {
    /**
     * The element that is used as the viewport for checking visibility of
     * the target. Must be the ancestor of the target.
     * Defaults to the browser viewport if not specified or if null.
     */
    root: {
      type: Element,
      default: null,
    },

    /**
     * Margin around the root.
     */
    rootMargin: {
      type: String,
      default: '0px',
    },

    /**
     * A threshold of 1.0 means that when 100% of the target is visible
     * within the element specified by the root option,
     * the observer is triggered.
     */
    threshold: {
      type: Number,
      default: 0,
    },

    /**
     * A method to call when the element is visible.
     */
    onVisible: {
      type: Function,
      required: false,
    },

    /**
     * A method to call when the element is no longer visible.
     */
    onInvisible: {
      type: Function,
      required: false,
    },

    /**
     * Defines if the content of the observer must always
     * be wrapped.
     */
    wrap: {
      type: Boolean,
      default: true,
    },

    /**
     * Default tag if applicable.
     */
    tag: {
      type: String,
      default: 'div',
    },
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
        force: this.wrap,
      };
    },
  },

  /*
  |--------------------------------------------------------------------------
  | Events
  |--------------------------------------------------------------------------
  */
  mounted() {
    this.$emit('mounted', this);
    this.createObserver();
  },
  beforeDestroy() {
    this.destroyObserver();
  },

  /*
  |--------------------------------------------------------------------------
  | Methods
  |--------------------------------------------------------------------------
  */
  methods: {
    createObserver() {
      if (this.observer) {
        this.destroyObserver();
      }

      /// @ts-ignore
      this.observer = new IntersectionObserver(
        entries => {
          this.entry = entries[0];

          if (entries.length > 1) {
            this.entry = this.entry ?? entries.find(e => e.isIntersecting);
          }

          this.visible =
            this.entry?.isIntersecting &&
            this.entry.intersectionRatio >= this.threshold;

          const payload = { entry: this.entry, element: this.entry.target };

          if (this.visible) {
            // Emits the event
            this.$emit('visible', payload);

            // Calls the onVisible callback
            if (this.onVisible) {
              this.onVisible(payload, this);
            }
          } else {
            // Emits the event
            this.$emit('invisible', payload);

            // Calls the onInvisible callback
            if (this.onInvisible) {
              this.onInvisible(payload, this);
            }
          }
        },
        {
          root: this.root,
          rootMargin: this.rootMargin,
          threshold: this.threshold,
        },
      );

      this.$nextTick(() => {
        if (this.observer) {
          this.observer.observe(this.$el);
          this.$emit('observe', {
            observer: this.observer,
            element: this.$el,
            context: this,
          });
        }
      });
    },

    destroyObserver() {
      if (this.observer) {
        this.observer.disconnect();
        this.observer = null;
        this.$emit('disconnect', {
          element: this.$el,
          context: this,
        });
      }
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
      isVisible: this.visible,
      entry: this.entry,
    });
  },
});

export const Observer: Component = {
  name: 'observer',
  data,
};
