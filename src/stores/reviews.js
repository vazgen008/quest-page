import { defineStore } from 'pinia'
// import { ref } from 'vue'

export const reviews = defineStore({
    id:'Reviews',
    state:()=>({
      PeoplesReviews:[
        {
          name:'Сергей',
          completedQuests:2,
          description:`
          Клевый квест. Очень понравился. Много всяких интересных заданий. 
          Мы довольны! Очередной квест,
          который сделан очень качественно. Клаустрофобия, вот это я понимаю, уровень) спасибо! Персонал клевый!
          `,
          reviewFor:'Перекресток времени',
          rate:5
        },
        {
          name:'Ирина',
          completedQuests:2,
          description:`
          Очень понравилось. Интересные задания. Спасибо.
          `,
          reviewFor:'Перекресток времени',
          rate:5
        },
        {
          name:'Константин',
          completedQuests:5,
          description:`
          Очень интересный, отличные загадки и сюжет в целом! Были на 
          квесте впервые, справились на ура! Спасибо организатору Сергею, всё на высоте!
          `,
          reviewFor:'Перекресток времени',
          rate:5
        },
        {
          name:'Юрий',
          completedQuests:1,
          description:`
          Чудесный квест! Мы остались в восторге! Спасибо!
          `,
          reviewFor:'Перекресток времени',
          rate:5
        },
        {
          name:'Владимир',
          completedQuests:2,
          description:`
          Всё было супер, загадки очень интересные! 
          Очень классные антураж и атмосфера, рекомендуем посетить данный квест
          `,
          reviewFor:'Перекресток времени',
          rate:5
        },
        {
          name:'Михаил',
          completedQuests:5,
          description:`
          Качественный, нелинейный квест. Хорошие впечатления,
          много загадок, подходит для компании. Спасибо нашему оператору Сергею!
          `,
          reviewFor:'Перекресток времени',
          rate:4
        }
      ],
      getters:{
        getAllQuests: (state)=>state.PeoplesReviews,
      }
    })
  })