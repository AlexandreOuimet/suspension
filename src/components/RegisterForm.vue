<template>
  <v-card class="d-flex align-center justify-center">
    <v-card-text>
      <v-row>
        <v-col>
          <p class="text-center text-h4">SUSPENSION</p>
          <p class="text-center text-h4">LOGGER</p>
        </v-col>
      </v-row>
      <v-row>
        <v-text-field solo label="Email"></v-text-field>
      </v-row>
      <v-row>
        <v-text-field solo label="Password"></v-text-field>
      </v-row>
      <v-row class="pt-0 align-center">
        <v-btn text x-small @click="login">Login?</v-btn>
        <v-spacer />
        <v-btn color="primary" @click="createAccount">Create an account</v-btn>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    email: "",
    password: "",
  }),

  methods: {
    createAccount() {
      this.$emit("createAccount");
    },

    login() {
      this.$emit("login");
    },
  },
};
</script>
