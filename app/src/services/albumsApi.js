const API_URL = '/albums';

export default {
  getAll() {
    return fetch(API_URL)
      .then(res => res.json());
  },
  getAlbum(id) {
    return fetch(`${API_URL}/${id}`)
      .then(res => Promise.all([res.ok, res.json()]))
      .then(([ok, json]) => {
        if (!ok) throw new Error(json);

        return json;
      });
  },

  addAlbum(album) {
    console.log('albummm', album);
    return fetch(API_URL, {
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
  },
  removeAlbum(id) {
    return fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({id}),
      headers: new Headers({
        'Content-Type': 'application/json',
      })
    })
      .then(res => Promise.all([res.ok, res.json()]))
      .then(([ok, json]) => {
        if (!ok) throw new Error(json);

        return json;
      });
  },
  addImage(image) {
    console.log('image from API', image);
    return fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(image),
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