class BaseCollection {

  /**
   * @param endpoint {string} endpoint to fetch collection
   * @param model {BaseModel} a model to construct collection
   * @param format {Function} a function to take json, and format it for concatenation
   */
  constructor({endpoint, model, format}){
    this.endpoint = endpoint
    this.fetchCount = 0
    this._collection = []
    this._model = model
    this._format = format
  }

  collection() {
    return this._collection
  }


  modelify(props) {
    return new this._model(props)
  }

  fetchAndStore(request) {
    return fetch(request).then((response) => {
      this.fetchCount += 1
      return response.json().then((json) => {
        let formattedJson = this._format(json)
        this._collection = this._collection.concat(formattedJson)
        this._collection = this._collection.map(props => this.modelify(props))
      }).then(() => this.promisedCalendar())
    })
  }

  promisedCalendar() {
    let that = this // not sure if I'm supposed to bind for promise callbacks
    return new Promise(function (resolve, reject) {
      resolve(that)
    })
  }
}

export default BaseCollection;
