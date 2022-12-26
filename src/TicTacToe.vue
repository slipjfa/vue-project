<script setup lang="ts">
import { ref, computed } from 'vue'

const player = ref('X');

const board = ref([
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
]);

const CalculateWinner = (board: any) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

const winner = computed(() => CalculateWinner(board.value.flat()));


const MakeMove = (x: number, y: number)  => {
  if (winner.value) return;

  if (board.value[x][y]) return;

  board.value[x][y] = player.value;

  player.value = player.value === 'X' ? 'O' : 'X';
}

const ResetGame = () => {
  board.value = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ];
  player.value = 'X';
}
</script>

<template>
  <main class="pt-8 text-center dark:bg-gray-800 min-h-screen">
    <h1 class="mb-8 text-3xl font-bold uppercase">Tic Tac Toe</h1>
    <h3 class="text-xl mb-4">Player <span class="text-green-500">{{ player }}</span> turn</h3>
    <div class="flex flex-col items-center mb-8">
      <div 
        v-for="(row, x) in board"
        :key="x"
        class="flex"
      >
        <div 
          v-for="(cell, y) in row"
          :key="y"
          @click="MakeMove(x, y)"
          :class="`border border-white w-24 h-24 hover:bg-gray-700 flex items-center 
            justify-center material-icons-outlined text-4xl cursor-pointer 
            ${cell === 'X' ? 'text-red-400' : 'text-blue-400'}`"
        >
					{{ cell === 'X' ? 'X' : cell === 'O' ? 'O' : '' }}
        </div>
      </div>
    </div>
    <h2 v-if="winner" class="text-4xl font-bold mb-8">
      Player <span class="text-purple-700">{{ winner }}</span> wins!
    </h2>
    <button @click="ResetGame" 
      class="px-4 py-2 bg-red-500 
      rounded uppercase font-bold 
      hover:bg-red-600 duration-300"
    >
      Reset Game 
    </button>
  </main>
</template>

<style>

</style>
