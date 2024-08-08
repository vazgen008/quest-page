 <template> 
 
        <div class="Single-card" :style="{ backgroundImage: `url(/img/movie${cards?.id}.jpg)`,backgroundPosition: 'center' }">
                <NavBar/>

            <div class="card-information-all">
                <div>
                <div>
                    <p class="titlee">{{cards?.title}}</p>
                    <p class="description">{{cards?.description}}</p>
                </div>
                <div>
                    <img src="../img/Group 7.png" alt="">
                    <p class="shortAbout">Возрастные ограничения: от 8 лет с родителями, от 14 без Квест без актеров</p>
                </div>
                </div>

             <div class="single-card-title">
                <div class="single-title__actions">
                    <buttonComponent @click="reserveQuest(cards,User)" v-if="!cards?.reserve" type="reserve" label="Забронировать" iconName="calendar" :width="'220px'" :height="'50px'"></buttonComponent>
                    <buttonComponent @click="reserveQuest(cards,User)" class="unreserve" v-if="cards?.reserve" type="unreserve" label="Не Забронировать" iconName="calendar" :width="'220px'" :height="'50px'" ></buttonComponent>
                    <buttonComponent type="gift" label="В подарок" :width="'220px'" :height="'50px'" iconName="calendar"></buttonComponent>
                </div>  
                <div class="responsive">
                    <buttonComponent @click="reserveQuest(cards)" v-if="!cards?.reserve" type="reserve" label="Забронировать" iconName="calendar" :width="'170px'" :height="'50px'"></buttonComponent>
                    <buttonComponent @click="reserveQuest(cards)" class="unreserve" v-if="cards?.reserve" type="unreserve" label="Не Забронировать" iconName="calendar" :width="'170px'" :height="'50px'" ></buttonComponent>
                    <buttonComponent type="gift" label="В подарок" :width="'170px'" :height="'50px'" iconName="calendar"></buttonComponent>
                </div>  
             </div> 
            </div>
        </div>

        <div class="infoTab">
            <div class="categories">
                <div>
                <span>Категории:</span>
                </div>
                <div class="categories__categories">
                <span v-for="card in cards?.categorie" :key="card">
                    <button class="categorieButton">{{card}}</button>
                </span>
                </div>
            </div>
            <div class="maininformation">
                <p class="large-description">
                            Все, что было известно о секретной лаборатории раньше — всего лишь слухи. Но теперь у тебя появился реальный шанс раскрыть главную тайну настоящего гения. Вокруг тысячи фантастических изобретений, но где то самое, над которым всю свою жизнь трудился ученый? Подсказки совсем рядом, вот только замаскированы так, что найти и разгадать их все будет совсем непросто. Тем более, что время почти на исходе…<br> <br>
                «Перекресток времени» — идеальное приключение для тех, кто влюблен в необычные гаджеты и новые технологии. Тебя ждет огромная многокомнатная лаборатория, десятки невероятных устройств «из будущего» и даже живой искусственный интеллект РадОС. Протестируй капсулу для перемещения во времени, проведи несколько смелых экспериментов в лаборатории, а главное — найди уникальное творение ученого, которое сможет изменить весь мир! <br> <br>
                Внимание! Не рекомендуем проходить квест людям, страдающим кинетозом. <br> <br>
                Нет взрослого игрока в команде? Свяжитесь с локацией перед бронированием, чтобы воспользоваться услугами сопровождающего! Наш сотрудник пройдет квест вместе с детьми и проследит за тем, чтобы все было в порядке. Стоимость сопровождения: 1000 руб. за сеанс. Данную услугу необходимо добавить при бронировании на сайте.
                </p>
                <div class="Information_tab-actions">
                    <buttonComponent @click="reserveQuest(cards)" v-if="!cards?.reserve" type="reserve" label="Забронировать" iconName="calendar" :width="'220px'" :height="'50px'"></buttonComponent>
                    <buttonComponent @click="reserveQuest(cards)" class="unreserve" v-if="cards?.reserve" type="unreserve" label="Не Забронировать" iconName="calendar" :width="'220px'" :height="'50px'" ></buttonComponent>
                    <buttonComponent type="gift" label="В подарок" :width="'220px'" :height="'50px'" iconName="calendar"></buttonComponent>
                </div>
                <div class="infoTab-responsive">
                    <buttonComponent @click="reserveQuest(cards)" v-if="!cards?.reserve" type="reserve" label="Забронировать" iconName="calendar" :width="'170px'" :height="'50px'"></buttonComponent>
                    <buttonComponent @click="reserveQuest(cards)" class="unreserve" v-if="cards?.reserve" type="unreserve" label="Не Забронировать" iconName="calendar" :width="'170px'" :height="'50px'" ></buttonComponent>
                    <buttonComponent type="gift" label="В подарок" :width="'170px'" :height="'50px'" iconName="calendar"></buttonComponent>
                </div>     
            </div>
        
        </div>

       <!-- timeTable -->
       <div class="TimeTable">
        <div class="selectBox">
            <div>
            <span>Расписание квестов</span>
            <select v-model="selected" class="custom-select">
                <option value="March"><span>March</span></option>
                <option value="April">April</option>
            </select>
            </div>
            <div class="selectBox-title">
                <span>Цена указана за команду</span>
            </div>
       </div>
       <div class="all--timeTable">
            <div v-for="quest in datas" :key="quest.date">
                <div class="flexTimeTable">
                    <div>
                        <p class="dateMonth">{{quest.date}}</p>
                        <span v-for="time in quest.times" :key="time" >
                            <button :disabled="time.type == 'disabled'" class="time" :class="{unselected:time.type == 'unselected',selected:time.type == 'selected',disabled:time.type == 'disabled'}" @click="changeDateReserve(time.type,time.value,quest.date,props.id,props.username)"> {{time.value}}
                                <p v-if="time.type == 'selected'">2300₽</p>
                            </button>
                        </span>
                    </div>
                    <div class="flexActionsTimeTable">
                        <button class="reserve"  @click="finalReserveDate()"><i class="fa fa-calendar" aria-hidden="true"></i> Save Changes</button>
                        <p ><i class="fa fa-gift" aria-hidden="true"></i> В подарок</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <!-- <div v-for="date in datas" :key="date.date">
            {{date.date}}
        </div>  -->
        <div class="movie-reviews">
            <p class="review-title">Отзывы игроков</p>
            <div class="all-reviews">
                <div class="firstHalf">
                    <div v-for="review in reviewPeopleFirstHalf" :key="review.name" class="single-rate">
                        <span class="review-name">{{review.name}}</span>
                        <p class="review-completedQuests">Квестов пройдено:{{review.completedQuests}}</p>
                        <p class="review-description">{{review.description}}</p>
                        <p class="review-reviewFor">Отзыв на:{{review.reviewFor}}</p>
                        <div class="rate-stars">
                            <div class="orange-stars">
                                <i class="fa fa-star" v-for="i in review.rate" :key="i"></i>
                                <span v-if="review.rate !== 5" class="gray-stars">
                                    <i class="fa fa-star"  v-for="i in 5 - review.rate" :key="i"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="secondHalf">
                    <div v-for="review in reviewPeopleSecondHalf" :key="review.name" class="single-rate">
                        <span class="review-name">{{review.name}}</span>
                        <p class="review-completedQuests">Квестов пройдено:{{review.completedQuests}}</p>
                        <p class="review-description">{{review.description}}</p>
                        <p class="review-reviewFor">Отзыв на:{{review.reviewFor}}</p>
                        <div class="rate-stars">
                            <div class="orange-stars">
                                <i class="fa fa-star" v-for="i in review.rate" :key="i"></i>
                                <span v-if="review.rate !== 5" class="gray-stars">
                                    <i class="fa fa-star"  v-for="i in 5 - review.rate" :key="i"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div    class="addNewReview">
                    <span><i class="fa fa-comments-o"></i>Еще отзывы</span>
                    <buttonComponent  type="bordered" label="Написать отзыв"  :width="'180px'" :height="'40px'"></buttonComponent>
                </div>
            </div>
        </div>
        <Quests/>
        <newQuests>
        </newQuests>
        <ads></ads>
        <Footer style="margin-left:180px;padding:0">
        </Footer>
        <h1>{{username}}</h1>
