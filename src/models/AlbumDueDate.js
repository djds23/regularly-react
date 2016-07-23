// Model for AlbumDueDate
class AlbumDueDate {
  fetch () {
    const params = {
      method: 'GET'
    }
    const request = new Request('/api/v1/calendar', params)
    fetch(request)
  }
}
