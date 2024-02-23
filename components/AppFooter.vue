<template>
  <footer class="text-white bottom-0 p-2 md:p-12 pt-8 md:pt-0 pl-8 md:pl-12">
    <div class="container mx-auto flex flex-col md:justify-between items-left md:items-center gap-2 md:gap-4">
      <div class="flex flex-col md:flex-row container mx-auto justify-between md:items-center gap-4">
        <div class="hidden md:flex flex-col gap-2">
          <img class="h-16 w-16"
            src="https://raw.githubusercontent.com/Sketchware-Pro/Sketchware-Pro/main/assets/Sketchware-Pro.png"
            alt="Logo" />
          <h1 class="font-semibold text-xl text-gray-300">Sketchware Pro</h1>
          <p class="font-sm text-gray-400">© 2024-2025 Sketchware Pro</p>
        </div>
        <div class="flex flex-col md:flex-row gap-2 md:gap-4">
          <div class="flex flex-col">
            <h1 class="font-semibold text-lg md:text-2xl pb-2 md:pb-4">Sketchware Pro</h1>

            <a v-for="sw in SWPRO" :key="sw.title" :href="sw.link"
              class="text-lg text-gray-400 font-light no-underline hover:underline pl-1 md:pl-0">{{ sw.title }}</a>
          </div>
        </div>
        <div class="flex flex-col">
          <h1 class="font-semibold text-lg md:text-2xl pb-2 md:pb-4">Community</h1>

          <a v-for="community in COMMUNITY" :key="community.title" :href="community.link"
            class="text-lg text-gray-400 font-light no-underline hover:underline pl-1 md:pl-0">{{ community.title }}</a>
        </div>

        <div class="flex flex-col">
          <h1 class="font-semibold text-lg md:text-2xl pb-2 md:b-4">More</h1>

          <a v-for="more in MORE" :key="more.title" :href="more.link"
            class="text-lg text-gray-400 font-light no-underline hover:underline pl-1 md:pl-0">{{ more.title }}</a>
        </div>
      </div>
    </div>


    <div class="text-center">
      <p class="text-xl text-gray-500 py-4">© 2024-2025 Sketchware Pro</p>
    </div>
  </footer>
</template>

<script setup lang="ts">

import { SWPRO, COMMUNITY, MORE } from '../pages/props'
</script>

<style scoped></style>
