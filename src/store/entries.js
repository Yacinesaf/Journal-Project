import { EventEmitter } from 'events';
import { getEntries } from '../services/apiEndpoints'

class EntriesStore extends EventEmitter {
  constructor() {
    super()
    this.entries = [
    ];
  }
  createEntry() {
    this.entries.push({
      body : 'ssssss',
      date : 24,
      title : 'yes',
      userId : Date.now()
    })
    this.emit('change')
  }
  
  getAll() {
    return this.entries
  }
  // fetchEntries() {
  //   console.log(this)
  // }

}
const entriesStore = new EntriesStore();
export default  entriesStore;