import { watch } from 'vue';

export function useWatchCharacteres(fieldToWatch) {
  watch(fieldToWatch, (newValue, oldValue) => {
    if (newValue.length > 99) {
      alert('Only 100 characteres allowed!');
    }
    console.log(newValue.length);
  });
}
