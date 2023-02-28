import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
// import Hello from '../components/HelloWorld.vue'
import Hello from '../views/Hello.vue'
import Login from '../views/Login.vue'
import Reset from '../views/Auth/Reset.vue'
import Projects from '../views/Projects.vue'
import Test from '../views/test.vue'
import SetNewPassword from '../views/Auth/SetNewPassword'

Vue.use(VueRouter)

const routes = [{
            path: '/',
            name: 'Home',
            component: Home,
            redirect: { path: 'hello' },

            children: [{
                    path: 'hello',
                    name: 'Hello',
                    component: Hello,
                },
                {
                    path: '/register',
                    name: 'Register',
                    component: Register,
                },
                {
                    path: '/login',
                    name: 'Login',
                    component: Login,
                },
                {
                    path: '/forget-password',
                    name: 'Reset',
                    component: Reset,
                },
                {
                    path: '/reset-password',
                    name: 'SetNewPassword',
                    component: SetNewPassword,
                }
            ],
        },
        {
            path: '/projects',
            name: 'Projects',
            component: Projects,
        },
        {
            path: '/test',
            name: 'test',
            component: Test,
        }
    ]
    // const routes = [{
    //         path: '/',
    //         name: 'Home',
    //         component: Home,
    //     }, 
    //     {
    //         path: 'hello',
    //         name: 'Hello',
    //         component: Hello,
    //     },
    //     {
    //         path: '/register',
    //         name: 'Register',
    //         component: Register,
    //     }
    // ]

const router = new VueRouter({
    routes
})

export default router