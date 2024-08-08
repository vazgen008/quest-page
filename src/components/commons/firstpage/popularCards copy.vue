<template>
    <p class="popular-cards__title none__laptop">Популярные квесты</p>
  <div class="popular-cards">

    <div class="popular-cards__movie" v-for="(popcard, i) in cards" :key="i" >
        <RouterLink :to="{name:'SingleMovie',params: { id:popcard.id,username:SingleUser ? SingleUser.username : 'notregistered'} } ">
        <div class="popular-cards__movie__background popular-background" >
            <img class="hoverimg" :src="'/src/components/commons/img/movie'+popcard?.id+'.jpg'" alt="">
            <div class="popular-background__hover">
                <p>{{popcard?.hover}} </p>
            </div>
            <div class="popular-background__description">
                <p class="none">{{popcard?.description}}</p>
                <div class="popular-background__description__icons">
                    <img src="../img/Group 7.png" alt="">
                </div>
            </div>
        </div>
        </RouterLink>

        <div class="popular-cards__movie__title popular-title">
            <p class="titlee">{{popcard?.title}}</p>
            <img class="img" :src="'/src/components/commons/img/Group'+popcard?.agerestrict+'.png'" alt="">
            <p class="popular-title__rate">Рейтинг:
                <span v-for="rate in popcard?.rates" :key="rate" >
                <i class="fa fa-star "  :class="{orange:rate}" aria-hidden="true"></i>
                </span>
            </p>
            <div class="popular-title__actions">
                <buttonComponent @click="reserveQuest(popcard,SingleUser)" v-if="!popcard?.reserve" type="reserve" label="Забронировать" iconName="calendar" :width="'180px'" :height="'40px'"></buttonComponent>
                <buttonComponent @click="reserveQuest(popcard,SingleUser)" class="unreserve" v-if="popcard?.reserve" type="unreserve" label="Не Забронировать" iconName="calendar" :width="'180px'" :height="'40px'" ></buttonComponent>
                <buttonComponent type="simpleGift" label="В подарок" :width="'180px'" :height="'40px'" iconName="calendar"></buttonComponent>
            </div>
        </div> 
    </div>
  </div>


<div class="showMore" @click="ShowMore()">
    <p v-if="ShowLess">Show Less</p>
    <p v-if="!ShowLess">Show More</p>
  </div>
</template>

<script setup>
import {popularQuests} from '@/stores/counter.js'
import {Users} from '@/stores/users.js'
import { onMounted,computed,ref } from 'vue'
import buttonComponent from '../../ui/buttonui.vue'

const AllUser = Users()


const SingleUser = computed(()=>{
    const AllUsers = JSON.parse(localStorage.getItem('AllUsers'))
    const username = JSON.parse(localStorage.getItem('SingleUser')).username
    return AllUsers.find(user=>user.username == username)
})

const PopCards = popularQuests()

const reserveQuest = (popcard,username)=>{
    // console.log('real usernme',username)
    if(SingleUser.value){
        // console.log(SingleUser.value)
        AllUser.setReserveQuest(popcard,username)
    }else{
        location.href = '/login'
    }
}

const ShowMore = ()=>{
   PopCards.showAll()
}



const cards = computed(()=>{
    if(SingleUser.value){
        // console.log('allmovie',SingleUser.value)
        return SingleUser.value.popularQuests.filter((card)=>card.showAll === true).slice(9)
    }else{
        const ALlCards = PopCards.getAllQuests
        return ALlCards.filter((card)=>card.showAll === true).filter((movie)=>movie.title.includes(PopCards.searchText)).slice(9)
    }
})

const ShowLess = computed(()=>{
    const ShowLessOrMore = PopCards.ShowOrLess
    return ShowLessOrMore
})

onMounted(()=>{
   PopCards.setAllCards(JSON.parse(localStorage.getItem("card")))
// localStorage.setItem('card',JSON.stringify(PopCards.getAllQuests))
    // AllUser.setAllCards()
    AllUser.setAllCards(JSON.parse(localStorage.getItem('AllUsers')))
})
</script>

