import './bootstrap';

import {createApp} from "vue";
const app = createApp({});

import users from "./users";
app.use(users);


app.mount('#app')
