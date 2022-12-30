<script setup lang="ts">
import { ref } from 'vue';

const showModal = ref(false);
const newNote = ref("");
const notes = ref<any[]>([]);
const errorMessage = ref("");

function getRandomColor() {
  return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
}

const AddNote = () => {
  if(newNote.value.length < 10) return errorMessage.value = "Note needs to be 10 characters or more.";

  notes.value.push({
    id: Math.floor(Math.random() * 1000000),
    text: newNote.value,
    date: new Date(),
    backgroundColor: getRandomColor()
  });
  showModal.value = false;
  newNote.value = "";
  errorMessage.value = ""
}
</script>

<template>
  <main class="h-screen w-screen">

    <div v-if="showModal"
      class="overlay absolute w-full h-full bg-[#000000] opacity-90 z-10 flex items-center justify-center">
      <div class="modal w-[750px] bg-white border rounded-xl z-1 p-8 relative flex flex-col">
        <textarea 
          v-model.trim="newNote"
          name="note" id="note" cols="30" rows="10"
          class="border-double focus:border-solid outline-none border-green-600 border-4 border-inset rounded-xl p-4 
            dark:bg-black dark:text-green-500"
          ></textarea>

          <p v-if="errorMessage" class="text-red-700 mx-auto">{{ errorMessage }}</p>

        <button 
          @click="AddNote" 
          class="pl-3 pr-5 text-xl w-full bg-[#8a2be2] cursor-pointer mt-4 rounded">
          Add Note
        </button>
        <button 
          @click="showModal = false"
          class="pl-3 pr-5 text-xl w-full bg-red-800 cursor-pointer mt-2 rounded">
          Close
        </button>
      </div>
    </div>

    <div class="container max-w-[1000px] m-auto p-[10px]">

      <header class="flex justify-between items-center border-none p-[10px]">
        <h1 class="font-bold mb-6">
          Notes
        </h1>
        <button 
          @click="showModal = true"
          class="border rounded-full text-xl border-gray-400 w-12 h-12 cursor-pointer bg-[#322e2e]">
          +
        </button>
      </header>

      <div class="cards container flex flex-wrap">
        <div 
          v-for="note in notes"
          :key="note.id" 
          :style="{backgroundColor: note.backgroundColor}"
          class="card w-[225px] h-[225px] p-3 rounded-2xl flex flex-col justify-between mr-5 mb-5">
          <p class="main-text text-sm">{{ note.text }}</p>
          <p class="date text-xs ">{{ note.date.toLocaleDateString("pt-BR") }}</p>
        </div>
      </div>

      {{ notes }}

    </div>
  </main>
</template>
