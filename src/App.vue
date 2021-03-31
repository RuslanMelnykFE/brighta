<template>
  <div id="app">
    <header-page/>
    <main-page>
      <router-view/>
    </main-page>
    <modal/>
  </div>
</template>

<script>
import HeaderPage from './components/Header/HeaderPage.vue';
import MainPage from './components/Main/MainPage.vue';
import Modal from './components/Modal/Modal.vue';

export default {
  name: 'App',
  components: {
    HeaderPage,
    MainPage,

    Modal,
  },
};
</script>

<style lang="scss">
  @import '@scss/app.scss';
</style>
