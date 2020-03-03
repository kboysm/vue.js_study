<template>
  <v-card>
    <v-card-text>
      <v-textarea v-model="txt" />
    </v-card-text>
    <v-card-actions>
      <v-btn @click="write">write</v-btn>
      <v-btn @click="read">read</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
const firebase = require("firebase")
// Required for side-effects
require("firebase/firestore")

// Initialize Cloud Firestore through Firebase

export default {
  data() {
    return {
      txt: '',
      db: null
    }
  },
  mounted() {
        firebase.initializeApp({
        apiKey: '비밀키',
        authDomain: '비밀도메인',
        projectId: '비밀'
        });
        this.db = firebase.firestore();
        // this.db.settings({ timestampsInSnapshots: true })
    },
  methods: {
    write() {
      this.db.collection("users").add({
        first: "Ada",
        last: "Lovelace",
        born: 1815
      })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          this.txt = docRef.id
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    },
    read() {
      this.db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.txt = JSON.stringify(doc.data())
          console.log(`${doc.id} => ${doc.data()}`);
        });
      });
    }
  }
}
</script>