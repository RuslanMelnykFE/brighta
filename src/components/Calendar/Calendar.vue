<template>
  <form
    class="calendar-form"
  >
    <calendar-period
      :period_value="period_value"
      @select-period="selectPeriod"
    />
    <div class="calendar-form__calendar calendar">
      <calendar-month
        :number_month="number_month"
        :year="year"
        @prev-month="prevMonth"
        @next-month="nextMonth"
      />
      <calendar-days
        :now_day="now_day"
        :number_month="number_month"
        :year="year"
        :period="period"
        @select-day="selectDay"
      />
      <div class="calendar__actions">
        <button-custom
          text="Отмена"
          @action="reset"
        />
        <button-custom
          type_btn="submit"
          :is_orange="true"
          :is_disabled="!Boolean(form_data)"
          @action="submitData"
          text="Обновить"
        />
      </div>
    </div>
  </form>
</template>

<script>
import getDateMillisec from '@mixins/methods.js';
import ButtonCustom from '@components/Buttons/ButtonCustom.vue';
import CalendarPeriod from './CalendarPeriods.vue';
import CalendarMonth from './CalendarMonth.vue';
import CalendarDays from './CalendarDays.vue';

export default {
  name: 'Calendar',

  components: {
    CalendarPeriod,
    CalendarMonth,
    CalendarDays,
    ButtonCustom,
  },

  mixins: [getDateMillisec],

  data: () => ({
    now_date: null,
    current_date: null,
    number_month: 0,
    year: 2020,
    now_day: 1,
    period: {
      from: '',
      to: '',
    },
    period_value: 'today',
    periods: {},
    form_data: null,
  }),

  created() {
    this.setDate();
    this.createPeriods();
  },

  watch: {
    current_date(newVal) {
      this.number_month = newVal.getMonth();
      this.year = newVal.getFullYear();
    },
    period_value(newVal) {
      const month = this.periods[newVal].to.getMonth();
      this.current_date = new Date(this.now_date.getFullYear(), month);
    },
  },

  methods: {
    setDate() {
      this.now_date = new Date();
      this.number_month = this.now_date.getMonth();
      this.year = this.now_date.getFullYear();
      this.now_day = this.now_date.getDate();
      this.current_date = new Date(this.year, this.number_month, this.now_day);
      this.period = {
        from: this.current_date,
        to: this.current_date,
      };
    },
    createPeriods() {
      this.periods = {
        all: {
          from: new Date(2020, 0, 1),
          to: this.current_date,
        },
        today: {
          from: this.current_date,
          to: this.current_date,
        },
        yesterday: {
          from: new Date(this.year, this.number_month, this.now_day - 1),
          to: new Date(this.year, this.number_month, this.now_day - 1),
        },
        7: {
          from: new Date(this.year, this.number_month, this.now_day - 7),
          to: this.current_date,
        },
        30: {
          from: new Date(this.year, this.number_month, this.now_day - 30),
          to: this.current_date,
        },
        thisMonth: {
          from: new Date(this.year, this.number_month, 1),
          to: this.current_date,
        },
        lastMonth: {
          from: new Date(this.year, this.number_month - 1, 1),
          to: new Date(this.year, this.number_month, 0),
        },
      };
    },
    prevMonth() {
      const prevMonth = this.current_date.getMonth() - 1;
      this.current_date = new Date(this.year, prevMonth);
    },
    nextMonth() {
      const nextMonth = this.current_date.getMonth() + 1;
      this.current_date = new Date(this.year, nextMonth);
    },
    selectDay(val) {
      const { day, from, to } = this.getDateMillisec(val);

      if (day === from || day > from) {
        this.period.to = val;
      }

      if (day < from || day === to) {
        this.period.to = val;
        this.period.from = val;
        this.form_data = this.period;
      }
    },
    selectPeriod(val) {
      this.period_value = val;
      this.period = this.periods[val];
      this.form_data = this.period;
    },
    submitData() {
      this.$store.dispatch('date/cahngePeriod', this.form_data);
      this.reset();
    },
    reset() {
      this.period = {
        from: this.current_date,
        to: this.current_date,
      };
      this.form_data = null;
      this.$store.dispatch('modal/toggleModal', { isOpen: false, name: '' });
    },
  },
};
</script>
