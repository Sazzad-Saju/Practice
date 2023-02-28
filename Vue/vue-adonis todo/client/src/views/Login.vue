<template>
  <div class="minHeight">
    <v-container>
      <v-layout row wrap>
        <v-flex xs6 offset-xs3>
          <h1>Login</h1>
          <v-text-field
            label="Email"
            placeholder="Email"
            :value="loginEmail"
            @input="setLoginEmail"
          ></v-text-field>
          <v-text-field
            label="Password"
            placeholder="Password"
            type="password"
            :value="loginPassword"
            @input="setLoginPassword"
          >
          </v-text-field>
          <div>
            <v-btn id="no-background-hover" to="/forget-password"
              ><small
                ><a class="linkHover"
                  >Forgot your password? Reset Now!</a
                ></small
              ></v-btn
            >
          </div>
          <v-btn color="green" dark class="mt-3" @click="login">
            <v-icon class="mr-2">mdi-account-circle</v-icon>
            Login
          </v-btn>

          <v-alert type="error" class="mt-5" v-if="loginError">{{
            loginError
          }}</v-alert>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "Login",
  computed: {
    ...mapState("authentication", [
      "loginEmail",
      "loginPassword",
      "loginError",
    ]),
  },
  methods: {
    ...mapMutations("authentication", ["setLoginEmail", "setLoginPassword"]),
    ...mapActions("authentication", ["login"]),
  },
};
</script>

<style scoped>
/* a tag hover effect */
a {
  position: relative;
  color: black !important;
  text-decoration: none;
}
a:before,
a:after {
  content: "";
  position: absolute;
  transition: transform 0.5s ease;
}
a:hover {
  color: #1697f6 !important;
}
.linkHover:before {
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: #1697f6;
  transform: scaleX(0);
}
.linkHover:hover:before {
  transform: scaleX(1);
}
</style>