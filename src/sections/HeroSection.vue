<template>
  <PageSection class="bg-gradient-to-b from-dark-200 via-gray-800"
               inner-class="flex flex-column
                            lg:flex-row lg:items-center
                            "
  >
    <div class="absolute top-0 right-8 rounded-full appBackroundBall" />
    <div class="text-center pt-20 w-full
                lg:text-left lg:mr-10
               "
    >
      <h1 class="text-5xl font-extrabold leading-tight tracking-tighter
                 md:text-7xl
                "
      >
        make <span class="text-blue-300">your</span> dreams
        <span class="block bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 via-red-400 to-yellow-200">come true</span>
      </h1>
      <p class="text-xl font-light text-gray-400 mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nullam euismod purus quis eros posuere gravida. Vivamus ac aliquam eros.
      </p>
    </div>
    <div class="absolute w-full flex justify-center top-64 left-0 opacity-10
                md:top-48
                lg:relative lg:opacity-100 lg:top-14 lg:ml-10
               "
    >
      <figure>
        <img class="w-72 h-auto
                    md:w-80
                    lg:w-112
                   "
             src="@/assets/images/gifts.svg"
        >
      </figure>
    </div>
  </PageSection>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageSection from '@/components/Shared/Layout/PageSection.vue';

export default defineComponent({
  name: 'HeroSection',
  components: {
    PageSection,
  },
});
</script>
