import Home from '../pages/Home'
import Category from '../pages/Category'
import Shop from '../pages/Shop/index.vue'
import Find from '../pages/Find'
import Person from '../pages/Person'


export default [
  {
    path:'/home',
    component:Home,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/category',
    component:Category,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/find',
    component:Find,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/shop',
    component:Shop,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/person',
    component:Person
  },
  {
    path:'/',
    redirect:'/home'
  }
]