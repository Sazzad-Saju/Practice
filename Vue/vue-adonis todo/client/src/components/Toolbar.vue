<template>
    <v-app-bar dense color="green" dark fixed>
      <v-toolbar-title class="mx-5"><v-btn id="no-background-hover" to="/hello">Vue Todo</v-btn></v-toolbar-title>
      <v-toolbar-items>
          <v-btn id="no-background-hover" to="/projects" v-if="isLoggedIn">
           <v-icon class="mr-2">mdi-playlist-check</v-icon>
           <span class="deskContent">Projects</span>
          </v-btn>
        </v-toolbar-items>
      <!-- <v-btn flat class="mx-5">
        <v-icon>mdi-playlist-check</v-icon>
        Projects
      </v-btn> -->

      <v-spacer></v-spacer>
      <v-toolbar-items>
          <v-btn id="no-background-hover" to="/register" v-if="!isLoggedIn">
           <v-icon class="mr-2">mdi-account-box</v-icon>
           <span class="deskContent">Register</span>
          </v-btn>
          <v-btn id="no-background-hover" to="/login" v-if="!isLoggedIn">
           <v-icon class="mr-2">mdi-fingerprint</v-icon>
           <span class="deskContent">Login</span>
          </v-btn>
          <v-btn id="no-background-hover" v-if="isLoggedIn" @click="logout">
           <v-icon class="mr-2">mdi-exit-to-app</v-icon>
           <span class="deskContent">Logout</span>
          </v-btn>
          <v-btn id="no-background-hover">
           <v-icon class="mr-2">mdi-heart</v-icon>
           <span class="deskContent">About</span>
          </v-btn>
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
export default{
  computed:{
    ...mapGetters('authentication',[
      'isLoggedIn',
    ]),
  },
  methods:{
    ...mapActions('authentication',[
      'logout',
    ]),
  },
};
</script>