</template>



<script setup>
import NavBar from '../firstpage/headerNavBar.vue'
import buttonComponent from '../../ui/buttonui.vue'
import {popularQuests} from '@/stores/counter.js'
import {reviews} from '@/stores/reviews.js'
import {ref,onMounted,computed, onBeforeMount} from 'vue'
import Quests from '../firstpage/popularCards copy.vue'
import newQuests from '../firstpage/newQuests copy.vue'
import ads from '../firstpage/ads copy.vue'
import Footer from '../firstpage/footer copy.vue'
import {Users} from '../../../stores/users'


const AllUser = Users()


const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  username:{
    required:true,
  }
});

let selected = ref('March')


const popMovie = popularQuests()

const reviewsAll = reviews()

const reviewPeopleFirstHalf = computed(()=>{
    return reviewsAll.PeoplesReviews.slice(0,3)
})

const changeDateReserve = (type,value,date,id,username)=>{
    AllUser.changeResDate(type,value,date,id,username)
}

const reviewPeopleSecondHalf = computed(()=>{
    return reviewsAll.PeoplesReviews.slice(3)
})

const finalReserveDate = ()=>{
    // alert()
    AllUser.finalReserveDate()
    // console.log(cards.value.quests[0].times,'cardssss')

}

const reserveQuest = (popcard,username)=>{
    // console.log('real usernme',username)
    if(props.username !== 'notregistered'){
        // console.log(User.value)
        AllUser.setReserveQuest(popcard,username)
    }else{
        location.href = '/login'
    }
}

