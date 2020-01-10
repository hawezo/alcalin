export type UIListener = (event: UIEvent) => any;

/**
 * Checks if a click has occured outside of an element.
 *
 * @param element The element to check for.
 * @param event The mouse event.
 */
export const hasClickedAway = (
  element: HTMLElement | Element | Document,
  { target }: MouseEvent,
): boolean => {
  return !element.contains(target ? (target as Node) : null);
};

/**
 * Updates the document listeners.
 *
 * @param listener Listener method.
 * @param shouldListen Indicates if the listener should be applied or removed.
 */
export const updateListeners = (
  listener: UIListener,
  shouldListen: boolean,
): void => {
  if (shouldListen) {
    document.addEventListener('click', listener);
    document.addEventListener('keydown', listener);
  } else {
    document.removeEventListener('click', listener);
    document.removeEventListener('keydown', listener);
  }
};
