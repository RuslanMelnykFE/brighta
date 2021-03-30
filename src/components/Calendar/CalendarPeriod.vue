<template>
  <li class="calendar-form__period period">
    <input
      :id="checkbox_id"
      type="radio"
      :name="checkbox_name"
      :checked="is_checked"
      :value="checkbox_value"
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      class="period__checkbox"
    >
    <label :for="checkbox_id" class="period__label">
      {{ label }}
    </label>
  </li>
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
    checkbox_value: {
      type: [String, Number],
      default: '',
    },
    label: {
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
