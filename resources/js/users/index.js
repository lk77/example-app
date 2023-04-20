import UserEdit from "./UserEdit.vue";
export default {
    install: (app) => {
        console.log('user-edit')
        app.component('user-edit', UserEdit);
    }
}
