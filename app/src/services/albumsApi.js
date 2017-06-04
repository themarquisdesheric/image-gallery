const API_URL = '/albums';

export default {
  getAll() {
    return fetch(API_URL)
      .then(res => res.json());
  }
};