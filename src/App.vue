<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <LayoutHeader />
    <LayoutMain>
      <HeroSection />
    </LayoutMain>
    <LayoutFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LayoutHeader from '@/layout/LayoutHeader.vue';
import LayoutMain from '@/layout/LayoutMain.vue';
import LayoutFooter from '@/layout/LayoutFooter.vue';
import HeroSection from '@/sections/HeroSection.vue';

export default defineComponent({
  name: 'App',
  components: {
    LayoutHeader,
    LayoutMain,
    LayoutFooter,
    HeroSection,
  },
});
</script>
