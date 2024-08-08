<template>
<button :class="'btn-'+type" :style="'width:'+width+';' + 'height:'+height">
  <i :class="'fa fa-'+iconName" aria-hidden="true"></i>
  {{label}}
</button>
</template>

<script setup>
import {defineProps} from 'vue'
const props = defineProps({
  type:{
    type: String,
    default: 'primary',
  },
  label: {
      type: String,
      required: true
    },
  iconName:{
    type:String,
    required:false
  },
  width:{
    type:String,
    required:true
  },
  height:{
    type:String,
    required:true
  },
});
// return props
</script>

<style>
.btn-reserve{
    border-radius: 3px;
background-color: #2B8D58;
color: white;
border: none;
cursor: pointer;
}
.btn-unreserve{
    border-radius: 3px;
background-color: red;
color: white;
border: none;
}
.btn-gift{
    background: #8E86E8;
    border: 1px solid black;
}
.btn-simpleGift{
  background: none;
  color: white;
  border: none;
font-size: 16px;

}
.btn-simpleGift i {
  color: #8E86E8 !important;
    font-size: 16px;
}
.btn-reserve i{
  color: white;
  font-size: 16px;
}
.btn-bordered{
  background: none;
  color: white;
  border: 1px solid #363644;
}
</style>
  <!-- <button :class="'btn-'type"></button> -->
