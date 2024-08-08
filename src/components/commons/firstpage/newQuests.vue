<template>
<div class="quests">
    <p class="quests__title">Новые квесты</p>

    <div class="quests-flex">
        <div class="quests__movies" v-for="newMovie in newCards" :key="newMovie.id">

            <div class="quests__movies__movie q-movie">
                <img :src="'/src/components/commons/img/coming'+newMovie?.id+'.jpg'" alt="">
                <!-- :src="'/src/components/img/movie'+popcard?.id+'.jpg'" -->
                <div class="q-movie__info">
                    <p>{{newMovie.title}}</p>
                    <p class="q-movie__info__title">{{newMovie.description}}</p>
                    <div class="q-movie__info__age">
                    <div>
                        <p>{{newMovie.agerestrict}}+</p>
                    </div>
                    <div class="q-movie__info__stars">
                        <span v-for="rate in newMovie?.rates" :key="rate" >
                            <i class="fa fa-star " :class="{orange:rate}" aria-hidden="true"></i>
                        </span>
                    </div> 
                    </div>
                    <div class="q-movie__info____actions">
                        <!-- <button @click="reserveNewMovie(newMovie)" v-if="!newMovie.reserve"><i class="fa fa-calendar" aria-hidden="true"></i>PRE-RESERVE</button>
                        <button @click="reserveNewMovie(newMovie)" class="unreserve" v-if="newMovie.reserve"><i class="fa fa-calendar" aria-hidden="true"></i>PRE-RESERVED</button>
                        <p><i class="fa fa-gift" aria-hidden="true"></i> В подарок</p> -->
                        <buttonComponent @click="reserveNewMovie(newMovie)" :disabled="SingleUser == false" v-if="!newMovie.reserve" type="reserve" label="PRE-Reserve" iconName="calendar" :width="'180px'" :height="'40px'"></buttonComponent>
                        <buttonComponent @click="reserveNewMovie(newMovie)"  class="unreserve" v-if="newMovie.reserve" type="unreserve" label="PRE-Reserved" iconName="calendar" :width="'180px'" :height="'40px'" ></buttonComponent>
                        <buttonComponent type="simpleGift" label="В подарок" @click="console.log(5)" :width="'180px'" :height="'40px'" iconName="calendar"></buttonComponent>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

</template>

<script setup>
import {NewQuests} from '@/stores/newQuests.js'
import { onMounted,computed } from 'vue'
import buttonComponent from '../../ui/buttonui.vue'

const newquest = NewQuests()

const reserveNewMovie = (newMovie)=>{
    newquest.reserveComingMovie(newMovie)
}

const newCards = computed(()=>{
    const newMovie = newquest.getAllNewMovies
    return  newMovie
})

const SingleUser = computed(()=>{
    // console.log(JSON.parse(localStorage.getItem('SingleUser')))
    return JSON.parse(localStorage.getItem('SingleUser'))
})

onMounted(()=>{
    const newquest = NewQuests()
    // localStorage.setItem("comingMovies",JSON.stringify(newCards.value))
    // localStorage.removeItem('card');
    // console.log(newquest, 9999)
    // console.log('newquests' ,NewQuests())
    newquest.setAllCards(JSON.parse(localStorage.getItem("comingMovies")))
})

</script>

<style scoped>
button{
    cursor: pointer;
}
button i{
    margin-right: 5px;
}
.quests-flex {
    display: flex;
    align-items: center;
    /* padding-left: 50px; */
    width: 100%;
    justify-content: space-evenly;
    margin-left: -50px;
}
.quests{
    width: 100%;
top: 2848.92px;
left: 277px;;
border: 1px;
}
.quests__movies__movie{
    width: 370px;
    height: 220px;
    border-radius: 15px;
    padding-left: 17px;
    padding-top: 20px;
    position: relative;

}
.quests__movies__movie img{
   width: 370px;
height: 220px;
border-radius: 15px;
}

.quests p{
    color: white;
    width: 189px;
height: 32px;
top: 2848.92px;
left: 280px;
font-family: Formular;
font-size: 26px;
font-weight: 500;
line-height: 32px;
letter-spacing: 0em;
text-align: left;
margin-left: 25px;

}
.q-movie__info{
background-color: rgba(0, 0, 0, 0.5);
width: 370px;
height: 220px;
border-radius: 15px;
display: flex;
position: absolute;
top: 20px;
flex-direction: column;
}
.q-movie__info p{
    color: white !important;
    opacity: 1;
    font-size: 20px;

}
.q-movie__info__title{
    margin-top: -15px;
    font-size: 16px;
}
.q-movie__info__age{
width: 39px;
height: 25px;
position: absolute;
top: 95px;
left: 25px;
border-radius: 3px;
border: 1px solid white;
display: flex;
}
.q-movie__info__age p{
    margin: -3px 0 0px 8px;
    font-size: 16px;
    display: flex;
    width: 0px;
    height: 0px;
}
.q-movie__info__age p i{
    width: 13px;
    height: 13px;
    opacity: 1;
}
.q-movie__info__stars{
    display: flex;
    margin-left: 50px;
    margin-top: 5px;
}
.q-movie__info____actions{
    display: flex;
    align-items: center;
    padding-left: 20px;
}

.q-movie__info____actions button{
    /* width: 180px;
height: 40px;
border-radius: 3px;
background-color: #2B8D58;
color: white;
border: none; */
margin: 58px 0 0 0;
}
.q-movie__info____actions p{
    font-family: Formular;
font-size: 16px;
margin: 10 0 0 0;
/* text-align: center; */
margin: 63px 0 0 10px;
height: 28px;
width: 150px;

}
.quests__title{
    color: white;
    width: 189px;
    height: 32px;
    top: 2848.92px;
    left: 310px;
    font-family: Formular;
    font-size: 26px;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: left;
    margin-left: 90px;
    cursor: pointer;
    }
    .quests__movies {
        padding-right: 20px;
        display: flex;
        margin: 0 20px;
    }
    .quests hr{
        margin-left: 25px;
        margin-top: 25px;  
    }
    hr{
        width: 1180px;
    }
    .orange{
        color: orange;
    }
    .q-movie__info__stars{
        color: #8989A5;
    } 
    .unreserve{
        background-color: red !important;
    }
</style>

<style scoped>
@media only screen and (min-width: 375px) and (max-width: 550px){
    .quests-flex[data-v-d39883ff] {
        display: flex;
                align-items: flex-start;
        width: 100%;
        justify-content: space-evenly;
        margin-left: -50px;
        flex-direction: column;
    }
}
</style>