<template>
  <div class="checkbox-field">
    <input
      :id="checkbox_id"
      type="checkbox"
      :name="checkbox_name"
      :checked="is_checked"
      :value="value"
      class="checkbox-field__input"
    >
    <label :for="checkbox_id" class="checkbox-field__label"></label>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',

  props: {
    id: {
      type: String,
      default: '',
    },
    checkbox_name: {
      type: String,
      default: '',
      require: true,
    },
    is_checked: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [String, Number],
      default: '',
    },
  },

  computed: {
    checkbox_id() {
      return this.id.length ? this.id : `id-${this.checkbox_name}`;
    },
  },
};
</script>
