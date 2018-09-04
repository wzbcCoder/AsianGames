import Home from './components/HOME/HOME.vue'
import IntroductionToAthletes from './components/IntroductionToAthletes/IntroductionToAthletes.vue'
import MedalRankings from './components/MedalRankings/MedalRankings.vue'
import NewsArticle from './components/NewsArticle/NewsArticle.vue'
import News from './components/News/News.vue'



export const routes = [

    {path:'/',name:"HOME",component:Home},
    {path:'/IntroductionToAthletes',name:"IntroductionToAthletes",component:IntroductionToAthletes},
    {path:'/MedalRankings',name:"MedalRankings",component:MedalRankings},
    {path:'/News',name:"News",component:News},
    {path:'/NewsArticle',name:"NewsArticle",component:NewsArticle}


  ]