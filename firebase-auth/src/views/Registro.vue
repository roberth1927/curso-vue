<template>
  <div>
    <strong>Registro de Usuarios</strong>
    <form>
      <div>
        <input class="bg-dark border border-warning text-warning" type="email" v-model="email">
        <input class="bg-dark border border-warning text-warning" type="password" v-model="pass1">
        <input class="bg-dark border border-warning text-warning" type="pasword" v-model="pass2">
      </div>
       <div class="container">
      <button class="btn btn-outline-danger" type="submit">Crear Usuario</button>
       </div>
    </form>
  </div>
</template>
<script>
export default {
  name : 'Registro',
  data(){
    return{
      email : '',
      pass1 : '',
      pass2 : ''
    }
  }
}
</script>