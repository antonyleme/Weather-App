import firebase from "~/firebase";

const db = firebase.ref("/temperature-logs");

class TemperatureLogDataService {
  getAll() {
    return db;
  }

  create(data) {
    return db.push(data);
  }
}

export default new TemperatureLogDataService();
