<template>
  <main class="bg-[#0b1026]">
    <Header />

    <div class="about text-gray-200 p-8 md:p-16">
      <h1 class="font-semibold text-4xl md:text-6xl text-gray-200 mb-16">Blog</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div v-for="post in blogPosts" :key="post.title" class="rounded-3xl border border-gray-600 p-8">
            <a :href="`/blog/${post.id}`" class="flex flex-col gap-4">
            <h2 class="text-3xl font-semibold text-gray-300">{{ post.title }}</h2>
            <p class="text-gray-400">{{ post.content.split(' ').slice(0, 40).join(' ') }}</p>
            <p class="text-gray-500 text-right"><span class="text-gray-600">{{ readingTime(post.content, 100).text }}</span> - {{ post.date }}</p>
          </a>
          </div>
      </div>
    </div>

    <Footer />
  </main>
</template>

<script setup lang="ts">
import { readingTime } from 'reading-time-estimator';
import type { BlogPost } from '~/server/types';

const blogPosts: BlogPost[] = await fetch('http://localhost:3000/api/blogs').then((res) => res.json());

</script>

<style>

</style>
