import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import Community from './views/Community.vue'

export default [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/projects',
        name: 'projects',
        component: Projects
    },
    {
        path: '/community',
        name: 'community',
        component: Community
    }
]