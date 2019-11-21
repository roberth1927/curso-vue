<template>
    <div>
        <form class="form-inline" @submit.prevent="agregarTarea(nombre)">
            <div class="input-group mb-2 mr-sm-2">
            <div class="input-group-prepend">
            <div class="input-group-text">Nombre</div>
            </div>
            <input type="text" v-model="nombre" class="bg-dark text-success form-control">
            </div>
             <button type="submit" class="btn btn-primary mb-2">Agregar</button>
        </form>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name: 'Agregar',
    data(){
        return{
            nombre: ''
        }
    },
    methods:{
        ...mapActions(['agregarTarea'])
    }
}
</script>