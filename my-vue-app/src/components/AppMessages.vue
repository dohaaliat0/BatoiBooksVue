<script>
import { mapActions, mapState } from 'pinia';
import { useDataStore } from '../stores/store';

export default {
  name: 'AppMessages',
  computed: {
    ...mapState(useDataStore, {
      messages: 'messages' // Mapear la propiedad "messages" desde el store
    })
  },
  methods: {
    ...mapActions(useDataStore, ['remove']), // Mapear la acción "remove" del store
    handleRemove(index) {
      this.remove(index); // Llamar a la acción "remove" del store
    }
  }
};
</script>

<template>
  <div
    class="tipo-recibido alert alert-danger alert-dismissible"
    role="alert"
    v-for="(message, index) in messages"
    :key="index"
  >
    {{ message }}
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
      @click="handleRemove(index)"
    >
      x
    </button>
  </div>
  <br />
</template>
