import { createRouter, createWebHistory } from 'vue-router'
import DesignSystem from '../DesignSystem.vue' // 假設你的檔案在這

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: DesignSystem // 暫時把首頁設為 DesignSystem 方便你看
    },
    {
      path: '/design-system',
      name: 'design-system',
      component: DesignSystem
    }
  ]
})

export default router