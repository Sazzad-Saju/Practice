<template>
  <div class="minHeight">
    <v-container>
      <v-layout row wrap>
        <v-flex xs6 offset-xs3>
          <h1>Code Verification</h1>
          <small class="text--disabled">In order to reset your password, please provide us with your email address to send a six digit code.</small>
          <v-text-field
            label="Email"
            placeholder="Email"
            type="text"
            @input="sendEmailTo"
          >
          </v-text-field>
          <div>
            <v-btn color="green" dark class="mt-3" @click.prevent="sendCode">
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
import { mapActions, mapMutations } from "vuex";
export default {
  name: "Reset",
  methods: {
    ...mapMutations("authentication", ["sendEmailTo"]),
    ...mapActions("authentication", ["sendCode"]),
  },
};
</script>