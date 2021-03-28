<template>
  <li class="sidebar__item">
    <a :href="link" class="sidebar__link">
      <i class="sidebar__icon">
        <slot/>
      </i>
      <span class="sidebar__text">
        {{ text }}
      </span>
    </a>
  </li>
</template>

<script>
export default {
  name: 'SidebarItem',

  props: {
    link: {
      type: String,
      default: '',
    },
    text: {
      type: [String, Number],
      default: '',
    },
  },
};
</script>
