<template>
    <div>
        <h1>Lista de Tareas</h1>
    </div>
</template>

<script>
import {mapAccions} from 'vuex'
export default {
   name: 'Inicio',
   methods:{
       ...mapAccions(['getTareas'])
   },
   created(){
       this.getTareas()
   }
}
</script>