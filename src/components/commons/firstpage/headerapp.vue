<template>
  <div class="body">
    <NavBar/>
    <div id="header">
        <div class="header__img">
            <img src="../img/axjik (2).png" alt="">
        </div>
        <div class="header__description">
            <p>Собираешься на свой первый квест или хочешь попробовать что-то новое в квестовом мире Клаустрофобии? Найди приключение по вкусу буквально за пару кликов! Мы собрали все популярные игры в одном каталоге и составили рейтинг лучших квестов в Москве по оценке игроков, чтобы сделать поиск еще проще и удобнее. <br> <br> 
                Захватывающие испытания и увлекательные головоломки для абсолютного погружения в альтернативную реальность. Все, что нужно для незабываемого отдыха!</p>
        </div>
    </div>

    <div class="actions-filters">
    <div class="actions-filters__actions">
        <div><p>Перформанс</p></div>
        <div><p>Для компании</p></div>
        <div><p>Для детей</p></div>
        <div class="none"><p>Антуражные</p></div>
        <div class="none"><p>Для новичков</p></div>
        <div class="none"><p>С актерами</p></div>
        <div class="none"><p>Для подростков</p></div>
        <div class="none"><p>Корпоративные</p></div>
        <div class="none"><p>Детективные</p></div>
        <div class="none"><p>Исторические</p></div>
        <div class="none"><p>Недорогие</p></div>
        <div class="actions-filters__actions__dropdown none"><p>Все варианты <i class="fa fa-angle-down" aria-hidden="true"></i></p></div>
    </div>
    <div class="actions-filters__filters">
        <div class="actions-filters__filters__more">
            <p class="none"><i class="fa fa-filter" aria-hidden="true"></i>Расширенный фильтр</p>
        </div>
        <div class="actions-filters__filters__clear">
            <p class="none"><i class="fa fa-times" aria-hidden="true"></i>Сбросить фильтр</p>
        </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import NavBar from './headerNavBar.vue'

</script>


<style scoped>

/* header */

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
i{
    font-size: 30px;
    cursor: pointer;
    color: white;
}
.body{
    background-color: #181823;
    box-sizing: border-box;
}
#header{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 40px 0 0;
}
#header div p{
    width: 569.11px;
height: 212px;
top: 321.9px;
left: 860px;
font-family: Formular;
font-size: 16px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
color: lightgray;

}
.header__img{
 width: 657.79px;
height: 507.62px;
top: 145.59px;
left: 884.1px;

}

/* actions */
.actions-filters__actions{
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
    justify-content: space-evenly;
    grid-row-gap: 10px;
}
.actions-filters__actions div{
width: 178px;
height: 47px;
top: 687.38px;
left: 280.1px;
border-radius: 5px;
border: 1px;
border:  1px solid white;
cursor: pointer;

}
.actions-filters__actions div p{
    width: 113px;
height: 17px;
font-family: Formular;
font-size: 14px;
font-weight: 400;
line-height: 17px;
letter-spacing: 0em;
text-align: right;
color: white;
}

.actions-filters__actions__dropdown i{
    margin-top: px;
    font-size: 20px;
    margin-left: 5px;
    color: white;
}
.actions-filters__actions__dropdown p{
    margin-left: 30px;
}
.actions-filters__filters{
    margin-top: 10px;
    display: flex;
    color: white;
   justify-content: space-between;
   padding: 0 40px;
}
.actions-filters__filters div{
    cursor: pointer;
}

.actions-filters{
    display: flex;
    flex-direction: column;
}
a{
  color: white;
}
</style>


<style scoped>
@media only screen and (min-width: 375px) and (max-width: 550px){
    #header{
        width: 375px;
        height: 680px;
        color: red;
        display: flex;
        flex-direction: column;
    }
    .header__img{
        width: 375px;
        height: 289px;
    }
    .header__img img{
        width: 375px;
        height: 289px;
    }
    .header__description{
        width: 358px;
        height: 296px;
    }
    .header__description p{
        width: auto !important;
        height: auto !important;
    }
    .actions-filters__actions :not(:nth-child(1),:nth-child(2),:nth-child(3)){
        display: none;
    }
    .actions-filters__actions div{
        width: 150px !important;
    }
    .actions-filters__filters div[data-v-8a98e71c] {
        cursor: pointer;
        font-size: 15px;
    }  
    .actions-filters__filters {
    margin-top: 10px;
    display: flex;
    color: white;
    justify-content: space-between;
    padding: 0 30px;
    gap: 10px;
} 
    
}
</style>