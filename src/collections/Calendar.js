import BaseCollection from './BaseCollection.js';

class Calendar extends BaseCollection {
  fetch({resetStore, from, to}) {
    let uri = this.getURI(from, to)
    let request = new Request(uri)
    if (resetStore) {
      this._collection = [];
    }
    return this.fetchAndStore(request);
  }

  getURI(from, to) {
    return `${this.endpoint}?from=${from.format()}&to=${to.format()}`
  }

}

export default Calendar;
