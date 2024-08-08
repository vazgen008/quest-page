<template>
  <form action="">
    <input v-model="changedUser.name" type="text" placeholder="name" >
    <input v-model="changedUser.surname" type="text" placeholder="surname" >
    <input v-model="changedUser.username" type="text" placeholder="username" :disabled="disabled" >
  </form>
    <button @click="Edit()">Edit</button>
</template>

<script setup>
import { ref,computed, onMounted } from "vue"

let user = JSON.parse(localStorage.getItem('SingleUser'))
let changedUser = ref({
    name:user.name,
    surname:user.surname,
    username:user.username
})
const SingleUser = computed(()=>{
    console.log(JSON.parse(localStorage.getItem('SingleUser')))
    return JSON.parse(localStorage.getItem('SingleUser'))
})
const allusers = JSON.parse(localStorage.getItem('AllUsers'))
const Edit = function(){
    if(Object.values(changedUser.value).every(value => !!value) && SingleUser.value.username == changedUser.value.username){
        const geteduser = JSON.parse(localStorage.getItem('SingleUser'))
        const SingleUser =  JSON.parse(localStorage.getItem('AllUsers')).find(user=>user.username == geteduser.username)
        SingleUser.name = changedUser.value.name
        SingleUser.surname = changedUser.value.surname
        const AllUsers = JSON.parse(localStorage.getItem('AllUsers')).filter(user=>user.username!==geteduser.username)
        AllUsers.push(SingleUser)
        localStorage.setItem('AllUsers',JSON.stringify(AllUsers))
        localStorage.setItem('SingleUser',JSON.stringify(SingleUser))
        location.reload() 
    }else if(Object.values(changedUser.value).every(value => !!value) && !allusers.some(user => user.username == changedUser.value.username)){
        console.log('axmax')
        const geteduser = JSON.parse(localStorage.getItem('SingleUser'))
        const SingleUser =  JSON.parse(localStorage.getItem('AllUsers')).find(user=>user.username == geteduser.username)
        const currentDate = new Date();
        const futureDate = new Date(currentDate.getTime() + 10 * 60 * 1000);
        console.log(futureDate)
        SingleUser.username = changedUser.value.username
        SingleUser.name = changedUser.value.name
        SingleUser.surname = changedUser.value.surname
        console.log(SingleUser.username)
        SingleUser.disabledTill = String(futureDate)
        const AllUsers = JSON.parse(localStorage.getItem('AllUsers')).filter(user=>user.username!==geteduser.username)
        AllUsers.push(SingleUser)
        localStorage.setItem('AllUsers',JSON.stringify(AllUsers))
        localStorage.setItem('SingleUser',JSON.stringify(SingleUser))
        location.reload() 
    }
    else{
        alert('you did not fill all inputs or this username is already excist')
    }

}
const disabled = computed(()=>{
  const futuredDate = new Date(SingleUser.value.disabledTill)
  const date = new Date()
  if(futuredDate>date){
    return true
  }else{
    return false
  }
})

onMounted(()=>{
  let obj = {}
  console.log(Object.keys(obj))
})

</script>

<style scoped>
form{
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    padding-left: 40px;
    row-gap: 10px;
}
input{
    width: 400px;
    height: 40px;
    padding-left: 30px;
    box-sizing: border-box;
}
button{
  background: gray;
  width: 313px;
  color: white;
  height: 40px;
  cursor: pointer;
  margin: 20px 0 0 40px;
}
</style>