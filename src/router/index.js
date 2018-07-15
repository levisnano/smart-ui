import Vue from 'vue'
import Router from 'vue-router'
import Info from '@/components/Info'
import Components from '@/components/Components'
import Templates from '@/components/Templates'
import Gis from '@/components/Gis'
import Topo from '@/components/Topo'

Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/',
		name: 'Info',
		component: Info
    },
    {
		path: '/components',
		name: 'Components',
		component: Components
    },
    {
		path: '/templates',
		name: 'Templates',
		component: Templates
    },
    {
		path: '/gis',
		name: 'Gis',
		component: Gis
    },
    {
		path: '/topo',
		name: 'Topo',
		component: Topo
    }
  ]
})
