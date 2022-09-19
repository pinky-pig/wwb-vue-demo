import { Router } from "vue-router";

export function createRouterGuard(router: Router) {
  router.beforeEach(async (to: any) => {
    if (to.meta.hasAuth) {
      console.log('需要校验');
    }else{
      console.log('不需要校验');
    }
  })
  router.afterEach((to: any) => {
    console.log('下一个路由');
  })
}
