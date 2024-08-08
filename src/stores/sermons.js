import { defineStore } from 'pinia'
import { ref } from 'vue'

export const AllSermons = defineStore({
  id:'AllSermons',
  state:()=>({
    AllSermons:[
      {
        id:1,
        title:'100 RANDOM ACTS OF KINDNESS',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        dateDay:'20',
        dateMonth:'JULY',
      },
      {
        id:2,
        title:'FAITH IS A PROCESS NOT A DESTINATION',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        dateDay:'20',
        dateMonth:'JULY',
      },
      {
        id:3,
        title:'THERE IS NOTHING IMPOSSIBLE',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        dateDay:'20',
        dateMonth:'JULY',

      },
      {
        id:4,
        title:'WATCH AND LISTEN TO OUR SERMONS',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        dateDay:'20',
        dateMonth:'JULY',
      },
    ]
  }),
  actions:{
  },
  getters:{
    getAllSermons: (state)=>state.AllSermons,
  },
})


