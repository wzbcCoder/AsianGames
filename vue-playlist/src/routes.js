import Home from './components/HOME/HOME.vue'
import IntroductionToAthletes from './components/IntroductionToAthletes/IntroductionToAthletes.vue'
import MedalRankings from './components/MedalRankings/MedalRankings.vue'
import NewsArticle from './components/NewsArticle/NewsArticle.vue'
import News from './components/News/News.vue'

//二级路由
import StepperLinear from './components/IntroductionToAthletes/StepperLinear.vue'
import StepperLinear1 from './components/IntroductionToAthletes/StepperLinear1.vue'

export const routes = [

    {path:'/',name:"HOME",component:Home},
    {path:'/IntroductionToAthletes',name:"IntroductionToAthletes",component:IntroductionToAthletes,childern:[
      {path:'/IntroductionToAthletes/StepperLinear',name:'StepperLinear',component:StepperLinear},
      {path:'/IntroductionToAthletes/StepperLinear1',name:'StepperLinear1',component:StepperLinear1}
    ]},
    {path:'/MedalRankings',name:"MedalRankings",component:MedalRankings},
    {path:'/News',name:"News",component:News},
    {path:'/NewsArticle',name:"NewsArticle",component:NewsArticle}


  ]