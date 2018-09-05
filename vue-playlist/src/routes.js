import Home from './components/HOME/HOME.vue'
import IntroductionToAthletes from './components/IntroductionToAthletes/IntroductionToAthletes.vue'
import MedalRankings from './components/MedalRankings/MedalRankings.vue'
import NewsArticle from './components/NewsArticle/NewsArticle.vue'
import News from './components/News/News.vue'
import Hero from './components/HOME/HERO/Hero.vue'

import Normal from './components/IntroductionToAthletes/Normal'

export const routes = [

    {path:'/',name:"HOME",component:Home},
    {path:'/IntroductionToAthletes',name:"IntroductionToAthletes",redirect:'/IntroductionToAthletes/Normal',component:IntroductionToAthletes,children:[
      {path:'/IntroductionToAthletes/Normal',name:"Normal",component:Normal}
    ]},
    {path:'/MedalRankings',name:"MedalRankings",component:MedalRankings},
    {path:'/News',name:"News",component:News},
    {path:'/NewsArticle',name:"NewsArticle",component:NewsArticle},
    {path:'*',redirect:'/'}

  ]