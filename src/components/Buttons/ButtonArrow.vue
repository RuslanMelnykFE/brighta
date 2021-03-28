<template>
  <button
    type="button"
    class="btn-arrow"
    :class="{border: is_border}"
  >
    <slot/>
    <span class="btn-arrow__text">{{ text_btn }}</span>
    <span
      v-if="text_btn_add.length"
      class="btn-arrow__text btn-arrow__text_add"
    >
      {{ text_btn_add }}
    </span>
    <span class="arrow btn-arrow__arrow"></span>
  </button>
</template>

<script>
export default {
  name: 'ButtonArrow',

  props: {
    text_btn: {
      type: [String, Number],
      default: '',
    },
    text_btn_add: {
      type: [String, Number],
      default: '',
    },
    is_border: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
