<template>
    <div>
        <h1>ruta protegida</h1>
        {{usuario.email}}
        <h3>Bienvenido amigo {{usuario.email}} </h3>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: 'Inicio',
    computed:{
        ...mapState(['usuario'])
    }
}
</script>