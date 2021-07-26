<template>
  <div class="AppLogo relative flex">
    <div class="relative origin-center transform rotate-45 rounded-full w-6 h-6 bg-gradient-to-r from-red-400 -z-1" />
    <div class="relative origin-center transform rotate-45 rounded-full w-8 h-8 bg-gradient-to-l from-blue-400 -left-4" />
    <span class="relative block font-extrabold text-lg tracking-tighter -left-8">MyApp</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppLogo',
  setup() {
    // component setup
  },
});
</script>

<style lang="sass" scoped>
.AppLogo
  // component style
</style>
