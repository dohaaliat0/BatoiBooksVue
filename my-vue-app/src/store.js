// store.js
import { reactive } from 'vue';
import { addDBBook, getDBBooks, removeDBBook } from './books.api';
import { getDBModules } from './modules.api';

export const store = {
  state: reactive({
    books: [],
    modules: [],
    cart: []  // Estado para almacenar los libros en el carrito
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
    }
  },

  // Método para cargar libros y módulos desde la base de datos
  async populate() {
    const libros = await getDBBooks();
    const modulos = await getDBModules();
    store.state.books = libros;
    store.state.modules = modulos;
  },

  // Método para eliminar un libro
  async removeBook(id) {
    const libro = await removeDBBook(id);
    const index = store.state.books.indexOf(libro);
    store.state.books.splice(index, 1);
  },

  // Método para cambiar un libro
  async changeBook(libro) {
    const libroCambiado = await changeDBBook(libro);
    const index = store.state.books.indexOf(libro);
    store.state.books.splice(index, 1, libroCambiado);
  }
};
