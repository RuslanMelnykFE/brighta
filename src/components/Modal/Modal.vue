<template>
  <div
    v-show="modal.isOpen"
    class="modal"
  >
    <div class="modal__container">
      <components :is="modal.name"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Calendar from '@components/Calendar/Calendar.vue';

export default {
  name: 'Modal',

  components: {
    Calendar,
  },

  computed: {
    ...mapGetters({
      modal: 'modal/MODAL',
    }),
  },
};
</script>
