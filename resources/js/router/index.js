import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Counselor from '../views/Counselor.vue'
import FamilyBackground from '../views/FamilyBackground.vue'
import Legacy from '../views/Legacy.vue'
import NewsReleases from '../views/NewsReleases.vue'
import Speeches from '../views/Speeches.vue'
import Videos from '../views/Videos.vue'
import LiveStream from '../views/LiveStream.vue'
import Vlogs from '../views/Vlogs.vue'
import WeeklyRecap from '../views/WeeklyRecap.vue'
import Contact from '../views/Contact.vue'
import DocumentManagement from '../views/DocumentManagement.vue'
import AdminDashboard from '../views/AdminDashboard.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    children: [
      {
        path: 'counselor',
        name: 'Counselor',
        component: Counselor
      },
      {
        path: 'family-background',
        name: 'FamilyBackground',
        component: FamilyBackground
      }
    ]
  },
  {
    path: '/legacy',
    name: 'Legacy',
    component: Legacy
  },
  {
    path: '/news',
    name: 'News',
    redirect: '/news/releases',
    children: [
      {
        path: 'releases',
        name: 'NewsReleases',
        component: NewsReleases
      },
      {
        path: 'speeches',
        name: 'Speeches',
        component: Speeches
      },
      {
        path: 'videos',
        name: 'Videos',
        component: Videos,
        children: [
          {
            path: 'live-stream',
            name: 'LiveStream',
            component: LiveStream
          },
          {
            path: 'vlogs',
            name: 'Vlogs',
            component: Vlogs
          },
          {
            path: 'weekly-recap',
            name: 'WeeklyRecap',
            component: WeeklyRecap
          }
        ]
      }
    ]
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/documents',
    name: 'DocumentManagement',
    component: DocumentManagement
  },
  {
    path: '/admin',
    name: 'AdminDashboard',
    component: AdminDashboard
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
