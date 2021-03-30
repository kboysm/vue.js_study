import Details from '../views/Details.vue'
const routes = [
    {
        path: '/posts/:id',
        name: 'Details',
        component: Details,
        props:true
    }
]

export default routes