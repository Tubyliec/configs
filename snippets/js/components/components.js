class Component {
  #element = null;
  #listeners = new Map();
  #children = new Map();

  /**
   * @param {Object} options
   * @param {string} options.tag
   * @param {string|string[]} [options.classes]
   * @param {string} [options.text]
   * @param {Object} [options.attrs]
   * @param {string} [options.id]
   */
  constructor({ tag, classes, text, attrs, id } = {}) {
    this.#element = document.createElement(tag);
    if (id) this.setId(id);
    if (classes) this.applyClasses(classes);
    if (text) this.setText(text);
    if (attrs) this.setAttributes(attrs);
  }

  /* ================= Element management ================= */

  /** @returns {HTMLElement} */
  getElement() {
    return this.#element;
  }

  /** @returns {void} */
  destroyElement() {
    this.destroyChildren();
    this.removeAllListeners();
    this.#element.remove();
    this.#element = null;
  }

  /* ================= ID ================= */

  /**
   * @param {string} id
   * @returns {Component}
   */
  setId(id) {
    this.#element.id = id;
    return this;
  }

  /** @returns {string} */
  getId() {
    return this.#element.id;
  }

  /* ================= Classes ================= */

  /**
   * @param {string|string[]} classes
   * @returns {Component}
   */
  applyClasses(classes) {
    const classArray = Array.isArray(classes) ? classes : [classes];
    this.#element.classList.add(...classArray);
    return this;
  }

  /**
   * @param {string} className
   * @returns {Component}
   */
  addClass(className) {
    this.#element.classList.add(className);
    return this;
  }

  /**
   * @param {string} className
   * @returns {Component}
   */
  removeClass(className) {
    this.#element.classList.remove(className);
    return this;
  }

  /**
   * @param {string} className
   * @param {boolean} [force]
   * @returns {Component}
   */
  toggleClass(className, force) {
    this.#element.classList.toggle(className, force);
    return this;
  }

  /**
   * @param {string} className
   * @returns {boolean}
   */
  hasClass(className) {
    return this.#element.classList.contains(className);
  }

  /* ================= Text ================= */

  /**
   * @param {string} text
   * @returns {Component}
   */
  setText(text) {
    this.#element.textContent = text;
    return this;
  }

  /* ================= Attributes ================= */

  /**
   * @param {string} name
   * @param {string} value
   * @returns {Component}
   */
  setAttribute(name, value) {
    this.#element.setAttribute(name, value);
    return this;
  }

  /**
   * @param {Object} attrs
   * @returns {Component}
   */
  setAttributes(attrs) {
    Object.entries(attrs).forEach(([key, value]) =>
      this.setAttribute(key, value),
    );
    return this;
  }

  /**
   * @param {string} name
   * @returns {Component}
   */
  removeAttribute(name) {
    this.#element.removeAttribute(name);
    return this;
  }

  /* ================= Events ================= */

  /**
   * @param {string} event
   * @param {Function} listener
   * @param {boolean|AddEventListenerOptions} [options=false]
   * @returns {Component}
   */
  addListener(event, listener, options = false) {
    this.#element.addEventListener(event, listener, options);
    if (!this.#listeners.has(event)) {
      this.#listeners.set(event, new Set());
    }
    this.#listeners.get(event).add({ listener, options });
    return this;
  }

  /**
   * @param {string} event
   * @param {Function} listener
   * @param {boolean|EventListenerOptions} [options=false]
   * @returns {Component}
   */
  removeListener(event, listener, options = false) {
    const listeners = this.#listeners.get(event);
    if (!listeners) return this;
    for (let l of listeners) {
      if (l.listener === listener && l.options === options) {
        this.#element.removeEventListener(event, listener, options);
        listeners.delete(l);
        break;
      }
    }
    if (listeners.size === 0) this.#listeners.delete(event);
    return this;
  }

  /** @returns {Component} */
  removeAllListeners() {
    this.#listeners.forEach((listeners, event) => {
      listeners.forEach(({ listener, options }) => {
        this.#element.removeEventListener(event, listener, options);
      });
    });
    this.#listeners.clear();
    return this;
  }

  /* ================= Children ================= */

  /**
   * @param {string} name
   * @param {Component} child
   * @returns {Component}
   */
  appendChild(name, child) {
    if (!(child instanceof Component)) {
      throw new TypeError("Child must be an instance of Component");
    }
    if (this.#children.has(name)) {
      this.removeChild(name);
    }
    this.#children.set(name, child);
    this.#element.append(child.getElement());
    return this;
  }

  /**
   * @param {Object<string, Component>} children
   * @returns {Component}
   */
  appendChildren(children) {
    const frag = document.createDocumentFragment();
    Object.entries(children).forEach(([name, child]) => {
      if (!(child instanceof Component)) {
        throw new TypeError("Child must be an instance of Component");
      }
      if (this.#children.has(name)) {
        this.removeChild(name);
      }
      this.#children.set(name, child);
      frag.append(child.getElement());
    });
    this.#element.append(frag);
    return this;
  }

  /**
   * @param {string} name
   * @returns {Component|null}
   */
  getChild(name) {
    return this.#children.get(name) ?? null;
  }

  /**
   * @param {string} name
   * @returns {boolean}
   */
  hasChild(name) {
    return this.#children.has(name);
  }

  /**
   * @param {string} name
   * @returns {Component}
   */
  removeChild(name) {
    const child = this.#children.get(name);
    if (!child) return this;
    child.destroyElement();
    this.#children.delete(name);
    return this;
  }

  /** @returns {Component[]} */
  getChildren() {
    return Array.from(this.#children.values());
  }

  /** @returns {void} */
  destroyChildren() {
    this.#children.forEach((child) => {
      child.destroyElement();
    });
    this.#children.clear();
  }
}