const datas = computed(()=>{
    // return cards.value.popularQuests.quests.filter((quest)=>quest.date.includes(selected.value))
    // console.log(cards.value,'cardss')
    let alldates = cards.value.quests.filter((quest)=>quest.date.includes(selected.value))
    return alldates
})


const cards = computed(()=>{
    const ALlCards = popMovie.getAllQuests
    let singleCard = ALlCards.find(movie => movie.id == props.id)
    const SingleUsername = JSON.parse(localStorage.getItem('SingleUser'))?.username
    let allusers = AllUser.getAllUsers
    if(props.username !== 'notregistered'){
        if(SingleUsername === props.username){
        return allusers.find(user=>user.username == props.username).popularQuests.find(quest=>quest.id==props.id)
        }else{
           location.href = `http://localhost:5173/movies/2/${SingleUsername}`
            // location.href = `movies/2/${props.username}`
        }
    }else{
        return singleCard
    }
})

const User = computed(()=>{
    let allusers = AllUser.getAllUsers
    if(props.username !== 'notregistered'){
        // console.log(allusers.find(user=>user.username == props.username))
        return allusers.find(user=>user.username == props.username)
    }
})

onMounted(()=>{
    window.scrollTo(0, 0)
    // localStorage.setItem("card",JSON.stringify(cards.value))
    // localStorage.removeItem('card');
    popMovie.setAllCards(JSON.parse(localStorage.getItem("card")))
})
onBeforeMount(()=>{
    AllUser.setAllCards(JSON.parse(localStorage.getItem("AllUsers")))
})

</script>

<style scoped>
.selected{
    position: relative;
}
.selected p {
    position: absolute;
    right: 25px;
}
select{
    background-position: right 20px center; /* positioned the arrow 20px from the right */
  background-repeat: no-repeat;
}
.infoTab-responsive{
    display: none
    ;
}
.responsive{
    display: none;
}
.adv{
    margin-bottom: 20px;
}
.addNewReview {
    display: flex;
    align-items: center;
    justify-content: flex-start;
        margin-top: -30px;
}
.addNewReview span{
    margin-right: 10px;
}
.review-name{
    font-size: 18px;
}
.review-description{
    font-size: 15px;
    width: 330px;
    height: auto;
}
.orange-stars{
    color: orange;
}
.gray-stars{
    color: gray;
}
.div-rate{
    display: flex;
}
.movie-reviews{
    color: white;
    padding-left: 180px;
    width: 1140px;
    height: auto;
    margin-bottom: 10px;
}
.selectBox-title span{
font-family: Formular;
font-size: 16px;
font-weight: 500;
line-height: 19.57px;
color: #2B8D58 !important;
}
.selectBox-title{
    margin: 10px 0;
    padding: 10px 0;
    width: 1143px;
    border: 1px solid #363644;
    border-width: 1px 0 1px 0;
}
.reserve{
    background: #2B8D58;;
}
.review-title{
    font-size: 26px;
}
.gift-button{
    width: 220px;
height: 50px;
border-radius: 3px 0px 0px 0px;
opacity: 0px;
background: #8E86E8 !important;
}
.maininformation{
    display: flex;
    width: 1300px;
    padding-top: 80px;
    padding-left: 180px;
}
.TimeTable{
    display: flex;
    flex-direction: column;
    margin-left: 180px;
}
.infoTab{
    width: 1136.81px;
height: 550px;
display: flex;
}

