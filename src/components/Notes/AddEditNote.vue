<template>
  <div class="p-4 m-5" :class="`has-background-${bgColor}-dark`">
    <label v-if="label" for="field" class="label has-text-white">
      {{ label }}
    </label>

    <div class="field" id="field">
      <div class="control">
        <textarea
          v-model="modelValue"
          class="textarea"
          :placeholder="placeholder"
          ref="textareaRef"
          @input="$emit('update:modelValue', modelValue)"
        />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    default: 'success',
  },
  placeholder: {
    type: String,
    default: 'Type something...',
  },
  label: {
    type: String,
  },
});

const textareaRef = ref(null);

const emit = defineEmits(['update:modelValue']);

const focusTextarea = () => {
  textareaRef.value.focus();
};

defineExpose({
  focusTextarea,
});
</script>
