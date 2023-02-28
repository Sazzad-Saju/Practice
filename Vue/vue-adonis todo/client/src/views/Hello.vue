<template>
  <v-container class="mt-5">
    <v-row class="text-center">
      

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Vue-Adonis<br> Fundamentals
        </h1>

        <p class="subheading font-weight-regular" style="text-align:center">
          <b>Test</b>: Pass value by url in get request
          <a class="subheading">http://localhost:8080/api/passbyurl/{{paramOne}}/{{paramTwo}}</a>
          <br>
          <v-row class="justify-center">
            <v-col
              cols="12"
              sm="6"
              md="3"
              >
              <v-text-field
                label="Regular"
                @input="updateParamOne"
                :value="paramOne"
              ></v-text-field>
            </v-col>
            <v-col
             cols="12"
             sm="6"
             md="3"
            >
              <v-text-field
                label="Regular"
                @input="updateParamTwo"
                :value="paramTwo"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="justify-center">
            <v-col
              cols="12"
              sm="6"
              md="3">
              <v-btn
                rounded
                color="primary"
                dark
                @click="passbyurl()"
              >
                Pass By Value
              </v-btn>
            </v-col>
          </v-row>
          <v-row class="justify-center" v-if="urlAlert!=false">
            <v-col
              cols="12"
              sm="6"
              md="6">
              <v-alert
                dense
                type="info"
              >
                Successfully passed by url with the value of <strong>{{returnbyurl}}</strong>
              </v-alert>
            </v-col>
          </v-row>
          <v-row class="justify-center" v-if="urlAlertError!=null">
            <v-col
              cols="12"
              sm="6"
              md="6">
              <v-alert
                dense
                type="error"
              >
                {{urlAlertError}}
              </v-alert>
            </v-col>
          </v-row>
          
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          What's next?
        </h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Important Links
        </h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Ecosystem
        </h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex';
  export default {
    name: 'HelloWorld',

    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
    computed:{
      ...mapState('project',['paramOne', 'paramTwo', 'urlAlert', 'returnbyurl','urlAlertError'])
    },
    methods:{
      
      ...mapMutations('project',['updateParamOne','updateParamTwo']),
      ...mapActions('project',['passbyurl'])
    }
  }
</script>
