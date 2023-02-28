const { createApp } = Vue

console.log('ciao sono Axios',axios)

createApp({
	data() {
		return {
			mailList: [],
		}
	},

methods: {
    fetchMail() {
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {
                this.mailList.push(res.data.response)
            })
    },
},
mounted() {
    for (let i = 0; i < 10; i++) {
        this.fetchMail()
    }
},
}).mount('#app')


