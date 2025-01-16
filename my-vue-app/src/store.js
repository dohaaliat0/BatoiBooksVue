// store.js
import { reactive } from 'vue';
import { getDBModules } from './modules.api';
import { addDBBook, getDBBooks, removeDBBook, getDBBook, changeDBBook } from './books.api'

export const store = {
  state: reactive({
    books: [],
    modules: [],
    messages: [],
    }),

  // Método para añadir un libro al carrito
  addToCart(book) {
    this.state.cart.push(book);  // Añadir el libro al carrito
  },

  // Método para añadir un libro a la lista de libros (persistencia)
  async addBook(book) {
    try {
      const nuevoLibro = await addDBBook(book);
      store.state.books.push(nuevoLibro);
      return nuevoLibro;
    } catch (error) {
      alert(error);
      store.state.messages.push(error)
    }
  },

  // Método para cargar libros y módulos desde la base de datos
  async populate() {
    const libros = await getDBBooks();
    const modulos = await getDBModules();
    store.state.books = libros;
    store.state.modules = modulos;
    try {
      const libros = await getDBBooks();
      const modulos = await getDBModules();
      store.state.books = libros;
      store.state.modules = modulos;
  } catch (error) {
      store.state.messages.push(error)
  }
  },

  // Método para eliminar un libro
  async removeBook(id) {
    const libro = await removeDBBook(id);
    const index = store.state.books.indexOf(libro);
    store.state.books.splice(index, 1);
    try {
      const libro = await removeDBBook(id)
      const index = store.state.books.indexOf(libro)
      store.state.books.splice(index, 1)
  } catch (error) {
      store.state.messages.push(error)
  }
  },

  // Método para cambiar un libro
  async changeBook(libro) {
    const libroCambiado = await changeDBBook(libro);
    const index = this.state.books.findIndex(book => book.id === libro.id);
    store.state.books.splice(index, 1, libroCambiado)
        try {
          const libroCambiado = await changeDBBook(libro)
          const index = this.state.books.findIndex(book => book.id === libro.id)
          store.state.books.splice(index, 1, libroCambiado)
      } catch (error) {
          store.state.messages.push(error)
        }
    },

  remove(index) {
    store.state.messages.splice(index, 1);
},


getDBBook(id) {
    try{
        return getDBBook(id)
    } catch (error) {
        store.state.messages.push(error)

      }
    }
  

};
