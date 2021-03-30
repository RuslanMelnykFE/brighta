<template>
  <section class="action-panel">
    <panel-top/>
    <panel-bottom/>
  </section>
</template>

<script>
import PanelTop from './ActionPanelTop.vue';
import PanelBottom from './ActionPanelBottom.vue';

export default {
  name: 'ActionPanel',

  components: {
    PanelTop,
    PanelBottom,
  },
};
</script>
