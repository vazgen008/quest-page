<template>
  {{username}}
</template>

<script setup>
import {defineProps, onBeforeMount, onMounted,computed} from 'vue'
import {useRouter} from 'vue-router'
import {Users} from '../stores/users'
const props = defineProps({
    username:{
        required:true
    },  
})
const router = useRouter()
const users = Users()
const AllUsers = computed(()=>{
    return users.getAllUsers.find(user => user.username === props.username)
})

onMounted(()=>{
    if(prompt('for privacy write your password again') == AllUsers.value.password) {

    }else{        
        router.push({ name: 'login'});
    }
})
</script>

<style>

</style>