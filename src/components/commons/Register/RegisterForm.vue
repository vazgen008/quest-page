<template>
  <form action="" v-if="!BasicInfoFiled">
    <input type="text" placeholder="Name" v-model="BasicInfo.name">
    <span v-if="errors.numberError == 'fill the inputs'">{{errors.numberError}}</span> 
    <input type="text" placeholder="Surname" v-model="BasicInfo.surname"> 
    <span v-if="errors.numberError == 'fill the inputs'">{{errors.numberError}}</span> 
    <input type="email" placeholder="email" v-model="BasicInfo.email"> 
    <span v-if="errors.emailError">{{errors.emailError}}</span> 
    <input type="number" placeholder="Phone Number (+374xxxxxxxx)" v-model="BasicInfo.number"> 
    <span v-if="errors.numberError">{{errors.numberError}}</span> 
    <router-link to="/register" @click="BasicNext()"><button class="reg">Next</button></router-link>
  </form>
  
  <form action="" v-if="BasicInfoFiled && !MainFiled">
    <input type="text" placeholder="Username" v-model="MainInfo.username"> 
    <span v-if="errors.usernameError">{{errors.usernameError}}</span> 
    <input type="password" placeholder="Password" v-model="MainInfo.password"> 
    <span v-if="errors.passwordError">{{errors.passwordError}}</span> 
    <input type="password" placeholder="Verify Password" v-model="MainInfo.paswordVerify">
    <span v-if="errors.passwordVerifyError">{{errors.passwordVerifyError}}</span> 
    <router-link to="/register" @click="MainPrev()"><button class="reg">Prev</button></router-link>
    <router-link to="/register" @click="MainNext()"><button class="reg">Next</button></router-link>
  </form>
  <h2>already have account?</h2>
  <router-link to="/login"><h4>Log in</h4></router-link>
  
</template>

<script setup>
import { ref } from "vue";


const errors = ref({
  emailError:'',
  numberError:'',
  usernameError:'',
  passwordError:'',
  passwordVerifyError:'',
})

// basic registration check

const BasicInfoFiled = ref(false)


const BasicInfo = ref({
    name:'',
    surname:'',
    email:'',
    number:''
})
const BasicNext = function(){
  console.log(BasicInfo,'Basicinfo')
    if(Object.values(BasicInfo).every(value => !!value)){
       const allusers = JSON.parse(localStorage.getItem('AllUsers'))
       if(allusers.some(user => user.email == BasicInfo.value.email)){
        errors.value.emailError = 'someone is already registered with this email'
       }else if(BasicInfo.value?.number?.toString().length !== 11){
          errors.value.numberError = 'number must have 12 characters'
       }
       else if(allusers.some(user => user.number == BasicInfo.value.number) || !BasicInfo.value?.number?.toString().startsWith(+374) ){
          errors.value.numberError = 'someone is already registered with this phone number or its not like example'
       }else{
        Object.keys(errors.value).forEach(key => {
          this.errors[key] = '';
        });
          BasicInfoFiled.value = true
          MainFiled.value = false
       }
    }else{
      Object.keys(errors.value).forEach(key => {
        this.errors[key] = 'fill the inputs';
      });
    }
}


// Finall registration check
const MainInfo = ref({
    username:'',
    password:'',
    paswordVerify:'',
})
const MainFiled = ref(false)

const MainPrev = function(){
    BasicInfoFiled.value = false
    MainFiled.value = true
}

const MainNext = function(){
    if(Object.values(this.MainInfo).every(value => !!value)){
       const allusers = JSON.parse(localStorage.getItem('AllUsers'))

       if(allusers.some(user => user.username == MainInfo.value.username)){
         errors.value.usernameError = `${MainInfo.value.username} this  username is already taken`
       }else if(MainInfo.value.username.length < 6){
         errors.value.usernameError = `'username must have at least 6 characters'`
       }else if(MainInfo.value.password.length < 6 ){
       errors.value.passwordError = 'password have to be at least 6 characters'
       }else if(MainInfo.value.password !== MainInfo.value.paswordVerify){
       errors.value.passwordVerifyError = 'passwords is not the same'
       }
       else{
          const Movies = JSON.parse(localStorage.getItem('card'))
          const cards = {
            popularQuests:Movies
          }
          const combinedInfo = {...MainInfo.value,...BasicInfo.value,...cards };
          const AllUsers = JSON.parse(localStorage.getItem('AllUsers'))
          AllUsers.push(combinedInfo)
          console.log(AllUsers)
          localStorage.setItem('AllUsers',JSON.stringify(AllUsers))
          alert('you registered successfully🤩')
          location.href = '/login'
       }
    }
}
</script>

<style scoped>
span{
  color: red;
  font-size: 18px;
}
a{
  color: white;
}
h2,h4{
  color: white;
  padding-left: 35px;
}
p{
  color: white;
  font-size: 25px;
}
form{
  margin-top: 80px;
  margin-left: 30px;
      display: flex;
    flex-direction: column;
    row-gap: 12px;
}
input{
  width: 400px;
  height: 40px;
  padding: 20px;
  box-sizing: border-box;
}
button{
  background: gray;
  width: 400px;
  color: white;
  height: 40px;
  cursor: pointer;
}
</style>