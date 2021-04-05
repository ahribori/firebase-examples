import firebase from "../lib/firebase"

class UserRepository {
  db = firebase.firestore()

  findAll() {
    return this.db.collection("users").get()
  }
}

export default new UserRepository()
