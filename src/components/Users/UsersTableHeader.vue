<template>
  <div class="users-table__header users-table__row">
    <div class="users-table__column users-table__column_checkbox">
      <checkbox
        checkbox_name="users"
      />
    </div>
    <div class="user-table__column users-table__column_data">
      <div
        v-for="(text, idx) in text_header"
        :key="`header-column-${idx}`"
        class="users-table__subcolumn"
      >
        <span class="users-table__text">{{ text }}</span>
      </div>
    </div>
    <div class="users-table__column users-table__column_settings">
      <button-arrow
        text_btn="Отобразить"
        text_btn_add="15"
      />
    </div>
  </div>
</template>

<script>
import Checkbox from '@components/FormElements/Checkbox.vue';
import ButtonArrow from '@components/Buttons/ButtonArrow.vue';

export default {
  name: 'UsersTableHeader',

  components: {
    Checkbox,
    ButtonArrow,
  },

  data: () => ({
    text_header: [
      'Пользователь', 'Дата регистрации', 'Последняя активность', 'Последнее действие', 'Продукт',
    ],
  }),
};
</script>
