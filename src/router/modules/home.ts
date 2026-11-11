interface Children {
  path: string
  name: string
  component: () => void
  meta: {
    text: string
    icon: string
  }
}

export default {
  path: '/',
  name: 'index',
  component: () => import('@/views/HomeView/IndexView.vue'),
  children: [
    {
      path: '',
      name: 'home',
      component: () => import('@/views/HomeView/HomeView.vue'),
      meta: {
        text: '首页',
        icon: 'House',
      },
    },
    {
      path: 'calendar',
      name: 'calendar',
      component: () => import('@/views/CalendarView/CalendarView.vue'),
      meta: {
        text: '日历',
        icon: 'Calendar',
      },
    },
    {
      path: 'chapter',
      name: 'chapter',
      component: () => import('@/views/ChapterView/ChapterView.vue'),
      meta: {
        text: '篇章',
        icon: 'Notebook',
      },
    },
    {
      path: 'mine',
      name: 'mine',
      component: () => import('@/views/MineView/MineView.vue'),
      meta: {
        text: '我的',
        icon: 'User',
      },
    },
    {
      path: 'about',
      name: 'about',
      component: () => import('@/views/AboutView/AboutView.vue'),
      meta: {
        text: '关于',
        icon: 'SwitchFilled',
      },
    },
  ] satisfies Children[],
}
