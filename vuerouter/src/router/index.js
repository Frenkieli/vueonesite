import Vue from 'vue'
import VueRouter from 'vue-router'

// 官方元件

import Home from '@/components/HelloWorld';
import page from '@/components/pages/page';
import menu from '@/components/pages/menu';
import child from '@/components/pages/child';
import child2 from '@/components/pages/child2';
import child3 from '@/components/pages/child3';
// 自訂分頁文件

Vue.use(VueRouter);


export default new VueRouter({
  // mode: 'history', //這個要後端搭配
  // linkActiveClass: 'activeasdasdasdasdasdas',
  // 這個可以給這在觸發的link特定的classname
  routes: [
    {
      name: '首頁',   // 名稱
      path: '/index',   // 段硬的虛擬路徑
      component: Home, // 對應的原件
    },
    {
      // name: '分頁',   // 名稱
      path: '/page',   // 段硬的虛擬路徑
      // component: page, // 對應的原件
      components: {
        default: page,
        menu: menu
      },
      children: [
        {
          name: '卡片1',   // 名稱
          path: '',   // 段硬的虛擬路徑
          // 這邊沒給路徑所以父層名稱會被這個吃掉所以父層不給名稱
          component: child, // 對應的原件
        },
        {
          name: '卡片2',   // 名稱
          path: 'child2',   // 段硬的虛擬路徑
          component: child2, // 對應的原件
        },
        {
          name: '卡片3',   // 名稱
          path: 'child3',   // 段硬的虛擬路徑
          component: child3, // 對應的原件
        },
        // {
        //   name: '卡片 3',   // 名稱
        //   path: 'child/:id',   // 段硬的虛擬路徑
        //   component: child3, // 對應的原件
        // },
      ]
    },
  ]
});