import { CreateElement } from 'vue';
import { VNode, VNodeData } from 'vue/types/umd';

declare module 'vue/types/vue' {
  interface Vue {
    wrapOptions: WrapOptions;
  }
}

const defaultWrapOptions: WrapOptions = {
  tag: 'div',
  data: {},
};

/**
 * Options for the `wrapSlot` method.
 *
 * @export
 * @interface WrapOptions
 */
export interface WrapOptions {
  /**
   * The tag to use in case a wrap is needed.
   *
   * @type {string}
   * @memberof WrapOptions
   */
  tag?: string;

  /**
   * Data for the wrapped VNode.
   *
   * @type {VNodeData}
   * @memberof WrapOptions
   */
  data?: VNodeData;
}

/**
 * Wraps a slot's nodes if there is more than one.
 *
 * @param vm The Vue instance.
 * @param h The createElement function.
 * @param props Properties to give to the slot.
 * @param slotName The slot to look for.
 * @param wrapOptions Specific options for this method. If vm has a `wrapOptions` property, it will be used instead.
 */
export const wrapSlot = (
  vm: Vue,
  h: CreateElement,
  props: any,
  slotName: string = 'default',
  wrapOptions: WrapOptions = {},
): VNode => {
  const options: WrapOptions = {
    ...defaultWrapOptions,
    ...(vm.wrapOptions || wrapOptions),
  };

  const slot = vm.$scopedSlots[slotName]
    ? vm.$scopedSlots[slotName]!(props)
    : undefined;

  if (slot && slot.length === 1) {
    return slot[0];
  } else {
    return h(options.tag, options.data, [slot]);
  }
};
