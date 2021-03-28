<template>
  <div class="users-table__row">
    <div class="users-table__column users-table__column_checkbox">
      <checkbox
        :checkbox_name="`user-${user_data.id}`"
      />
    </div>
    <div
      class="user-table__column users-table__column_data"
      :class="{block: user_data.is_block}"
    >
      <div
        v-for="(data, idx) in subcolumn"
        :key="`user-${user_data.id}-${idx}`"
        class="users-table__subcolumn"
      >
        <template v-if="idx === 'user_name'">
          <span class="users-table__text">{{ data.name }}</span>
          <span class="users-table__subtext">{{ data.email }}</span>
        </template>
        <template v-else>
          <span class="users-table__text">{{ data }}</span>
        </template>
      </div>
    </div>
    <div class="users-table__column users-table__column_settings">
      settings
    </div>
  </div>
</template>

<script>
import Checkbox from '@components/FormElements/Checkbox.vue';

export default {
  name: 'UsersTableHeader',

  components: {
    Checkbox,
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
