<template>
  <div id="Admin">
      <Calculate/>
  </div>
</template>

<script>
import Calculate from './components/Calculate'
import Firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyCtAtL-tyIEbL093cHs_B9EMBpJoxsVo0c',
  authDomain: 'sicuaplus.firebaseapp.com',
  databaseURL: 'https://sicuaplus.firebaseio.com',
  projectId: 'sicuaplus',
  storageBucket: 'sicuaplus.appspot.com',
  messagingSenderId: '444116035444'
}
let db = Firebase.initializeApp(config).database()
let menusResponse = db.ref('epide-geografia/itemManager')

export default {
  name: 'Admin',
  firebase: {
    menus: menusResponse
  },
  components: {
    Calculate
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
