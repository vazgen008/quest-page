<template>
    <NavBar/>
  <div v-if="cards?.length" class="your--orders">
    <h1>Ваш заказ</h1>
    <div class="all--orders" v-for="popcard in cards" :key="popcard.id">
        <div class="single--order">
            <RouterLink :to="{name:'SingleMovie',params: { id:popcard.id } } ">
            <div class="single--image">
                <img class="hoverimg" :src="'/img/movie'+popcard.id+'.jpg'" alt="">
            </div>
            </RouterLink>
            <div class="single--information">
                <h2>{{popcard.title}}</h2>
                <p>{{popcard.description}}</p>
                <div v-for="quest in popcard.quests" :key="quest.date">
                    <div class="time--table">
                        <div v-if="quest.times.some(time => time.type == 'selected')">
                            <span class="date--timetabel">{{quest.date}} -  </span>
                            <span v-for="(time, index) in quest.times" :key="time">
                                <span v-if="time.type == 'selected'">
                                    {{time.value}}
                                    <span v-if="index  < quest.times.filter(t => t.type == 'selected').length - 1">
                                    </span>
                                </span>
                            </span>
                            <br><br>
                        </div>
                    </div>
                </div>
                    <img src="../img/Group 7.png" alt="" class="information--img">
                <div class="form--field">
                    <div class="form--select--movietype">
                        <select name="" id="">
                            <option value="">Количество игроков</option>
                            <option value="">Количество игроков</option>
                        </select>
                    </div>
                    <div class="select--leng">
                        <span>
                            Язык игры:
                        </span>
                        <select>
                            <option value="ru">ru</option>
                            <option value="ru">en</option>
                        </select>
                    </div>
                </div>
                <div class="aditational--information">
                    <h3>Дополнительные услуги:</h3>
                    <div class="count--people">
                        <span><input type="checkbox">Услуга сопровождения <br>для детей 1000 ₽</span>
                        <div class="actions--countPeople">
                            <button @click="minusCount()" :disabled="PopCards.countOfFinalPeople === 1">-</button>
                            <span>{{PopCards.countOfFinalPeople}}</span>
                            <button @click="plusCount()">+</button>
                        </div>
                        <p>Пройдем квест вместе с детьми и проследим, чтобы все было в порядке :) Минимальный возраст игроков указан в описании квеста, услуга оплачивается на месте
                        </p>
                    </div>
                    <div class="confirm--order">
                        <h3>Оформление заказа</h3>
                        <form action="">
                            <input type="text" placeholder="Ваше имя">
                            <input type="number" placeholder="Контактный телефон">
                            <input type="email" placeholder="Электронная почта">
                        </form>
                    </div>
                    <div class="payment--details">
                        <h3>Способ оплаты</h3>
                        <div>
                            <span><input type="checkbox">Наличные</span>
                            <span><input type="checkbox" checked >Банковская карта</span>
                            <p>Являясь всего лишь частью общей картины, активно развивающиеся страны третьего мира заблокированы в рамках своих собственных рациональных ограничений.</p>
                            <span><input type="checkbox">Подарочный сертификат</span>
                        </div>
                    </div>
                </div>
                <div class="total--payment">
                    <p>
                        Total payment for {{PopCards.countOfFinalPeople}} person :  <br>
                    </p>
                    <div class="total--money">
                    <p>
                        {{ AllUser.calculateTotalPayment(popcard.id,username) * 2500 * PopCards.countOfFinalPeople }}₽ <span>(2500₽ for each session)</span>
                    </p>
                    <button>Оформить заказ</button>
                    </div>
                </div>

            </div>
            

        </div>
        

    </div>
  </div>


  <div v-else class="emptyReserved">
    <p>You're not logged</p>
  </div>
  <footer>
  <Footer/>
  </footer>
</template>

<script setup>
import {popularQuests} from '@/stores/counter.js'
import { onMounted,computed, ref,defineProps} from 'vue'
import NavBar from '../firstpage/headerNavBar.vue'
import Footer from '../firstpage/footer copy.vue'
import {Users} from '../../../stores/users'

