import firebase from "~/firebase";

const db = firebase.ref("/cities");

class CityDataService {
  getAll() {
    return db;
  }

  create(data) {
    return db.push(data);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }
}

export default new CityDataService();
