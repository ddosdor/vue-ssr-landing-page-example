<template>
  <header class="LayoutHeader fixed w-full py-6">
    <div class="appContainer flex items-center">
      <AppLogo class="mr-4" />
      <AppNavigation />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppLogo from '@/components/Shared/AppLogo.vue';
import AppNavigation from '@/components/Shared/AppNavigation.vue';

export default defineComponent({
  name: 'LayoutHeaderView',
  components: {
    AppLogo,
    AppNavigation,
  },
});
</script>
