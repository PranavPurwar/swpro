<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue';
import AppFooter from '~/components/AppFooter.vue';

</script>

<template>
  <main class="bg-[#0b1026]">
    <AppHeader />

    <div class="flex flex-col md:gap-8 gap-2">
      <div class="flex flex-col md:flex-row-reverse items-center py-2 md:py-16 mx-8 md:px-24">

        <img class="w-[50%] md:w-1/5 rounded-xl aspect-auto mb-8 md:mb-0"
          src="https://media.discordapp.net/attachments/797576098627977257/1205973198802526268/Screenshot_20240210-212538_Sketchware_Pro.png?ex=65e38b90&is=65d11690&hm=6be3ad2167a5c2389090c51552131b1a95151cf5e2898b2da9ba69b8192fa4d9&=&format=webp&quality=lossless&width=588&height=1306" />
        <div class="flex flex-col gap-8">
          <h1 class="md:text-4xl text-2xl font-bold text-gray-50">Sketchware Pro</h1>
          <p class="text-lg md:text-2xl font-light w-fit md:w-2/3 text-gray-200">
            Unleash your app ideas with Sketchware Pro! Drag and drop blocks, not code, to build Android apps - games,
            utilities, and more. Beginner-friendly interface, powerful features, and a supportive community await. Create
            your app today!</p>

          <div class="flex flex-col md:flex-row gap-4 pt-4">
            <a class="bg-[#f94062] text-gray-200 font-extrabold p-4 rounded-xl w-full md:w-1/3 text-center" href="https://github.com/Sketchware-pro/Sketchware-Pro/releases">Download Now</a>
            <a class="bg-[#3871ed] text-gray-200 font-extrabold p-4 rounded-xl w-full md:w-1/3 text-center mb-8 md:mb-0">Get Started</a>

          </div>
        </div>
      </div>
    </div>

    AppFooter />
  </main>
</template>


<style>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
