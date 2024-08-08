import { defineStore } from 'pinia'
import { ref } from 'vue'

export const AllBlogs = defineStore({
  id:'AllBlogs',
  state:()=>({
    AllBlogs:[
      {
        id:1,
        title:'THE BEST WAY TO INSPIRE PEOPLE',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..',
        author:'By Mathew Johnson',
        date:'Tuesday 13 May, 2018'
      },
      {
        id:2,
        title:'HOW TO SHOW COMPASSION',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..',
        author:'By Mathew Johnson',
        date:'Tuesday 13 May, 2018'
      },
      {
        id:3,
        title:'THE BIBLICAL PURPOSE OF MONEY',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..',
        author:'By Mathew Johnson',
        date:'Tuesday 13 May, 2018'
      },
      {
        id:4,
        title:'WHAT IT MEANS TO BE A DISCIPLE',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..',
        author:'By Mathew Johnson',
        date:'Tuesday 13 May, 2018'
      },
      {
        id:5,
        title:'WHAT IT MEANS TO BELIEVE',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..',
        author:'By Mathew Johnson',
        date:'Tuesday 13 May, 2018'
      },
      {
        id:6,
        title:'THE MODERN CHURCH IN 2022',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..',
        author:'By Mathew Johnson',
        date:'Tuesday 13 May, 2018'
      },
      {
        id:7,
        title:'THE BEST WAY TO INSPIRE PEOPLE',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..',
        author:'By Mathew Johnson',
        date:'Tuesday 13 May, 2018'
      },
    ]
  }),
  actions:{
  },
  getters:{
    getAllPosts: (state)=>state.AllBlogs,
  },
})


