import { defineStore } from 'pinia';

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [
        {
          id: 'id1',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus accusamus provident ullam laudantium dignissimos sint omnis culpa modi quisquam quidem. Odio facilis quam fugiat, cupiditate optio porro voluptatibus necessitatibus sequi.',
        },
        {
          id: 'id2',
          content: 'This is a shorter note!',
        },
      ],
    };
  },
  actions: {
    addNote(content) {
      const id = new Date().getTime().toString();

      const note = {
        id,
        content,
      };

      this.notes.unshift(note);
    },
    deleteNote(nodeId) {
      this.notes = this.notes.filter(({ id }) => id !== nodeId);
    },
    updateNote(id, content) {
      let index = this.notes.findIndex((note) => note.id === id);

      this.notes[index].content = content;
    },
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter((note) => id === note.id)[0]
          .content;
      };
    },
    totalNotesCount: (state) => {
      return state.notes.length;
    },
    totalCharactersCount: (state) => {
      let count = 0;

      state.notes.forEach((note) => {
        count += note.content.length;
      });

      return count;
    },
  },
});
