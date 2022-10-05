<template>
  <div>
    <!-- Header -->
    <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
      <b-container>
        <div class="header-body text-center mb-7">
          <b-row class="justify-content-center">
            <b-col xl="5" lg="6" md="8" class="px-5">
              <h1 class="text-white"></h1>
              
              <p class="text-lead text-white"></p>
            </b-col>
          </b-row>
        </div>
      </b-container>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1"
             xmlns="http://www.w3.org/2000/svg">
          <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <b-container class="mt--8 pb-5">
      <b-row class="justify-content-center">
        <b-col lg="5" md="7">
          <b-card no-body class="bg-secondary border-0 mb-4">
            <b-card-header class="bg-transparent pb-5"  >
              <div class="text-muted text-center mt-2 mb-3"><H3>Introduzca DNI</H3></div>

              <div class="btn-wrapper text-center">
               
                
              <input type="text" class="m-4 p-4  "  placeholder="Introduzca DNI"  maxlength="9"  required v-model="form.dni"  name="DNI" id="DNI">
            </div>
          </b-card-header>
        <base-button type="primary" native-type="submit" class="m-3 ht-6 p-5" v-on:click="sendEntry()" >Entrada</base-button>
          <base-button type="danger" native-type="submit" class="m-3 wh-6 p-5"  v-on:click="sendExit()"   >Salida</base-button>
           
          </b-card>
          <b-row class="mt-3">
           

            
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  console.log("hola uso consolaaaaz")
import axios from "axios"; 
import moment from 'moment'
import Vue from "vue";
import { ref } from 'vue'

import { max } from "moment";

//let DNI = ref("");

export default {
   data(){
        return {
          form: {
            
              dni: '',
            
          }
        }
    },
  methods:{
    sendEntry: async function(){
      
      await axios.post("http://localhost:5000/users/", { dni: this.form.dni, date: moment().format('LLL') , type:"Entry"}).then((response) => {
        console.log(response.data);
        alert("Hora de entrada  " + moment().format('LLL'));
      window.location.reload();
        
      });
    },
    sendExit: async function () {

      await axios.post("http://localhost:5000/users/", { dni: this.form.dni, date: moment().format('LLL'), type: "Exit" }).then((response) => {
        console.log(response.data);
        window.alert("Hora de salida " + moment().format('LLL'));
        window.location.reload();
        
        
          
        
      });
    }
  }
  
  //reated() {

    
     // console.log(response.data);
     // return response.data;
   // }
  }



</script>
