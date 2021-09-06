import Vue from 'vue'
import VueRouter from 'vue-router'
import Todos from '../views/Todos.vue'
import Games from '../views/Games.vue'
import FolderChooser from '../views/FolderChooser.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Todos',
    component: Todos
  },
  {
    path: '/free-games',
    name: 'Free Games',
    component: Games
  },
  {
    path: '/folder-chooser',
    name: 'Folder Chooser',
    component: FolderChooser
  }
]

const router = new VueRouter({
  routes
})

export default router
