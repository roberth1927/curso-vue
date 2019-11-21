<template>
    <div>
        <form class="form-inline" @submit.prevent="editarTarea(tarea)">
            <div class="input-group mb-2 mr-sm-2">
            <div class="input-group-prepend">
            <div class="input-group-text">Nombre</div>
            </div>
                <input type="text" class="form-control" v-model="tarea.nombre">
            </div>
            <button type="submit" class="btn btn-primary mb-2">Editar</button>
            {{tarea}}
        </form>
    </div>
</template>
 
<script>

import {mapActions, mapState} from 'vuex'

export default {
    name: 'Editar',
    data(){
        return{
            //le asigno a id el parametro de la ruta
            id: this.$route.params.id
        }
    },
    methods:{
        ...mapActions(['getTarea', 'editarTarea'])
    },
    created(){ 
        //se ejecuta al crear esta vista
       this.getTarea(this.id)
    },
    computed:{
        ...mapState(['tarea'])
    }
}
</script>