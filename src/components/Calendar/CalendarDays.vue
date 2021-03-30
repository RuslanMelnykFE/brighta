<template>
  <div class="calendar__days">
    <ul class="calendar__week">
      <li v-for="(day, idx) in week"
        :key="`day-week-${idx}`"
        class="calendar__day"
      >{{ day }}</li>
    </ul>
    <ul class="calendar__days-list">
      <li
        v-for="(day, idx) in days_list"
        :key="`day-${idx}`"
        class="calendar__day"
        :class="toggleClass(day.value, day.notThisMonth)"
      >
        <button
          class="calendar__btn-day"
          :class="toggleActive(day.value)"
          :data-day="day.value"
          @click.prevent="$emit('select-day', day.value)"
        >
          {{ day.number }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import getDateMillisec from '@mixins/methods.js';

export default {
  name: 'CalendarDays',

  mixins: [getDateMillisec],

  props: {
    now_day: {
      type: [Number, String],
      default: 0,
    },
    number_month: {
      type: [Number, String],
      default: 0,
    },
    year: {
      type: [Number, String],
      default: 2020,
    },
    period: {
      type: Object,
    },
  },

  data: () => ({
    week: ['Пн', 'Пн', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
  }),

  computed: {
    days_month_prev() {
      return new Date(this.year, this.number_month, 0).getDate();
    },
    days_month() {
      return new Date(this.year, this.number_month + 1, 0).getDate();
    },
    days_month_next() {
      return new Date(this.year, this.number_month + 2, 0).getDate();
    },
    first_day_week() {
      return new Date(this.year, this.number_month, 0).getDay();
    },
    number_cells() {
      const used = this.first_day_week + this.days_month;
      return Math.ceil(used / 7) * 7;
    },
    days_list() {
      let list = [];

      if (this.first_day_week > 0) {
        // eslint-disable-next-line no-plusplus
        for (let index = 0; index < this.first_day_week; index++) {
          const number = this.days_month_prev - index;
          list.push({
            value: new Date(this.year, this.number_month - 1, number),
            number,
            notThisMonth: true,
          });
        }
      }

      list = this.createDaysList({
        arr: list,
        endPoint: this.days_month + 1,
        month: this.number_month,
        notThisMonth: false,
      });

      if (list.length < this.number_cells) {
        const missingQuantity = this.number_cells - list.length + 1;
        list = this.createDaysList({
          arr: list,
          endPoint: missingQuantity,
          month: this.number_month + 1,
          notThisMonth: true,
        });
      }
      return list;
    },
  },

  methods: {
    createDaysList({
      arr, endPoint, month, notThisMonth,
    }) {
      const list = arr;

      // eslint-disable-next-line no-plusplus
      for (let index = 1; index < endPoint; index++) {
        list.push({
          value: new Date(this.year, month, index),
          number: index,
          notThisMonth,
        });
      }

      return list;
    },
    toggleClass(value, notThisMonth) {
      const { day, from, to } = this.getDateMillisec(value);
      const hasPeriod = day > from && day < to;

      return {
        period: hasPeriod,
        from: day === from,
        to: day === to,
        today: from === to,
        'not-this': notThisMonth,
      };
    },
    toggleActive(value) {
      const { day, from, to } = this.getDateMillisec(value);

      return {
        active: day === from || day === to,
      };
    },
  },
};
</script>
