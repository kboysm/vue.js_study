export const firstM = {
    created() {
     console.log('mixins');   
    },
    data(){
        return{
            mixinDate:'믹스인 다시보니.. 새롭다'
        }
    },
    methods: {
        getDateAndTime(date){
            if(date !==null){
                let hour =date.getHours()
                let minutes = date.getMinutes()
                let fullDate = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`
                return `${fullDate} ${hour}:${minutes}`
            }else{
                return null
            }
        }
    },
}