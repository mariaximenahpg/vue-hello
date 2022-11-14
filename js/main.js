const {createApp} = Vue;
createApp({
    data() {
        return {
            message: 'Hello!',
            image: 'img/ditto.png',
        }
    }
}).mount('#app')