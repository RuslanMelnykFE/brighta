<template>
  <section class="users-table">
    <table-header/>

    <div class="users-table__body">
      <table-row
        v-for="(user, idx) in users"
        :key="`user-${idx}`"
        :user_data="user"
      />
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import TableHeader from './UsersTableHeader.vue';
import TableRow from './UsersTableRow.vue';

export default {
  name: 'UsersTable',

  components: {
    TableHeader,
    TableRow,
  },

  computed: {
    ...mapGetters({
      users: 'users/USERS',
    }),
  },

  created() {
    this.$store.dispatch('users/getUsers');
  },
};
</script>
