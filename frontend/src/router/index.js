import {createRouter, createWebHistory} from 'vue-router';
import ProductPage from "../components/ProductPage.vue";
import HomePage from "@/components/HomePage.vue";

// Define your routes
const routes = [
    { path: '/', component: HomePage },
    { path: '/product/:name', component: ProductPage },
];

// Create the router instance
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router