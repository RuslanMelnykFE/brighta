<template>
  <div class="calendar__month month">
    <button
      type="button"
      class="month__btn month__btn_prev"
      aria-label="Button prev"
      @click.prevent="$emit('prev-month')"
    >
      <i class="month__icon">
        <icon-prev/>
      </i>
    </button>
    <span class="month__value">{{ month_year }}</span>
    <button
      type="button"
      class="month__btn month__btn_next"
      aria-label="Button next"
      @click.prevent="$emit('next-month')"
    >
      <i class="month__icon">
        <icon-next/>
      </i>
    </button>
  </div>
</template>

<script>
import IconPrev from '@images/svg/prev.svg';
import IconNext from '@images/svg/next.svg';

export default {
  name: 'CalendarMonth',

  components: {
    IconPrev,
    IconNext,
  },

  props: {
    number_month: {
      type: [Number, String],
      default: 0,
    },
    year: {
      type: [Number, String],
      default: 2020,
    },
  },

  data: () => ({
    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  }),

  computed: {
    month_year() {
      return `${this.months[this.number_month]}, ${this.year}`;
    },
  },
};
</script>
