import { EventEmitter } from 'events';

export default class BaseStore extends EventEmitter {

  constructor(...args) {
    super(...args);
    this.data = new Set([]);
  }

  setAll(users) {
    this.data = new Set(users);
    this.emitChange();
  }

  getAll() {
    return Array.from(this.data);
  }

  set(item) {
    if (!this.data.has(item)) {
      this.data.add(item);
      this.emitChange();
    }
  }

  remove(user) {
    this.data.delete(user);
    this.emitChange();
  }
}
