import type { App } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { createRouterGuard } from './guard';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () =>
      import(/* webpackChunkName: "HelloWord" */ '../views/index.vue'),
    name: 'HelloWord',
    meta: { hidden: false, hasAuth: false },
  },
];

export const router = createRouter({
  history: createWebHistory(), // 二级路由 createWebHistory('dist') + vite.config.ts defineConfig({ base:'dist' })
  routes,
});

export async function setupRouter(app: App) {
  app.use(router);
  createRouterGuard(router);
  await router.isReady();
}