.selectBox span{
    font-family: Formular;
font-size: 26px;
font-weight: 500;
line-height: 31.8px;
text-align: left;
color: white;
margin-right: 10px;
}
select{
    background: none;
    width:219px;
    height:40px;
    color: white;
    border-radius: 3px;
}
select option{
    background: none;
    width:219px;
    height:40px;
    color: black !important;
    border-radius: 3px;
}
/* select option{
    color: white !important;
} */
/* .Information_tab-actions button{
    background-color: #2B8D58;

    width: 220px !important;
    height: 50px !important;
} */
.Information_tab-actions{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    width: auto;
    height: 200px;
    margin-top: 250px;
    gap: 20px;
}
.secondHalf,.firstHalf{
    width: 1140px;
    height: 246px;
    position: relative;
    display: flex;
    border: 1px solid #363644;
    border-width: 0 0 1px 0;
}
.addNewReview{
    width: 1140px;
    height: 80px;
    position: relative;
    display: flex;
    border: 1px solid #363644;
    border-width: 0 0 1px 0;
}
.rate-stars{
    position: absolute;
    bottom: 15px;
    width: 80px;
}
.all-reviews{
    display: flex;
    flex-direction: column;
    row-gap: 30px;
}
.categorieButton{
    width: 178px;
height: 47px;
top: 880px;
left: 381.19px;
gap: 0px;
border-radius: 5px 0px 0px 0px;
border: 1px solid #7A7A8D;
opacity: 0px;
color: #ffff;
background: none;
margin-right: 5px;
}
.large-description{
    font-family: Formular;
font-size: 16px;
font-weight: 400;
line-height: 19.57px;
text-align: left;
width: 1136.81px;
height: 300px;
/* top: 890px;
left: 240px; */
gap: 0px;
opacity: 0px;
position: absolute;
color: #CDCDE0;
}
.categories{
    left: 180px;
/* top: 870px; */
position: absolute;
color: white;
margin-top: 20px;
display: flex;
    align-items: center;
    gap: 30px;
}
.categories>div>span>button{
    margin-right: 10px;
}
.shortAbout{
    font-family: Formular;
font-size: 14px;
font-weight: 500;
line-height: 17.12px;
text-align: left;
width: 423px;
height: 34px;
color: white;
}
.description{
    font-family: Roboto;
font-size: 20px;
font-weight: 500;
line-height: 23.44px;
text-align: left;
color: white;

}
.Single-card{
    position: relative;
}
.card-information-all{
    position: absolute;
    top: 550px;
    left: 180px;
    display: flex;
        align-items: flex-end;
    gap: 80px;
}
.titlee {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-family: Formular;
font-size: 48px;
font-weight: 500;
line-height: 58.7px;
text-align: left;
width: 542px;
height: 59px;
top: 546.29px;
left: 280px;
gap: 0px;
opacity: 0px;

}