const props = defineProps({
    username:{
        required:true
    }
})

const PopCards = popularQuests()

const AllUser = Users()


const minusCount = () =>{
    PopCards.countOfFinalPeople--
}
const plusCount = ()=> {
    PopCards.countOfFinalPeople++
}

const reserveQuest = (popcard)=>{
   PopCards.setReserveQuest(popcard)
}


onMounted(() => {
    PopCards.setAllCards(JSON.parse(localStorage.getItem("card")))
})

const username = JSON.parse(localStorage.getItem('SingleUser')).username

const cards = computed(()=>{
    const usernamefromlocal = JSON.parse(localStorage.getItem('SingleUser')).username
    AllUser.setAllCards(JSON.parse(localStorage.getItem('AllUsers')))
    const ResCards = AllUser.getAllUsers.find(user=>user.username == props.username)?.popularQuests
    if(usernamefromlocal == props.username){
        return ResCards?.filter(quest=>quest.reserve == true)
    }else{
        location.href = `http://localhost:5173/reserved/${usernamefromlocal}`
    }
})

const  calculateTotalPayment = (id)=>{
    PopCards.calculateTotalPayment(id)
}


</script>

<style scoped>
footer {
    padding-left: 150px;
}
.payment--details>div>p{
    width: 420px;
}
.total--money {
    display: flex;
    flex-direction: column;
}
.total--money button{
    background: #2B8D58;
    height:50px;
    color: white;
    border: none;
}
.total--money p{
    color: #70B465;

    font-size: 30px !important;
}
.total--money span {
    color: white;
    font-size: 15px !important;
}
.payment--details{
    border: 1px solid #7A7A8D;
    border-width: 0 0 1px 0;
    padding-bottom: 20px;
}

input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-right: 10px;
  color: #181823;
}
.payment--details > div {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    align-items: flex-start;
}
input[type="checkbox"]:before {
  content: "✔";
  width: 20px;
  height: 20px;
  border: 1px solid white;
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  background: #181823;
}
input[type="checkbox"]:checked::before {
  width: 15px !important;
      color: white;
      padding-left: 5px;
}
input[type="checkbox"]:checked {
 accent-color: blue;

}
.actions--countPeople{
    width: 90px;
    height: 37px;
}
.actions--countPeople button{
    width: 30px;
    height: 30px;
    background: none;
    color: white;
    border: 2px solid #7A7A8D
}
.actions--countPeople span{
    margin: 0 5px;
}
.count--people{
    width: 420px;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    border: 1px solid #7A7A8D;
    border-width: 0 0 1px 0;
}
.form--select--movietype{
    width: 420.55px;
    height: 50px;
    border: 1px solid #6E6E80;
    border-width: 0 0 1px 0;
    padding-bottom: 8px;
    padding-top: 5px;

}
.form--select--movietype select{
    width: 100%;
    height: 100%;
    background: none;
    border-radius: 3px;
    color: white;
}
.confirm--order{
    border: 1px solid #6E6E80;
    border-width: 0 0 1px 0;
    padding-bottom: 10px;
}
.confirm--order form{
    display: flex;
    flex-direction: column;
    row-gap: 15px;
}
.confirm--order input{
     width: 420.55px;
    height: 50px;
    background: none;
    border: 1px solid #6E6E80;
    border-radius: 3px;
    padding-left: 20px;
    color: white;
}
.confirm--order input::placeholder{
    color: white;
}
.select--leng{
     width: 420.55px;
    height: 50px;
    border: 1px solid #6E6E80;
    border-width: 0 0 1px 0;
    padding-bottom: 8px;
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

}
.select--leng span{
    font-size: 18px;
}
.select--leng select{
    width: 72px;
    height: 40px;
    color: white;
    background: none;
    border-radius: 3px;
}
.information--img{
    width: 420px;
height: 20px;
border: 1px solid #8989A5;
border-width: 0 0 1px 0;
padding-bottom: 20px;
}
.single--order{
    display: flex;
    column-gap: 20px;
}
.single--image{
    width: 360px;
    height: 230px;
}
.single--image img{
    width: 100%;
    height: 100%;
}
.your--orders{
    color: white;
    padding-left: 180px;
}
.your--orders>h1{
    margin-left: 0;
}
h2{
    margin-top: 0;
}
.single--information {
    padding-top: 40px;
}
</style>

