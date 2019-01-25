import users from './users.vue';
users.install = Vue => Vue.component(users.name, users)
export default users