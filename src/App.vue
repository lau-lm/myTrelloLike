<template>
  <div id="app">

    <div class="row">
      <navbar></navbar>
      <router-view></router-view>
      <add-form></add-form>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'
  import List from '@/components/List.vue'
  import Form from '@/components/Form.vue'


  export default {
    name: 'app',
    components: { navbar: Navbar, list: List, addForm: Form }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>