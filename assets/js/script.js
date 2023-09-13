const { createApp } = Vue

createApp({
    data(){
        return{
            tasks: [
                {
                    text: 'comprare il pane',
                    done: true
                },
                {
                    text: 'comprare il latte',
                    done: false
                },
                {
                    text: 'comprare il pelato',
                    done: true
                }
            ]
        }
    },
    methods: {
        remove(index) {
            this.tasks.splice(index, 1)
        }
    }
}).mount('#app')