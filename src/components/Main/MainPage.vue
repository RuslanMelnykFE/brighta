<template>
  <main
    class="main"
    :style="{ height: `${main_height}px` }"
  >
    <sidebar/>
    <article class="main__container">
      <slot/>
    </article>
  </main>
</template>

<script>
import Sidebar from '@components/Sidebar/Sidebar.vue';

export default {
  name: 'MainPage',

  components: {
    Sidebar,
  },

  data: () => ({
    main_height: 0,
  }),

  mounted() {
    this.setHeightMain();
    window.addEventListener('resize', this.setHeightMain);
  },

  methods: {
    setHeightMain() {
      const vh = window.innerHeight;
      const header = document.querySelector('.js-header');

      this.main_height = vh - header.offsetHeight;
    },
  },
};
</script>
