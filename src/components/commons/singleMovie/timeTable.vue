<template>
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

                <div class="addNewReview">
                    <span><i class="fa fa-comments-o"></i>Еще отзывы</span>
                    <buttonComponent  type="bordered" label="Написать отзыв"  :width="'180px'" :height="'40px'"></buttonComponent>
                </div>
            </div>
        </div>
</template>

<script setup>
import buttonComponent from '../../ui/buttonui.vue'
import {reviews} from '@/stores/reviews.js'
import {ref,onMounted,computed} from 'vue'

const reviewsAll = reviews()

const reviewPeopleFirstHalf = computed(()=>{
    return reviewsAll.PeoplesReviews.slice(0,3)
})


const reviewPeopleSecondHalf = computed(()=>{
    console.log(reviewsAll.PeoplesReviews.slice(3))
    return reviewsAll.PeoplesReviews.slice(3)
})

</script>

<style>

</style>