<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of notes</td>
          <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of characters (all)</td>
          <td>{{ storeNotes.totalCharactersCount }}</td>
        </tr>
      </tbody>
    </table>
    <input
      class="input"
      type="text"
      v-model="loveNoteballs"
      placeholder="Do you love noteballs?"
      v-Autofocus
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

import { useWatchCharacteres } from '@/use/useWatchCharacteres';

import { vAutofocus } from '@/directives/vAutofocus';

import { useStoreNotes } from '@/stores/storeNotes';

const storeNotes = useStoreNotes();

const loveNoteballs = ref('');

useWatchCharacteres(loveNoteballs);
</script>
