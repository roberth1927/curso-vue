<template>
    <div>
        <h1>Ingreso de Usuarios</h1>
        <form @submit.prevent="ingresoUsuario({email, pass})">
            <input type="email" v-model="email">
            <input type="password" v-model="pass">
            <button class="bg-dark border border-warning text-success" type="submit">Ingresar</button>
        </form>
        <p>{{error}}</p>
    </div>
</template>


<script>

import { mapActions, mapState } from "vuex";

export default {
    name: 'Ingreso',
    data(){
        return{
            email : '',
            pass: ''
        }
    
    },
    methods:{
        ...mapActions(['ingresoUsuario'])
    },
    computed:{
        ...mapState(['error'])
    }
}
</script>