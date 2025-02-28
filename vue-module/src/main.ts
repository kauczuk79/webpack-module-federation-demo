import { createApp } from 'vue'
import App from './App.vue'

const mount = (el: Element, props?: any) => {
    createApp(App, props).mount(el)
};

if (process.env.NODE_ENV === "development") {
    const rootNode = document.querySelector("#app");
    if (rootNode) {
        mount(rootNode);
    }
}

export {mount};

