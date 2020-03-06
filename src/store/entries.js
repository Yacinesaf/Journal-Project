import { EventEmitter } from 'events';
import { getEntries } from '../services/apiEndpoints'

class EntriesStore extends EventEmitter {
  constructor() {
    super()
    this.entries = [];
  }
  getAll() {
    console.log(this)
    return this.entries
  }
  fetchEntries() {
    console.log(this)
  }
}

export default new EntriesStore();