<template>
  <section class="HeroSection relative flex flex-column
                  lg:flox-row lg:items-center
                 "
  >
    <div class="absolute top-0 left-0 rounded-br-full bg-gradient-to-br from-gray-800 via-dark-200 w-64 h-64 -z-1
                md:w-96 md:h-96
               "
    />
    <div class="text-center pt-32 px-4
                md:px-10
                lg:px-20 lg:text-left
               "
    >
      <h1 class="text-5xl font-extrabold leading-tight tracking-tighter
                 md:text-7xl
                "
      >
        make your dreams
        <span class="block bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 via-red-400 to-yellow-200">come true</span>
      </h1>
      <p class="text-xl font-light text-gray-400 mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nullam euismod purus quis eros posuere gravida. Vivamus ac aliquam eros.
      </p>
    </div>
    <div class="absolute w-full flex justify-center top-64 opacity-10
                md:top-48
                lg:relative lg:opacity-100 lg:top-14
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
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeroSection',
  setup() {
    // component setup
  },
});
</script>

<style lang="sass" scoped>
.HeroSection
  // component style
</style>
