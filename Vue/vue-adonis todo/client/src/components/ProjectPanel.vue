<template>
  <Panel title="Projects">
      <v-container>
      <v-layout row wrap>
          <v-flex xs6>
              <v-text-field
               placeholder="My project name is ..."
               :value="newProjectName"
               @input="setNewProjectName">
              </v-text-field>
          </v-flex>
          <v-flex xs4 class="mt-3 ms-4">
            <v-btn color="green" dark @click="createProject">
                <v-icon class="me-2">
                    mdi-plus-circle
                </v-icon>
                <span class="tabContent">Create</span>
            </v-btn>
          </v-flex>
          <v-flex >
            <template>
            <v-simple-table>
                <template v-slot:default>
                    <thead>
                        <tr>
                        <th class="text-center">
                            Project Names
                        </th>
                        <th class="text-center">
                            Actions
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                        v-for="project in projects"
                        :key="project.title"
                        >
                        <td><v-btn id="no-background-hover">{{ project.title }}</v-btn></td>
                        <td>
                            <v-btn id="no-background-hover" class="text-success"> <v-icon>mdi-pencil</v-icon></v-btn>
                            <v-btn id="no-background-hover" class="text-danger"> <v-icon>mdi-eraser</v-icon></v-btn>
                        </td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
            </template>
          </v-flex>
      </v-layout>
      </v-container>
  </Panel>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex';
export default {
    computed:{
        ...mapState('project',[
            'newProjectName', 'projects'
        ])
    },
    mounted() {
        this.fetchProjects()
    },
    methods:{
        ...mapMutations('project',[
            'setNewProjectName'
        ]),
        ...mapActions('project',[
            'createProject',
            'fetchProjects'
        ])
    }
}
</script>

<style scoped>
    .container{
        margin:auto;
        width: 90%;
    }
</style>