<template>
    <div>
        <h1>Galeria de Fotos</h1>

        <router-link :to="{name: 'fotos', params: {id : item} }"
         v-for="(item, index) of fotoArreglo" :key="index">
            <button >foto {{item}}</button>
        </router-link>

        <Foto />
    </div>
</template>

<script>

import Foto from "@/components/Fotografia.vue";

export default {
    components:{
        Foto
    },
    data(){
        return{
            fotoArreglo: [1,2,3]
        }
    }
}
</script>