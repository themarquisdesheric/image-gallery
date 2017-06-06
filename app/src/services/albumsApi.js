const API_URL = '/api/albums';

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
  addImage(image, albumId) {
    return fetch(`${API_URL}/${albumId}/images`, {
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
  },
  removeImage(imageId, albumId) {
    return fetch(`${API_URL}/${albumId}/images/${imageId}`, {
      method: 'DELETE',
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