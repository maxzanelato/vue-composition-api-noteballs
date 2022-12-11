<template>
  <div class="notes">
    <AddEditNote v-model="newNote" ref="addEditNoteRef">
      <template #buttons>
        <button
          @click="addNewNote"
          :disabled="!newNote"
          class="button is-link has-background-success"
          placeholder="Add new note"
        >
          Add new note
        </button>
      </template>
    </AddEditNote>

    <Note
      v-for="note in storeNotes.notes"
      :key="note.id"
      :note="note"
      @deleteClicked="storeNotes.deleteNote(nodeId)"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

import { useStoreNotes } from '@/stores/storeNotes';

import Note from '@/components/Notes/Note.vue';
import AddEditNote from '@/components/Notes/AddEditNote.vue';

const newNote = ref('');
const addEditNoteRef = ref(null);

const storeNotes = useStoreNotes();

const addNewNote = () => {
  storeNotes.addNote(newNote.value);

  newNote.value = '';
  addEditNoteRef.value.focusTextarea();
};
</script>
