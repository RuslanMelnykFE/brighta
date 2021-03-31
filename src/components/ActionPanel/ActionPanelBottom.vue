<template>
  <div
    v-show="period.length"
    class="action-panel__bottom"
  >
    <ul class="action-panel__filters-list filters-list">
      <li class="filters-list__item">
          <span class="filters-list__text">{{ period }}</span>
          <button class="filters-list__btn-del" aria-label="Button delete">
            <span class="filters-list__icon-close"></span>
          </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ActionPanelBottom',

  data: () => ({
    months: ['янв', 'Фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'нояб', 'дек'],
  }),

  computed: {
    ...mapGetters({
      date: 'date/PERIOD',
    }),
    period() {
      if (!this.date) {
        return '';
      }

      const { from, to } = this.date;
      const formatedFrom = this.getDate(from).split('/');
      const formatedTo = this.getDate(to).split('/');
      const year = (formatedFrom[2] !== formatedTo[2]) ? ` ${formatedFrom[2]} г.` : '';

      const fromString = `${formatedFrom[0]} ${this.months[+formatedFrom[1]]}${year}`;
      const toString = `${formatedTo[0]} ${this.months[+formatedTo[1]]} ${formatedTo[2]} г.`;
      return `${fromString} - ${toString}`;
    },
  },

  methods: {
    getDate(value) {
      const date = new Date(value);
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();

      return `${day}/${month}/${year}`;
    },
  },
};
</script>
