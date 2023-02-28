<template>
  <div class="minHeight">
    <v-container>
      <v-layout row wrap>
        <v-flex xs6 offset-xs3>
          <h1>Reset Password</h1>
          <small class="text--disabled"
            >Please enter the 6 digit code we've sent to
            <b>{{resetEmail}}</b> </small
          >
          <div>
            <v-text-field
              type="text"
              placeholder="Verification Code"
              required="required"
              :maxlength="codeMax"
              style="width: calc(100% - 50%)"
              counter="6"
              hint="Six digit verification code"
              @input="setResetCode"
            >
            </v-text-field>
            <v-text-field
              label="Password"
              placeholder="Password"
              type="password"
              @input="setResetPassword"
            >
            </v-text-field>
            <v-text-field
              label="Repeat Password"
              placeholder="Repeat Password"
              type="password"
              @input="setResetRepeatPass"
            >
            </v-text-field>
            <v-btn color="green" dark class="mt-3" @click.prevent="changePassword">
              <v-icon class="mr-2">mdi-reply</v-icon>
              Submit
            </v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "Reset",
  data() {
    return {
      codeMax: 6,
    };
  },
  computed:{
    ...mapState('authentication',['resetEmail'])
  },
  methods: {
    ...mapMutations("authentication", ["setResetCode", "setResetPassword", "setResetRepeatPass"]),
    ...mapActions("authentication", ["changePassword"]),
  },
};
</script>