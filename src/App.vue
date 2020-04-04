<template>
  <v-app>
    <v-app-bar dense :app="true" color="primary" dark>
      <v-toolbar-title class="headline text-uppercase">
        <v-icon>mdi-qrcode</v-icon>Lecteur QRCode

      </v-toolbar-title>
    </v-app-bar>
     <v-content>
    <v-container fluid>
      <div v-if="bottomNav == 'home'">
      <p>Cette application a pour but de permettre la lecture de QRCode. Elle ne comporte aucun tracker. Sous peu elle sera facilement installable pour être utilisée hors-ligne !</p>
      </div>
<div v-if="bottomNav == 'read'">
  <qrcode-stream @decode="onDecode"></qrcode-stream>

</div>
<div v-if="bottomNav == 'other'">

  <h2>A propos</h2>

  <p>Application développée par <a href="https://twitter.com/__si_mon" target="_blank">Simon</a>.</p>
  <p>Elle utilise les projets open-source <a href="https://vuejs.org/" target="_blank">Vue.js</a> &amp; <a href="http://vuetifyjs.com/" target="_blank">Vuetify</a></p>
  <p>Cette application ne comporte aucun tracker. Code publié sur <a target="_blank" href="https://github.com/guizmo51/qrcodereader">Github</a></p>

</div>
    </v-container>
  </v-content>
    <v-bottom-navigation
    background-color="primary"
    dark
    app
    v-model="bottomNav"
  >
  <v-btn value="home">
    <span>Accueil</span>
    <v-icon>mdi-home</v-icon>
  </v-btn>
    <v-btn value="read">
      <span>Lire</span>
      <v-icon>mdi-qrcode</v-icon>
    </v-btn>
    <v-btn value="other">
      <span>A propos</span>
      <v-icon>mdi-information</v-icon>
    </v-btn>

  </v-bottom-navigation>
 </v-app>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader'
export default {
  name: 'App',
  components: {QrcodeStream},
  data () {
  return {
    bottomNav: 'recent'
  }
},
methods: {
  onDecode(s) {
    alert(s);
  }
}
}
</script>

<style>

</style>