<style scoped>
.time_table{
    color: white;
    font-size: 20px;
}
.link{
    margin-left: 25px;
}
h1{
    color: white;
    margin-left: 25px;
}
a{
    margin: 40px 0 0 0px;
    font-size: 20px;
    text-decoration: none;
    height: 300px;
}
header input{
    margin: 40px 0 0 40px;
}
a{
    color: white;
}
.emptyReserved{
    font-size: 20px;
    color: white;
    text-align: left;
    padding-left: 40px;
}
.emptyReserved a{
    color: white;
    text-decoration: none;
}
.popular-cards {
    padding-top: 30px;
    padding-left: 30px;
    display: flex;
    grid-template-columns: auto auto auto;
    /* grid-row-gap: 30px; */
    flex-direction: column;
}
hr{
    width: 100px;
}
.popular-cards .popular-cards__movie {
    width: 370px;
    height: auto;
    border: 1px solid black;
    border-width: 0 0 1px 0;
    margin-bottom: 20px;
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
.popular-title__actions button{
    width: 180px;
height: 40px;
border-radius: 3px;
background-color: #2B8D58;
color: white;
border: none;
cursor: pointer;
}
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
    width: 1450px;
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
.popular-cards__title{
    margin: 20px 0 0 40px;
    color: white;
    font-size: 20px;
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

<!--
<div class="popular-cards" v-if="cards.length">

    <div class="popular-cards__movie" v-for="popcard in cards" :key="popcard.id">
        <RouterLink :to="{name:'SingleMovie',params: { id:popcard.id } } ">
        <div class="popular-cards__movie__background popular-background">
            <img class="hoverimg" :src="'/src/components/img/movie'+popcard.id+'.jpg'" alt="">
            <div class="popular-background__hover">
                <p>{{popcard.hover}} </p>
            </div>
            <div class="popular-background__description">
                <p class="none">{{popcard.description}}</p>
                <div class="popular-background__description__icons">
                    <img src="../img/Group 7.png" alt="">
                </div>
            </div>
            
        </div>
        </RouterLink>

        <div class="popular-cards__movie__title popular-title">
            <p class="titlee">{{popcard.title}}</p>
            <img class="img" :src="'/src/components/img/Group'+popcard.agerestrict+'.png'" alt="">
            <p class="popular-title__rate">Рейтинг:
                <span v-for="rate in popcard.rates" :key="rate" >
                    <i class="fa fa-star " @click="rate = !rate" :class="{orange:rate}" aria-hidden="true"></i>
                </span>
            </p>
            <div class="popular-title__actions">
                <button class="unreserve" @click="reserveQuest(popcard)" v-if="popcard.reserve"><i class="fa fa-calendar" aria-hidden="true"></i> Не Забронировать</button>
                <p><i class="fa fa-gift" aria-hidden="true"></i> В подарок</p>
            </div>
        </div> 
        <div class="time_table">
                <div v-for="quest in popcard.quests" :key="quest.date">
                <div class="flexTimeTable">
                    <div v-if="quest.times.some(time => time.type == 'selected')">
                        <p>{{quest.date}} - </p>
                        <span v-for="(time, index) in quest.times" :key="time">
                            <p v-if="time.type == 'selected'">
                            {{time.value}}
                            <span v-if="index  < quest.times.filter(t => t.type == 'selected').length - 1">,</span>
                            </p>
                        </span>
                    </div>
                </div>
            </div>
            </div>

    </div>
  </div>-->