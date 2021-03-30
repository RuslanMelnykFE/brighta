<template>
  <ul class="calendar-form__periods">
      <period
        v-for="(period, idx) in periods"
        :key="`period-${idx}`"
        :checkbox_name="`period-${period.id}`"
        :checkbox_value="period.id"
        :is_checked="period.id === selected_period"
        :label="period.text"
        v-model="selected_period"
      />
  </ul>
</template>

<script>
import Period from './CalendarPeriod.vue';

export default {
  name: 'CalendarPeriods',

  components: {
    Period,
  },

  props: {
    period_value: {
      type: String,
      default: 'today',
    },
  },

  data: () => ({
    periods: [
      {
        id: 'all',
        text: 'Весь срок',
      },
      {
        id: 'today',
        text: 'Сегодня',
      },
      {
        id: 'yesterday',
        text: 'Вчера',
      },
      {
        id: '7',
        text: 'Последние 7 дней',
      },
      {
        id: '30',
        text: 'Последние 30 дней',
      },
      {
        id: 'thisMonth',
        text: 'В этом месяце',
      },
      {
        id: 'lastMonth',
        text: 'Прошлый месяц',
      },
    ],
  }),

  computed: {
    selected_period: {
      get() {
        return this.period_value;
      },
      set(val) {
        this.$emit('select-period', val);
      },
    },
  },
};
</script>
