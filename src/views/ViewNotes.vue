<template>
  <div class="notes">
    <div class="has-background-success-dark p-4 m-5">
      <div class="field">
        <div class="control">
          <textarea
            v-model="newNote"
            class="textarea"
            placeholder="Add a new note"
            ref="newNoteRef"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            @click="addNewNote"
            :disabled="!newNote"
            class="button is-link has-background-success"
          >
            Add new note
          </button>
        </div>
      </div>
    </div>

    <Note
      v-for="note in notes"
      :key="note.id"
      :note="note"
      @deleteClicked="deleteNote"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

import Note from '@/components/Notes/Note.vue';

const newNoteRef = ref(null);
const notes = ref([
  {
    id: 'id1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus accusamus provident ullam laudantium dignissimos sint omnis culpa modi quisquam quidem. Odio facilis quam fugiat, cupiditate optio porro voluptatibus necessitatibus sequi.',
  },
  {
    id: 'id2',
    content: 'This is a shorter note!',
  },
]);
const newNote = ref('');

const addNewNote = () => {
  const id = new Date().getTime().toString();

  const note = {
    id,
    content: newNote.value,
  };

  notes.value.unshift(note);

  newNote.value = '';
  newNoteRef.value.focus();
};

const deleteNote = (nodeId) => {
  notes.value = notes.value.filter(({ id }) => id !== nodeId);
};
</script>
