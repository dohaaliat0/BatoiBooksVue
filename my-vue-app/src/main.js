// Importamos Vue y el enrutador
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // Importamos el enrutador
import './assets/styles.css'  // Aquí importas el archivo CSS global

// Creamos la aplicación Vue
const app = createApp(App)

// Usamos el enrutador
app.use(router)

// Montamos la aplicación en el elemento con el ID 'app'
app.mount('#app')
