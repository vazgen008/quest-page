<template>
  <header>
    <div class="wrapper">
        <div class="logo">
        <i class="fa fa-bars dnone-laptop" aria-hidden="true"></i>
            <RouterLink to="/"><img src="../img/questLogo.png" alt=""></RouterLink>
        </div>
        <div class="flex dnone-resp">
            <li>Игрокам</li>
             <RouterLink to="/aboutQuests"><li>Подбор квеста</li></RouterLink>
            <li>Подарочные карты</li>
        </div>
        <div class="flex contacts dnone-resp">
            <p>info@domain.com</p>
            <p>+7 495 123-45-67</p>
        </div>
        <div class="searchAndRes">
            <input type="text" v-model="PopCards.searchText" v-if="SearchInput.value">
                <i class="fa fa-phone dnone-laptop" aria-hidden="true"></i>
            <span>
                <i class="fa fa-search" aria-hidden="true" @click="changeSearchResult()" v-if="!SearchInput.value"></i>
                <i class="fa fa-close" @click="changeSearchResult()" v-if="SearchInput.value"></i>
            </span>
            <RouterLink :to="{name:'reserve',params: { username:SingleUser ? SingleUser.username : 'notregistered'} } "><i class="fa fa-shopping-bag" aria-hidden="true"></i></RouterLink>
            <RouterLink to="/login"><i class="fa fa-user" aria-hidden="true"></i></RouterLink>
            <!-- <RouterLink to="/allusers" v-if="SingleUser?.username == 'admin'">All Users</RouterLink> -->
        </div>

    </div>
  </header>
</template>

<script setup>
const showBar = false
const isseted = JSON.parse(localStorage.getItem('seted'))

import { computed,ref } from 'vue'
import {popularQuests} from '@/stores/counter.js'
import {Users} from '@/stores/users.js'

const AllUser = Users()


const SingleUser = computed(()=>{
    const AllUsers = JSON.parse(localStorage.getItem('AllUsers'))
    const username = JSON.parse(localStorage.getItem('SingleUser'))?.username
    return AllUsers.find(user=>user.username == username)
})

const PopCards = popularQuests()
let searchFalse = ref(false)

if(isseted){

}else{
    alert('storage is empty')
    localStorage.setItem('AllUsers',JSON.stringify(AllUser.getAllUsers))
    localStorage.setItem('card',JSON.stringify(PopCards.getAllQuests))
    localStorage.setItem('deleted',JSON.stringify([]))
    localStorage.setItem('seted',JSON.stringify(true))
}

const changeSearchResult = ()=>{
    searchFalse.value = !searchFalse.value
    PopCards.searchText = ''
    console.log(searchFalse.value)
}
const SearchInput = computed(()=>{
    console.log(searchFalse)
    return searchFalse
})
</script>

<style scoped>
a{
    text-decoration: none;
    color: white;
}
a:last-child{
    margin-left: 20px;
}
.dnone-laptop{
    display: none;
}

i{
    font-size: 30px;
    cursor: pointer;
    color: white;
}
header{
    padding-top: 15px;
}

.fa-search,.fa-close{
    margin-right: 20px;
    margin-top: 10px;
}
.fa-close{
    margin-left: 10px;
}
.flex{
    display: flex;
}
.flex li{
    text-decoration: none;
    font-size: 18px;
    color: white;
    list-style-type: none;
    margin-top: 20px;
    margin-right: 10px;
}
.flex p{
    font-size: 18px;
    color: white;
}
.wrapper{
    display: flex;
    justify-content: space-around;
}


</style>
<style scoped>
@media only screen and (min-width: 375px) and (max-width: 550px){
    .dnone-resp{
        display: none;
    }
    .dnone-laptop{
        display: inline;
    }
    .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    }
    i {
    margin-right: 10px;
    }
}
</style>