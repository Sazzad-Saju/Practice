<template>
  <v-app>
    <v-card
    color="grey lighten-4"
    flat
    tile
  >
    <Toolbar />
    <v-main>
      <router-view/>
    </v-main>
  </v-card>
  </v-app> 
</template>

<script>
import Toolbar from "./components/Toolbar.vue";
export default {
  components:{
    Toolbar,
  },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
#no-background-hover {
   background-color: transparent;
   box-shadow: none;
}
.topmargin{
  margin-top: 5rem;
}
.minHeight{
  min-height: 80vh;
}
.minHeight2{
  min-height: 87.5vh;
}
@media only screen and (max-width: 600px) {
    .deskContent {display:none;}
    /* .phoneContent {display:none;} */
}
@media only screen and (max-width: 768px) {
    .tabContent {display:none;}
    /* .phoneContent {display:none;} */
}
</style>
