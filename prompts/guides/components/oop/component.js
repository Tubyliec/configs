class Component {
  #element = null;
  #listeners = new Map();
  #children = new Map();

  constructor({ tag, classes, text, attrs, id } = {}) {
    this.#element = document.createElement(tag);
    if (id) this.setId(id);
    if (classes) this.applyClasses(classes);
    if (text) this.setText(text);
    if (attrs) this.setAttributes(attrs);
  }

  getElement() {
    return this.#element;
  }

  destroyElement() {
    this.destroyChildren();
    this.removeAllListeners();
    this.#element.remove();
    this.#element = null;
  }

  setId(id) {
    this.#element.id = id;
    return this;
  }

  getId() {
    return this.#element.id;
  }

  applyClasses(classes) {
    const classArray = Array.isArray(classes) ? classes : [classes];
    this.#element.classList.add(...classArray);
    return this;
  }

  addClass(className) {
    this.#element.classList.add(className);
    return this;
  }

  removeClass(className) {
    this.#element.classList.remove(className);
    return this;
  }

  toggleClass(className, force) {
    this.#element.classList.toggle(className, force);
    return this;
  }

  hasClass(className) {
    return this.#element.classList.contains(className);
  }

  setText(text) {
    this.#element.textContent = text;
    return this;
  }

  setAttribute(name, value) {
    this.#element.setAttribute(name, value);
    return this;
  }

  setAttributes(attrs) {
    Object.entries(attrs).forEach(([key, value]) =>
      this.setAttribute(key, value),
    );
    return this;
  }

  removeAttribute(name) {
    this.#element.removeAttribute(name);
    return this;
  }

  addListener(event, listener, options = false) {
    this.#element.addEventListener(event, listener, options);
    if (!this.#listeners.has(event)) {
      this.#listeners.set(event, new Set());
    }
    this.#listeners.get(event).add({ listener, options });
    return this;
  }

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

  removeAllListeners() {
    this.#listeners.forEach((listeners, event) => {
      listeners.forEach(({ listener, options }) => {
        this.#element.removeEventListener(event, listener, options);
      });
    });
    this.#listeners.clear();
    return this;
  }

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

  getChild(name) {
    return this.#children.get(name) ?? null;
  }

  hasChild(name) {
    return this.#children.has(name);
  }

  removeChild(name) {
    const child = this.#children.get(name);
    if (!child) return this;
    child.destroyElement();
    this.#children.delete(name);
    return this;
  }

  getChildren() {
    return Array.from(this.#children.values());
  }

  destroyChildren() {
    this.#children.forEach((child) => {
      child.destroyElement();
    });
    this.#children.clear();
  }
}