.singleCard-description {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.single-card-smallDescription {
  font-size: 1rem;
}
.Single-card{
width: 100%;
    height: 810px;
    background-repeat: no-repeat;
    background-size: cover;
}
.price{
    position: relative;
}
.flexActionsTimeTable{
    display: flex;
    align-items: center;
}
.flexActionsTimeTable p{
    color: white;
    font-size: 20px;
}
.flexActionsTimeTable p i{
    color: gray;
}
.flexTimeTable{
    width: 1143px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 1px dashed #412F55;
    border-width: 0 0 1px 0;
    padding-bottom: 30px;
}
.all--timeTable{
    width: 1143px;
    border:1px solid gray;
    border-width: 0 0 1px 0;
    margin-bottom: 10px;
}

button{
    color: white;
    
}
.action{
width: 220px !important;
    height: 50px !important;
}
.time{
    cursor: pointer;
    margin-right: 10px;
}
.time[disabled]{
    margin-right: 10px;
    cursor: auto;
}
.dateMonth{
    color: white;
    font-size: 23px;
    color: white;
    width: 200px;
    height: 40px;
    border-radius: 5px;
    margin-bottom: 0;
}
.disabled{
    /* border:1px solid gray; */
    background: transparent;
    color: white;
    width: 90px;
    height: 40px;
    border-radius: 5px;
    border: 2px solid black;
    border-radius: 5px;
}
.selected{
    border:2px solid #2B8D58;
    background: #2B8D58;
    width: 90px;
    height: 40px;
    border-radius: 5px;
    font-size: 15px;
    color: white;
}
.unselected{
    /* border-color: white; */
    background: none;
    width: 90px;
    height: 40px;
    border: 2px solid #8989A5;
    border-radius: 5px;

}
.fa-shopping-bag{
    font-size: 30px;
}
.single-title__actions p {

    color: white;
    cursor: pointer;
}
a{
    color: white;
    margin-left: 20px;
    margin-top: 10px;
    font-size: 15px;
    text-decoration: none;
    cursor: pointer;
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
.hoverimg{
    width: 100%;
    height: 810px;
    opacity: 0.5;
    position: relative;
}
.singleCard-description{
    font-size: 20px;
    color: white;
}
.single-card-smallDescription{
    font-size: 15px;
    color: white;
}
.titlee{
    color: white;
    font-size: 30px;
}
.single-title__rate{
    width: 250px;
height: 20px;
font-family: Formular;
font-size: 20px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0em;
text-align: center;
color: #8989A5;
margin-left: -20px;
}
.single-title__rate i{
    font-size: 25px;
}
.single-title__rate .orange{
    color: orange;
}
.single-title__actions button,.reserve{
    width: 220px;
height: 50px;
border-radius: 3px;
/* background-color: #2B8D58; */
color: white;
border: none;
cursor: pointer;
margin-right: 20px;
}
.single-title__actions p{
font-family: Formular;
font-size: 16px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0em;
text-align: center;
font-size: 20px;
margin-top: 30px;
cursor: pointer;

}
.single-title__actions p i{
    color: #8E86E8;
    font-size: 20px;

}
.single-title__actions{
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

</style>

<style scoped>
@media only screen and (min-width: 375px) and (max-width: 550px){
    .selected{
        margin-bottom: 30px;
    }
    .unselected{
        margin-bottom: 30px;
    }
    .card-information-all{
        left: 0px;
    }
    .Single-card{
        width: 100%;
        height: 271px;
        margin-bottom: 270px;
    }
    .card-information-all {
        position: absolute;
        top: 180px;
        left: 0px;
        display: flex;
        align-items: flex-end;
        gap: 80px;
        flex-direction: column;
        height: 350px;
        width: 100%;
    }
    .card-information-all p {
        font-size: 15px;
        width: auto;

    }
    .titlee{
        width: auto;
        font-size: 30px !important;
    }
    /* .Single-card:nth-child(2) {
        order: 3;
    } */
    .single-card-title {
        position: absolute;
        left: 0;
        top: 260px;
    }
    /* .responsive{
        display: block;
    }
    .single-card-title{
        display: none;
    } */
    .single-title__actions{
        display: none;
    }
    .responsive{
        display: flex !important;
        gap: 40px;
        padding-left: 30px;
        /* display: flex; */
    }
    /* .categories {
        left: 0px;
        top: 0px;
        position: absolute;
        color: white;
        margin-top: 20px;
        display: flex;
        align-items: center;
        gap: 0px;
        flex-direction: row;
    } */
    .infoTab{
        width: auto !important;
        height: 800px  !important;

    }
    .infoTab div{
        width: auto !important;
        height: auto  !important;
    }
    .infoTab p{
        width: auto !important;
        height: 1200px;
        height: auto  !important;

    }
    .maininformation{
        padding-left: 0px;
    }
    .categories{
        left: 0;
        gap: 10px !important;
    }
    .categories__categories{
        display: flex;
    }
    .Information_tab-actions{
        display: none;
    }
    .infoTab-responsive{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    width: auto;
    height: 200px;
    margin-top: 600px;
    gap: 20px;
    }
    .TimeTable[data-v-44aefee5] {
        display: flex;
        flex-direction: column;
        margin-left: 0px
    }
    .all--timeTable>div {
        width: auto;
    }
    .all--timeTable {
        width: auto;
    }
    .flexTimeTable{
        width: auto;
    }
    .flexActionsTimeTable {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .secondHalf{
        display: none !important;
    }
    .movie-reviews[data-v-44aefee5] {
        color: white;
        padding-left: 0;
        width: auto;
        height: auto;
        margin-bottom: 10px;
    }
    .all-reviews[data-v-44aefee5] {
        display: flex;
        /* row-gap: 30px; */
        flex-direction: column;
    }
    .single-rate {
        height: 250px;
        position: relative;
        border: 1px solid #363644;
        border-width: 0 0 1px 0;
    }
    .firstHalf {
        width: auto;
        height: auto;
        position: relative;
        display: flex;
        border: 1px solid #363644;
        border-width: 0 0 1px 0;
        flex-direction: column;
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
    
    .showMore{
    margin-top: 90px;
    margin-bottom: 40px;
    /* padding-left: 40px; */
    width: 1143px;
    /* padding-left: 180px; */
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