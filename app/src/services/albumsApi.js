const API_URL = '/albums';

export default {
  getAll() {
    return fetch(API_URL)
      .then(res => res.json());
  },
  addAlbum(album) {
    return fetch('/albums', {
      method: 'POST',
      body: JSON.stringify(album),
      headers: new Headers({
        'Content-Type': 'application/json',
      })
    })
      .then(res => Promise.all([res.ok, res.json()]))
      .then(([ok, json]) => {
        if (!ok) throw new Error(json);

        return json;
      });
  }
};