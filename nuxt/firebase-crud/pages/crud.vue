<template>
    <v-card>
        <v-card-title>firebase->crud</v-card-title>
        <v-data-table :headers="headers" :items="items">
            <template v-slot:items="props">
            <td>{{ props.item.id}} </td>
            <td>{{ props.item.createAt}} </td>
            <td>{{ props.item.title}} </td>
            <td>{{ props.item.content}} </td>
        </template>
        </v-data-table>
        <v-card-actions>
            <v-spacer />
            <v-btn @click="openDialog('create')">create</v-btn>
        </v-card-actions>
        <v-dialog v-model="dialog">
            <v-card>
                <v-card-title>쓰기 및 수정</v-card-title>
                <v-card-text>
                    <v-form>
                        <v-text-field v-model="form.title"></v-text-field>
                        <v-textarea v-model="form.content"></v-textarea>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                <v-spacer />
                <v-btn @click="create">create</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-card>
</template>

<script>
export default {
    data(){
        return{
            headers:[
                {text:'id',value:'id'},
                {text:'생성일',value:'createAt'},
                {text:'제목',value:'title'},
                {text:'내용',value:'content'},
            ],
            items:[],
            dialog:false,
            mode:'create',
            form:{
                title:'',
                content:''
            },
            selectItem:null
        }
    },
    methods:{
        openDialog(mode,sel){
            this.mode=mode
            if(mode === 'create'){
                this.form.title=''
                this.form.content=''
            }else{
                this.selectItem=sel
            }
            this.dialog=true
        },
        create(){
            const item={
                id:Math.random(),
                title:this.form.title,
                content:this.form.content,
                createAt:new Date()
            }
            this.items.push(item)
            this.dialog=false
        },
        read(){
            
        }
    }
}
</script>