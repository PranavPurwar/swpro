<template>

    <main class="bg-[#0b1026]">
        <AppHeader />

        <div class="about text-gray-200 p-8 md:p-32">
            <main>
                <h1 class="font-semibold text-2xl md:text-6xl text-gray-300 mb-8">About Sketchware Pro</h1>

                <p class="text-lg md:text-2xl text-gray-400">
                    Sketchware Pro is a modified version of Sketchware, an Android app development platform. It was created
                    to enhance the functionality and features of the original Sketchware app. Sketchware Pro is an
                    open-source project that is maintained by a community of contributors.

                    The goal of Sketchware Pro is to provide developers with a more powerful and flexible tool for building
                    Android applications. It offers additional features, improvements, and customization options compared to
                    the original Sketchware app.

                    By being open-source, Sketchware Pro allows developers to contribute to its development, fix bugs, and
                    add new features. This collaborative approach ensures that the platform remains up-to-date and
                    responsive to the needs of the developer community.

                    Overall, Sketchware Pro is a valuable resource for Android developers, offering an enhanced development
                    experience and the opportunity to contribute to its ongoing improvement.

                </p>
            </main>
        </div>
        <AppFooter />

    </main>
</template>

<script setup lang="ts">

import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';

</script>

<style>
</style>