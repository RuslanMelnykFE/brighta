<template>
  <section class="action-panel">
    <div class="action-panel__filters">
      <button-arrow
        text_btn="За 1 день"
        class="action-panel__btn-calendar"
      >
        <i class="btn-arrow__icon action-panel__icon">
          <icon-calendar class="action-panel__svg"/>
        </i>
      </button-arrow>
      <button-arrow
        text_btn="Фильтр"
        class="action-panel__btn-filter"
      >
        <i class="btn-arrow__icon action-panel__icon">
          <icon-filter class="action-panel__svg"/>
        </i>
      </button-arrow>
    </div>
    <div class="action-panel__auploads">
      <button-custom
        text="Выгрузить"
        class="action-panel__btn"
      />
      <button-custom
        text="Добавить контакты"
        :is_orange="true"
        class="action-panel__btn"
      />
    </div>
  </section>
</template>

<script>
import ButtonArrow from '@components/Buttons/ButtonArrow.vue';
import ButtonCustom from '@components/Buttons/ButtonCustom.vue';
import IconCalendar from '@images/svg/calendar.svg';
import IconFilter from '@images/svg/filter.svg';

export default {
  name: 'ActionPanel',

  components: {
    ButtonArrow,
    ButtonCustom,
    IconCalendar,
    IconFilter,
  },
};
</script>
