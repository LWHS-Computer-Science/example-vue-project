var app = new Vue({
    el: '#app',
    data: {
        formText: "",
        items: [{
            done: false,
            name: "test"
        }]
    },
    methods: {
        add: function () {
            let newItem = {
                "done": false,
                "name": this.formText
            }
            console.log("adding", newItem)
            this.items.push(newItem)
            this.formText = ""
        },
        remove: function (i) {
            console.log("removing", i)
            this.items = this.items.filter(item => item !== i)
        }
    }
})