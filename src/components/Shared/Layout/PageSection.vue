<template>
  <section class="PageSection relative w-full flex justify-center">
    <div class="appContainer"
         :class="innerClass"
    >
      <slot />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageSection',
  props: {
    innerClass: {
      type: String,
      default: null,
    },
  },
});
</script>
