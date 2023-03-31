import VueRouter from "vue-router";
import HelloWorld from '../components/HelloWorld'
import Link from '../components/Link'
import Son from '../components/son'

export default new VueRouter({
    routes: [
        {
            path: '/hello',
            component: HelloWorld,
            children: [
                {
                    path: 'son',
                    component: Son
                }
            ]
        },
        {
            path: '/link',
            component: Link
        }

    ]
})
