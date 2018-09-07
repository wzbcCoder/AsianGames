import Home from './components/HOME/HOME.vue'
import IntroductionToAthletes from './components/IntroductionToAthletes/IntroductionToAthletes.vue'
import MedalRankings from './components/MedalRankings/MedalRankings.vue'
import NewsArticle from './components/NewsArticle/NewsArticle.vue'
import PhotoPage from './components/PhotoPage/PhotoPage.vue'
import News from './components/News/News.vue'
import Moment1 from './components/chinaMoment/Moment1.vue'
import Moment2 from './components/chinaMoment/Moment2.vue'
import Moment3 from './components/chinaMoment/Moment3.vue'
import Moment4 from './components/chinaMoment/Moment4.vue'
import Moment5 from './components/chinaMoment/Moment5.vue'
import Moment6 from './components/chinaMoment/Moment6.vue'
import Moment7 from './components/chinaMoment/Moment7.vue'
import Moment8 from './components/chinaMoment/Moment8.vue'
import Moment9 from './components/chinaMoment/Moment9.vue'
import Moment10 from './components/chinaMoment/Moment10.vue'
import Moment11 from './components/chinaMoment/Moment11.vue'
import Moment12 from './components/chinaMoment/Moment12.vue'
import Moment13 from './components/chinaMoment/Moment13.vue'
import Moment14 from './components/chinaMoment/Moment14.vue'
import waterfall from './components/waterfall/waterfall.vue'




import StepperLinear1 from './components/IntroductionToAthletes/StepperLinear1'
import StepperLinear2 from './components/IntroductionToAthletes/StepperLinear2'
import StepperLinear3 from './components/IntroductionToAthletes/StepperLinear3'
import StepperLinear4 from './components/IntroductionToAthletes/StepperLinear4'
import StepperLinear5 from './components/IntroductionToAthletes/StepperLinear5'
import StepperLinear6 from './components/IntroductionToAthletes/StepperLinear6'
import StepperLinear7 from './components/IntroductionToAthletes/StepperLinear7'
import StepperLinear8 from './components/IntroductionToAthletes/StepperLinear8'
import StepperLinear9 from './components/IntroductionToAthletes/StepperLinear9'
// sdd


export const routes = [

    {path:'/',name:"HOME",component:Home},
    {path:'/IntroductionToAthletes',name:"IntroductionToAthletes",redirect:'/IntroductionToAthletes/StepperLinear1',component:IntroductionToAthletes,children:[
      {path:'/IntroductionToAthletes/StepperLinear1',name:"StepperLinear1",component:StepperLinear1},
      {path:'/IntroductionToAthletes/StepperLinear2',name:"StepperLinear2",component:StepperLinear2},
      {path:'/IntroductionToAthletes/StepperLinear3',name:"StepperLinear3",component:StepperLinear3},
      {path:'/IntroductionToAthletes/StepperLinear4',name:"StepperLinear4",component:StepperLinear4},
      {path:'/IntroductionToAthletes/StepperLinear5',name:"StepperLinear5",component:StepperLinear5},
      {path:'/IntroductionToAthletes/StepperLinear6',name:"StepperLinear6",component:StepperLinear6},
      {path:'/IntroductionToAthletes/StepperLinear7',name:"StepperLinear7",component:StepperLinear7},
      {path:'/IntroductionToAthletes/StepperLinear8',name:"StepperLinear8",component:StepperLinear8},
      {path:'/IntroductionToAthletes/StepperLinear9',name:"StepperLinear9",component:StepperLinear9},
    
      
    ]},
    {path:'/MedalRankings',name:"MedalRankings",component:MedalRankings},
    {path:'/News',name:"News",component:News},
    {path:'/NewsArticle',name:"NewsArticle",component:NewsArticle},
    {path:'/PhotoPage',name:"PhotoPage",component:PhotoPage},
    {path:'/Moment1',name:"Moment1",component:Moment1},
    {path:'/Moment2',name:"Moment2",component:Moment2},
    {path:'/Moment3',name:"Moment3",component:Moment3},
    {path:'/Moment4',name:"Moment4",component:Moment4},
    {path:'/Moment5',name:"Moment5",component:Moment5},
    {path:'/Moment6',name:"Moment6",component:Moment6},
    {path:'/Moment7',name:"Moment7",component:Moment7},
    {path:'/Moment8',name:"Moment8",component:Moment8},
    {path:'/Moment9',name:"Moment9",component:Moment9},
    {path:'/Moment10',name:"Moment10",component:Moment10},
    {path:'/Moment11',name:"Moment11",component:Moment11},
    {path:'/Moment12',name:"Moment12",component:Moment12},
    {path:'/Moment13',name:"Moment13",component:Moment13},
    {path:'/Moment14',name:"Moment14",component:Moment14},
    // {path:'/Moment15',name:"Moment15",component:Moment15},
    // {path:'/Moment16',name:"Moment16",component:Moment16},
    {path:'*',redirect:'/'}

  ]