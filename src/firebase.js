/* eslint-disable no-undef */
// Import the functions you need from the SDKs you need
// eslint-disable-next-line quotes
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"
import { onUnmounted } from 'vue'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // eslint-disable-next-line quotes
  apiKey: "AIzaSyDH4qCXT4LZecgfnbi7diA9aj2X642BFvA",
  // eslint-disable-next-line quotes
  authDomain: "crud-vue-f7640.firebaseapp.com",
  // eslint-disable-next-line quotes
  projectId: "crud-vue-f7640",
  // eslint-disable-next-line quotes
  storageBucket: "crud-vue-f7640.appspot.com",
  // eslint-disable-next-line quotes
  messagingSenderId: "924173414325",
  // eslint-disable-next-line quotes
  appId: "1:924173414325:web:ca3d0b365beb29fa9073fc"
}

// Initialize Firebase
// eslint-disable-next-line no-unused-vars, eol-last
const app = initializeApp(firebaseConfig)
// eslint-disable-next-line eol-last, no-unused-vars
const db = app.firestore()
// eslint-disable-next-line no-unused-vars, eol-last
const userCollection = db.collection(users)
export const createuser = user => {
// eslint-disable-next-line indent
// eslint-disable-next-line indent
    return userCollection.add(user)
// eslint-disable-next-line eol-last
}
export const getUser = async id => {
  // eslint-disable-next-line indent
    // eslint-disable-next-line indent
    // eslint-disable-next-line indent
    const user = await userCollection.doc(id).get()
  // eslint-disable-next-line indent
    return user.exists ? user.data() : null
// eslint-disable-next-line eol-last
}
export const updateUser = (id, user) => {
  return userCollection.doc(id).update(user)
}

export const deleteUser = id => {
  return userCollection.doc(id).delete()
}

export const useLoadUsers = () => {
  const users = ref([])
  userCollection.onSnapshot(snapshot => {
    users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return users
}
