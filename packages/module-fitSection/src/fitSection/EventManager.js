class EventManager {
  constructor(target) {
    this.events = [];
    this._target = target;
  }

  /**
   * bind event
   * @param type{string} - event type
   * @param listener{function} - event listener
   * @param target{object} - target to bind
   */
  on(type, listener, target) {
    const t = target || this._target;
    this.events.push({
      type,
      listener,
      target: t
    });

    t.addEventListener(type, listener, false);
  }

  /**
   * unbind event
   * @param type{string} - event type
   * @param listener{function} - event listener
   * @param target{object} - target to unbind
   */
  off(type, listener, target) {
    const t = target || this._target;
    t.removeEventListener(type, listener, false);
  }

  /**
   * unbind all events
   */
  offAll() {
    this.events.forEach(event =>
      this.off(event.type, event.listener, event.target)
    );
    this.events = [];
  }
}

export default EventManager;
