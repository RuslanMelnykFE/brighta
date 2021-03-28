<template>
  <nav class="sidebar">
    <div class="sidebar__type-users type-users">
      <button-arrow
        text_btn="Эксперт"
        class="type-users__btn"
      />

      <i class="type-users__icon">
        <icon class="type-users__svg"/>
      </i>
    </div>

    <sidebar-list/>
  </nav>
</template>

<script>
import ButtonArrow from '@components/Buttons/ButtonArrow.vue';
import Icon from '@images/svg/type-user.svg';
import SidebarList from './SidebarList.vue';

export default {
  name: 'Sidebar',

  components: {
    ButtonArrow,
    SidebarList,
    Icon,
  },
};
</script>
