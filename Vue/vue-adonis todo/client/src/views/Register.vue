<template>
    <div class="minHeight">
        <v-container>
            <v-layout row wrap>
        <v-flex xs6 offset-xs3>
            <h1>Register</h1>
             <v-text-field label="Email" placeholder="Email" :value="registerEmail" @input="setRegisterEmail"></v-text-field>
            <v-text-field label="Password" placeholder="Password" type="password" :value="registerPassword" @input="setRegisterPassword">
            </v-text-field>
            <v-text-field label="Password Confirmed" placeholder="Password Confirmed" type="password" :value="registerConfirmPassword" @input="setRegisterConfirmPassword">
            </v-text-field>
            <v-btn 
              color="green" 
              dark
              class="mt-3" 
              @click="register"
              :disabled="!isValidToRegister"
              id="registerBtn"
            >
                <v-icon class="mr-2 regIcon">mdi-account-circle</v-icon>
                Register
            </v-btn>
            
            <v-alert type="error" class="mt-5" v-if="registerError">{{registerError}}</v-alert>
        </v-flex>
        </v-layout>
        </v-container>
    </div>
    
</template>

<script>
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex';
export default{
    name: "Register",
    computed: {
        ...mapState('authentication', [
            'registerEmail',
            'registerPassword',
            'registerError',
            'registerConfirmPassword'
        ]),
        ...mapGetters('authentication',['isValidToRegister'])
    },
    methods: {
        ...mapMutations('authentication', [
            'setRegisterEmail', 'setRegisterPassword', 'setRegisterConfirmPassword'
        ]),
        ...mapActions('authentication',[
            'register',
        ]),
    },
}
</script>

<style scoped>
    .theme--dark.v-btn.v-btn--disabled.v-btn--has-bg{
        background-color:lightgreen!important;
        color:white!important;
        opacity: 0.8!important;
        cursor: not-allowed;
        pointer-events: all !important;
    }
    .theme--dark.v-btn.v-btn--disabled.v-btn--has-bg .regIcon{
        color: white!important;
        opacity:0.8!important;
    }
</style>