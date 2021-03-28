<template>
  <section class="users">
    <action-panel/>
    <users-table/>
  </section>
</template>

<script>
import ActionPanel from '@components/ActionPanel/ActionPanel.vue';
import UsersTable from '@components/Users/UsersTable.vue';

export default {
  name: 'Users',

  components: {
    ActionPanel,
    UsersTable,
  },
};
</script>
