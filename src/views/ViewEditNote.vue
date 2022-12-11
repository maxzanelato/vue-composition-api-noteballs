<template>
  <div class="edit-note">
    <AddEditNote
      ref="addEditNoteRef"
      v-model="noteContent"
      bgColor="link"
      placeholder="Edit note"
      label="Edit note"
    >
      <template #buttons>
        <button
          class="button is-link is-light mr-2"
          @click="$router.back()"
        >
          Cancel
        </button>
        <button
          class="button is-link has-background-link"
          :disabled="!noteContent"
          @click="handleSave"
        >
          Save note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { useStoreNotes } from '@/stores/storeNotes';

import AddEditNote from '@/components/Notes/AddEditNote.vue';

const route = useRoute();
const router = useRouter();

const noteContent = ref('');
const storeNotes = useStoreNotes();

noteContent.value = storeNotes.getNoteContent(route.params.id);

const handleSave = () => {
  storeNotes.updateNote(route.params.id, noteContent.value);
  router.push('/');
};
</script>
