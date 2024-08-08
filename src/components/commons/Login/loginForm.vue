
<template>
  <form action="" v-if="!newislogged || !SingleUser ">
    <input type="text" placeholder="username" v-model="username"> <br> <br>
    <input type="password" placeholder="password" v-model="password"> <br> <br>
    <button @click.prevent="login()">Log-in</button> <br><br>
    <router-link to="/register"><button class="reg">Register</button></router-link>
  </form>
  <div v-if="newislogged && SingleUser" class="user-info">
    <!-- <p>username {{SingleUser.username}}</p> -->
    <div>
    <p>{{SingleUser.name}} {{SingleUser.surname}}</p>
    </div>
    <div>
      <p>Username:{{SingleUser.username}}</p>
      <p>Name:{{SingleUser.name}}</p>
      <p>Surname:{{SingleUser.surname}}</p>
      <p>Phone: +{{SingleUser.number}}</p>
    <button @click="logout()">Log Out</button> <br><br>
    <button @click="Delete()" v-if="SingleUser.username !== 'admin'" class="del">Delete Account</button> <br v-if="SingleUser.username !== 'admin'"> <br v-if="SingleUser.username !== 'admin'" >
    <RouterLink to="/edit"><button>Edit Account</button></RouterLink>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted,ref,watch } from 'vue'
import {useRouter} from 'vue-router'
import {Users} from '../../../stores/users'


const router = useRouter()
const username = ref(null)
const password = ref(null)
const users = Users()
// const isLogged  = ref(false)
// localStorage.getItem('islogged')
const newislogged = ref(false)

const singleusername = ref('')
const AllUsers = computed(()=>{
    return users.getAllUsers
})

const SingleUser = computed(()=>{
    console.log(JSON.parse(localStorage.getItem('SingleUser')))
    return JSON.parse(localStorage.getItem('SingleUser'))
})



watch(() => localStorage.getItem('islogged'), (newValue, oldValue) => {
  if (newValue !== oldValue) {
    alert(`Local storage value changed from ${oldValue} to ${newValue}`)
  }
})

const login = function(){
    const user = AllUsers.value.find(user => user.username == username.value)
    if(user){
        if(user.password === password.value){
            singleusername.value = user.username
        //    isLogged.value = true
           localStorage.setItem('islogged',true)
           newislogged.value = JSON.parse(localStorage.getItem('islogged'))
           console.log(SingleUser)
           localStorage.setItem('SingleUser',JSON.stringify(users.getAllUsers.find(user => user.username == singleusername.value)))
           location.reload()
           location.href = '/'
        }else{
            alert('password is incorrect')
        }
    }
    else{
        alert('user is not defined')
    }
}
const logout = function(){
    localStorage.setItem('islogged',false)
    localStorage.setItem('SingleUser',false)
    newislogged.value = JSON.parse(localStorage.getItem('islogged'))
    location.href = '/'
}
const Delete = function(){
  let AllUsers = JSON.parse(localStorage.getItem('AllUsers'))
  AllUsers = AllUsers.filter(user=>user.username !== SingleUser.value.username)
  if(confirm('are you sure you want to delete your account?')){
    localStorage.setItem('AllUsers',JSON.stringify(AllUsers))
    localStorage.setItem('SingleUser',false)
    location.href = '/'
  }else{
    return
  }
}


onMounted(()=>{
// localStorage.setItem('islogged',false)
newislogged.value = JSON.parse(localStorage.getItem('islogged'))
console.log(typeof JSON.parse(localStorage.getItem('islogged')))
users.setAllCards(JSON.parse(localStorage.getItem('AllUsers')))

})


</script>

<style scoped lang="scss">
.user-info{
  margin-top: 40px;
  margin-left: 40px;
  color: white;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    column-gap: 55px;
    &>div:nth-child(2){
      border-left: 1px solid white;
      padding-left: 30px;
    }
}
.del{
  background: red;
  border: none;
}
p{
  color: white;
  font-size: 25px;
}
form{
  margin-top: 80px;
  margin-left: 30px;
}
input{
  width: 400px;
  height: 40px;
}
button{
  background: gray;
  width: 313px;
  color: white;
  height: 40px;
  cursor: pointer;
}
.reg{
  background: green;
  border: none;
}
</style>