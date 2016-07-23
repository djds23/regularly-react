// Model for AlbumDueDate
class AlbumDueDate {
  constructor() {
  }

  fetchData () {
    const params = {
      method: 'GET'
    };
    const request = new Request('/api/v1/calendar', params);
    result = fetch(request).then((response) => {
      return response.json().then((json) => {
        return json
      });
    });
    return result;
  }
}

export default AlbumDueDate;
