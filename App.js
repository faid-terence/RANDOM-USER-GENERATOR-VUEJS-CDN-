const app = Vue.createApp({
    data() {
        return {
            firstName: 'Terence',
            lastName: 'Faid JABO',
            email: 'faidterence@outlook.com',
            gender: 'male',
            picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT96iSrMZNEgfb2BhlEPmMwv347n0X8bEJJJDgR9ZmkZOBkNEuMM-IiqJzobof_cU6gbAg&usqp=CAU'
        }
    },
    methods: {
        // functions in VueJs
        async getUser(){ 
            const res = await fetch('https://randomuser.me/api ');
            const {results} = await res.json();
            console.log(results)

            this.firstName = results[0].name.first;
            this.lastName = results[0].name.last;
            this.email = results[0].email;
            this.gender = results[0].gender;
            this.picture = results[0].picture.medium    
        }
    }
})


app.mount('#app')