<template>
  <div>
    <strong>Registro de Usuarios</strong>
    <form @submit.prevent="crearUsuario({email:email, pass:pass1})">
      <div>
        <input class="bg-dark border border-warning text-warning" type="email" v-model="email" placeholder="Email">
        <input class="bg-dark border border-warning text-warning" type="password" v-model="pass1" placeholder="Pass">
        <input class="bg-dark border border-warning text-warning" type="password" v-model="pass2" placeholder="Pass">
      </div>
       <div class="container">
          <button class="btn btn-outline-danger" type="submit" :disabled="!desactivar">Crear Usuario</button>
       </div>
    </form>
    <p>{{error}}</p>
  </div>
</template>

<script>

import { mapActions, mapState } from "vuex";

export default {
  name : 'Registro',
  data(){
    return{
      email : '',
      pass1 : '',
      pass2 : ''
    }
  },
  methods:{
    ...mapActions(['crearUsuario'])
  },
  computed:{
    ...mapState(['error']),
    desactivar(){
      return this.pass1 === this.pass2 && this.pass1 != ''
    }
  }
}
</script>