import { defineStore } from 'pinia'
import { ref } from 'vue'

export const NewQuests = defineStore({
    id:'newQuests',
    state:()=>({
      NewMovies:[
        {
          id:1,
          title:"Точка невозврата",
          description:"Перформанс",
          rates:ref(["orange","orange","orange","orange",false]),
          agerestrict:'12',
          reserve:false
        },
        {
          id:2,
          title:"Точка невозврата",
          description:"Перформанс",
          rates:["orange","orange","orange","orange","orange"],
          agerestrict:'16',
          reserve:false
        },
        {
          id:3,
          title:"Точка невозврата",
          description:"Перформанс",
          rates:["orange","orange","orange","orange",false],
          agerestrict:'6',
          reserve:false
        },
        
      ],
    }),
    actions:{
      reserveComingMovie(newMovie){
        this.NewMovies = this.NewMovies.map(comingMovie=>{
          if(comingMovie.id === newMovie.id){
            comingMovie.reserve =! comingMovie.reserve
            console.log('reserved')
          }
          return comingMovie
        })
        localStorage.setItem("comingMovies",JSON.stringify(this.NewMovies))
      },
      setAllCards(cards){
        this.NewMovies = cards
      },
    },
    getters:{
      getAllNewMovies: (state)=>state.NewMovies,
    },
  })