<template>
<v-card>
    <v-card-text>
        <v-textarea
        v-model="txt"
        >
        </v-textarea>
        <v-card-actions>
            <v-btn @click="test">aaa</v-btn>
            <v-btn @click="write">write</v-btn>
            <v-btn @click="read">read</v-btn>
            
        </v-card-actions>
    </v-card-text>
</v-card>
</template>

<script>
export default {
    data(){
        return{
            txt:'',
        }
    },
    methods:{
        test(){
            console.log(process.env.dbUrl)
        },
        write(){
            console.log('db연결 시도')
            this.$db.collection("users").add({
                first:'lsm',
                last:'second_firebase',
                born:1993
            })
            .then(function(doRef){
                console.log('db연결 성공')
                console.log('Document written with ID : '+doRef.id)
            })
            .catch(function(e){
                console.log('db연결 실패')
                console.error(e.message)
            })
            console.log('write함수 종료')
        },
        read(){
            this.$db.collection("users").get()
            .then((q)=>{
                q.forEach((doc)=>{
                    this.txt=`${doc.id} => ${JSON.stringify(doc.data())}`;
                })
            })
        }
    }
}
</script>