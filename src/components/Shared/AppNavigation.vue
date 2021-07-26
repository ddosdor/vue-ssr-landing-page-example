<template>
  <div class="AppNavigation w-full flex flex-row items-center">
    <nav class="hidden
                md:block
               "
    >
      <ul class="AppNavigation__menu flex space-x-8">
        <li class="menu__item">
          Lorem
        </li>
        <li class="menu__item">
          Ipsum
        </li>
        <li class="menu__item">
          Dolor
        </li>
        <li class="menu__item">
          Sit
        </li>
      </ul>
    </nav>
    <div class="ml-auto">
      CTA
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppNavigation',
  setup() {
    // component setup
  },
});
</script>

<style lang="sass" scoped>
.AppNavigation
  &__menu
    .menu__item
      @apply font-bold text-gray-400 text-sm
</style>
