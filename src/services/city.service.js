import firebase from "~/firebase";

const db = firebase.ref("/cities");

function getAll() {
  return db.get;
}

function create(data) {
  return db.push(data);
}

export default db;
