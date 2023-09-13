const { createApp } = Vue

createApp({
    data(){
        return{
            mess: '',
            tasks: [
                new {},
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
        },
        add(){
                this.tasks.push(this.new);  
        }
    }
}).mount('#app')