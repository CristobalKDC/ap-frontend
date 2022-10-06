<template>
  <div>
    <!-- Header -->
    <!-- REGISTRO DE ENTRADAS Y SALIDAS DE USUARIOS -->
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
        <b-col lg="4" md="7">
          <b-card no-body class="bg-secondary border-0 mb-0">
            <b-card-header class="bg-transparent pb-5 "  >
              
              
              <div class="text-muted text-center mt-2 mb-3"><H3>Introduzca DNI</H3></div>

              <div class="btn-wrapper text-center">
              <input  class="m-4 p-2   "
                          type = 'text'
                          name = 'DNI'
                          v-model = form.dni
                          minlength="9"
                          maxlength="9"
                          required="true"
                          placeholder="Coloque DNI"
                          >
                        </div>
              <div class="btn-wrapper text-center">
                <button class="btn  btn-icon bg-danger" type="submit" @click="registroEntry">
                  
                  <span  class="btn-inner--text"  >Entrar</span>
                </button>
                <button  class="btn  btn-icon bg-success" @click="registroExit">
                 
                  <span class="btn-inner--text"  >Salir</span>
                </button>
              </div>
            
            </b-card-header>
            
          </b-card>
        
          <b-row class="mt-3">
           

          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment"


  export default {
    
    data() {
      return {
      
        form:{
          dni: '',
         
        }
  }},


    methods: {
      
      registroEntry() {
        //console.log(Date()+ 'Entry');
        const response = axios.post("http://localhost:5000/users/", {dni:this.form.dni, date: moment().format(), type: 'Entry'})
        .then((response)=> {console.log(response.data)});
        
        alert('Hora de entrada registrada: '+moment().format());
         window.location.reload()
        
        
      },
      registroExit() {
        //console.log(Date()+ 'Entry');
        const response = axios.post("http://localhost:5000/users/", {dni:this.form.dni, date: moment().format(), type: 'Exit'})
        .then((response)=> {console.log(response.data)});
        window.location.reload();
      },
      
    },
  
}
  
  
</script>