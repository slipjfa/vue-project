<script setup>
import q from "../data/quizes.json";

import { ref, watch } from "vue";
import Card from "../components/Card.vue";

const quizes = ref(q);
const search = ref("");

watch(search, () => {
  quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
})
</script>

<template>
  <div>
    <header class="mb-3 mt-7 flex items-center ">
      <h1 class="text-4xl text-bold mr-7 ">Quizes</h1>
      <input v-model.trim="search" type="text" placeholder="Search..."
        class="border border-gray-500 hover:border-blue-300 focus:border-blue-500 border-2 outline-none 
        bg-color-[rgba(128,128,128,0.1)] p-2 " />
    </header>
    <div class="cards-container flex flex-row flex-wrap mt-10 ">
      <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/>
    </div>
  </div>
</template>
