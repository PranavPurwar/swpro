<template>
  <footer class="text-white bottom-0 p-12">
    <div class="container mx-auto flex flex-col justify-between items-center gap-4">
      <div class="flex container mx-auto justify-between items-center">
        <div class="flex flex-col gap-2">
          <img class="h-16 w-16"
            src="https://raw.githubusercontent.com/Sketchware-Pro/Sketchware-Pro/main/assets/Sketchware-Pro.png"
            alt="Logo" />
          <h1 class="font-semibold text-xl text-gray-300">Sketchware Pro</h1>
          <p class="font-sm text-gray-400">© 2024-2025 Sketchware Pro</p>
        </div>
        <div class="flex gap-4">
          <div class="flex flex-col">
            <h1 class="font-semibold text-2xl pb-4">Sketchware Pro</h1>

            <a v-for="sw in SWPRO" :key="sw.title" :href="sw.link"
              class="text-lg text-gray-400 font-light no-underline hover:underline">{{ sw.title }}</a>
          </div>
        </div>
        <div class="flex flex-col">
          <h1 class="font-semibold text-2xl pb-4">Community</h1>

          <a v-for="community in COMMUNITY" :key="community.title" :href="community.link"
            class="text-lg text-gray-400 font-light no-underline hover:underline">{{ community.title }}</a>
        </div>

        <div class="flex flex-col">
          <h1 class="font-semibold text-2xl pb-4">More</h1>

          <a v-for="more in MORE" :key="more.title" :href="more.link"
            class="text-lg text-gray-400 font-light no-underline hover:underline">{{ more.title }}</a>
        </div>
      </div>
    </div>


    <div class="text-center">
      <p class="text-xl text-gray-500 pt-4">© 2024 Sketchware Pro</p>
    </div>
  </footer>
</template>

<script setup lang="ts">

import { SWPRO, COMMUNITY, MORE } from '../pages/props'
</script>

<style scoped></style>
