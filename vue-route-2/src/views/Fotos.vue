<template>
    <div>
        <h1>Galeria de Fotos</h1>

        <!-- enviar a esta ruta "fotos", con estos parametros -->
        <router-link :to="{name: 'fotos', params: {id : item} }"
         v-for="(item, index) of fotoArreglo" :key="index">
            <button >foto {{item}}</button>
        </router-link>

        <Foto />

        <button @click="home">Home</button>
        <button @click="anterior">Ant</button>
        <button @click="siguiente">Sgt</button>

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
            fotoArreglo: [1,2,3,4,5,6,7,8,9]
        }
    },
    methods:{
        home(){
            this.$router.push('/')
        },
        anterior(){
            this.$router.go(-1)
        },
        siguiente(){
            this.$router.go(+1)            
        }
    }
}
</script>