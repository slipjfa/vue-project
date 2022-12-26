<script setup lang="ts">
  import { ref } from "vue";
  const count = ref(0);
</script>

<template>
  <main class="flex text-center h-screen w-screen bg-blue-100 dark:bg-green-300 text-orange-500">
    <div class="m-auto">
      <h4>The current count is...</h4>
      <h1>{{ count }}</h1>
      <button class="border py-2 px-4 mx-2" @click="count--">-</button>
      <button class="border py-2 px-4 mx-2" @click="count++">+</button>
    </div>
  </main>
</template>
