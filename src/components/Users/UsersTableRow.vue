<template>
  <div class="users-table__row">
    <div class="users-table__column users-table__column_checkbox">
      <checkbox
        :checkbox_name="`user-${user_data.id}`"
      />
    </div>
    <div
      class="user-table__column users-table__column_data"
      :class="{ block: user_data.is_block }"
    >
      <div
        v-for="(data, idx) in subcolumn"
        :key="`user-${user_data.id}-${idx}`"
        class="users-table__subcolumn"
      >
        <template v-if="idx === 'user_name'">
          <span class="users-table__text">
            <i v-show="user_data.is_block" class="icon-lock">
              <icon-lock/>
            </i>
            {{ data.name }}
          </span>
          <span class="users-table__subtext">{{ data.email }}</span>
        </template>
        <template v-else>
          <span class="users-table__text">{{ data }}</span>
        </template>
      </div>
    </div>
    <div class="users-table__column users-table__column_settings">
      <button
        type="button"
        class="users-table__btn"
        aria-label="Button edit"
      >
        <icon-edit class="users-table__icon"/>
      </button>
      <button
        type="button"
        class="users-table__btn"
        aria-label="Button delete"
      >
        <icon-delete class="users-table__icon"/>
      </button>
    </div>
  </div>
</template>

<script>
import Checkbox from '@components/FormElements/Checkbox.vue';
import IconEdit from '@images/svg/edit.svg';
import IconDelete from '@images/svg/delete.svg';
import IconLock from '@images/svg/lock.svg';

export default {
  name: 'UsersTableHeader',

  components: {
    Checkbox,
    IconEdit,
    IconDelete,
    IconLock,
  },

  props: {
    user_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  computed: {
    subcolumn() {
      const {
        name, email, lastActions, product,
      } = this.user_data;

      return {
        user_name: { name, email },
        dateActions: this.formatedDate(this.user_data.date.lastActions),
        dateRegistration: this.formatedDate(this.user_data.date.registration),
        lastActions,
        product,
      };
    },
  },

  methods: {
    formatedDate(value) {
      const arrDate = value.split('/');
      const month = (arrDate[1] === '02') ? 'Февраль' : 'месяц';

      return `${month} ${arrDate[0]}, ${arrDate[2]}`;
    },
  },
};
</script>
