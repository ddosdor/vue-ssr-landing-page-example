<template>
  <main class="LayoutMain flex-grow pt-20">
    <slot />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LayoutMain',
  setup() {
    // component setup
  },
});
</script>

<style lang="sass" scoped>
.LayoutMain
  // component style
</style>
