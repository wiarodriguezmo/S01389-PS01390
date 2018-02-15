<template>
  <div id="app">
    <table class="tabs-component ct-tabs">
      <tbody>
        <tr class="tabs-head-list with-counter">
          <Menu
            v-for="(menu,n) in menus"
            :menu="menu"
            :num="n"
            :key="menu['.key']">
          </Menu>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Menu from './components/Menu'
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
let menusResponse = db.ref('itemManager')

export default {
  name: 'App',
  firebase: {
    menus: menusResponse
  },
  components: {
    Menu
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
