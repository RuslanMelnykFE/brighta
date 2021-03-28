<template>
  <div id="app">
    <header-page/>
    <main-page>
      <users/>
    </main-page>
  </div>
</template>

<script>
import HeaderPage from './components/Header/HeaderPage.vue';
import MainPage from './components/Main/MainPage.vue';
import Users from './views/Users.vue';

export default {
  name: 'App',
  components: {
    HeaderPage,
    MainPage,
    Users,
  },
};
</script>

<style lang="scss">
  @import '@scss/app.scss';
</style>
