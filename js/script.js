const { createApp } = Vue

console.log('ciao sono Axios',axios)

createApp({
	data() {
		return {
			mailList: [],
            currentIndex: 1
		}
	},

methods: {
    fetchName() {
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {
                this.mailList.push(res.data.response)
            })
    },
},
mounted() {
    for (let i = 1; i <= 10; i++) {
        this.fetchName()
    }
},
}).mount('#app')


