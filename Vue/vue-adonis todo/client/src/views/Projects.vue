<template>
    <div class="minHeight2">
        <div class="text-center topmargin">
            <div class="container d-flex justify-content-center">
                <div class="row force-center">
                    <div class="col-sm-12 col-md-5 col-lg-5 col-xl-5">
                        <ProjectPanel></ProjectPanel>
                    </div>
                    <div class="col-sm-12 col-md-2 col-lg-2 col-xl-2">
                        <v-img
                          :src="require('../assets/logo.svg')"
                          class="mt-3 fix-img rotate"
                          contain
                          height="140"
                        />
                    </div>
                    <div class="col-sm-12 col-md-5 col-lg-5 col-xl-5">
                        <Panel title="Tasks"></Panel>
                    </div>
                </div>
            </div>
        </div>
      <!-- <router-view/> -->
    </div>

</template>

<script>
import Panel from "../components/Panel.vue";
import ProjectPanel from "../components/ProjectPanel.vue";
import router from "../router";
import { mapGetters } from "vuex";
export default{
    components: { Panel, ProjectPanel },
    mounted(){
        if(!this.isLoggedIn){
            return router.push('/login');
        }
    },
    computed: {
        ...mapGetters('authentication',[
            'isLoggedIn' 
        ])
    }
}
</script>

<style scoped>
    
    @media only screen and (min-width: 952px) {
     .rotate{
        transform: rotate(-90deg);
    }
     /* .rotate:hover {
    transition: .5s;
    transform: rotate(-90deg);
    color: white;
} */
    }
</style>
