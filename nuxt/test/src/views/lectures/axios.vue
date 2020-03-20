<template>
  <v-container grid-list-md fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <v-toolbar color="primary">axios eg</v-toolbar>
      </v-flex>

      <v-flex xs3>
        <v-card>
          <v-card-title primary-title>create</v-card-title>
          <v-card-text>
            <v-textarea v-model="textCreate" rows="10"></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="success" @click="create">submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card>
          <v-card-title primary-title>read</v-card-title>
          <v-card-text>
            <v-textarea v-model="textRead" rows="10"></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="success" @click="read">read</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card>
          <v-card-title primary-title>put</v-card-title>
          <v-card-text>
            <v-textarea v-model="textUpdate" rows="10"></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="success" @click="update">put</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card>
          <v-card-title primary-title>delete</v-card-title>
          <v-card-text>
            <v-textarea v-model="textDelete" rows="10"></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="success" @click="del">del</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      textCreate: "",
      textRead: "",
      textUpdate: "",
      textDelete: ""
    }
  },
  methods: {
    create() {
      this.$axios
        .post("http://localhost:5001/test-vf-lsm-ae9ca/us-central1/test")
        .then(r => (this.textCreate = r.data))
        .catch(e => console.error(e.message))
    },
    read() {
      this.$axios
        .get("http://localhost:5001/test-vf-lsm-ae9ca/us-central1/test")
        .then(r => (this.textRead = r.data))
        .catch(e => console.error(e.message))
    },
    update() {
      this.$axios
        .put("http://localhost:5001/test-vf-lsm-ae9ca/us-central1/test/put123")
        .then(r => (this.textUpdate = r.data))
        .catch(e => console.error(e.message))
    },
    del() {
      this.$axios
        .delete(
          "http://localhost:5001/test-vf-lsm-ae9ca/us-central1/test/del123"
        )
        .then(r => (this.textDelete = r.data))
        .catch(e => console.error(e.message))
    }
  }
}
</script>