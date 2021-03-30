<template>
  <button
    :type="type_btn"
    class="btn"
    :class="{'btn_orange': is_orange}"
    :disabled="is_disabled"
    @click.prevent="$emit('action')"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'ButtonCustom',

  props: {
    type_btn: {
      type: String,
      default: 'button',
    },
    text: {
      type: String,
      default: '',
    },
    is_orange: {
      type: Boolean,
      default: false,
    },
    is_disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