<style scoped>
.showMore p{
    text-align: center;
    color: white;
    border: 1px solid gray;
    border-width: 1px 0 1px 0;
    height: 50px;
    font-size: 20px;
    cursor: pointer;
    padding-top: 25px;
    width: 1143px;
}
.showMore {
    margin-top: 90px;
    margin-bottom: 40px;
    padding-left: 40px;
    width: 1143px;
    padding-left: 180px;
}
.popular-cards {
    padding-top: 30px;
        padding-left: 180px;

    display: grid;
    grid-template-columns: auto auto auto;
    grid-row-gap: 30px;
    justify-content: start;
    grid-column-gap: 20px;
}
.popular-cards .popular-cards__movie{
width: 370px;
height: 402px;
}
.popular-cards__movie__background{
 width: 370px;
height: 221px;
border-radius: 15px;
position: relative;
}
.popular-cards__movie__background img{
    width: 100%;
    height: 100%;
    border-radius: 15px;
    
}
.popular-background__description{
    position: absolute;
    top: 146px;
    width: 370px;
height: 76px;
border-radius: 0px, 0px, 15px, 15px;
background: #0D0D16;
opacity: 70%;
transition: 0.5s;
}
.popular-background__description p{
    width: 312px;
height: 15px;
margin-left: 20px;
    font-family: Roboto;
font-size: 13px;
font-weight: 400;
line-height: 15px;
letter-spacing: 0em;
text-align: left;
color: white;

}
.popular-background__description__icons > img{
 width: 335px;
height: 20px;
margin-left: 10px;
}
.popular-cards__movie__title{
    color: white;
   
}
.popular-cards__movie__title p{
width: 170px;
height: 24px;
/* top: 236.34px; */
font-family: Formular;
font-size: 20px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
}
.titlee{
    width: auto !important;
}
.popular-title__rate{
width: 69px;
height: 20px;
font-family: Formular;
font-size: 10px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0em;
text-align: center;
color: #8989A5;
}
.popular-title__rate i{
    font-size: 18px;
}
.popular-title__rate .orange{
    color: orange;
}
/* .popular-title__actions button{
    width: 180px;
height: 40px;
border-radius: 3px;
background-color: #2B8D58;
color: white;
border: none;
cursor: pointer;
} */
.popular-title__actions p{
font-family: Formular;
font-size: 16px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0em;
text-align: center;
font-size: 20px;
margin-bottom: 10px;
cursor: pointer;
}
.popular-title__actions p i{
    color: #8E86E8;
    font-size: 20px;

}
.popular-title__actions{
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
hr{
    border: 1px solid #363644;
    width: 1500px;
}
.popular-background__hover{
    color: #C4C4D6;
    top: 0;
    position: absolute;
    width: 333.52px;
height: 120px;
top: 10px;
left: 19.03px;
opacity: 0;
transition: 0.5s;
}

.popular-cards__movie:hover  .popular-background__hover{
    opacity: 1;
  }
.popular-cards__title {
    /* margin: 20px 0 0 40px; */
    color: white;
    font-size: 26px;
        padding-left: 180px;

    padding-top: 20px;
}
.unreserve{
    width: 180px;
    height: 40px;
    border-radius: 3px;
    background-color: red !important;
    color: white;
    border: none;
    cursor: pointer;
}

</style>


<style scoped>
@media only screen and (min-width: 375px) and (max-width: 550px){
    .popular-cards{
       width: auto;
        height: auto;
        overflow: auto;
        padding-left: 0px;
        grid-template-columns: auto;
    }
    .popular-cards .popular-cards__movie{
    width: auto;
    height: 450px;
}
    .showMore {
        margin-top: 90px;
        margin-bottom: 40px;
        /* padding-left: 40px; */
        width: auto;
        padding-left: 0px;
        text-align: left;
    }
    .showMore p {
        text-align: center;
        color: white;
        border: 1px solid gray;
        border-width: 1px 0 1px 0;
        height: 50px;
        font-size: 20px;
        cursor: pointer;
        padding-top: 25px;
        width: auto ;
    }
    .popular-cards__title {
    /* margin: 20px 0 0 40px; */
    color: white;
    font-size: 26px;
    padding-left: 0px;
    padding-top: 20px;
    }
}
</style>