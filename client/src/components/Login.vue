<template>
  <v-container
    id='input-usage'
    fluid
  >
    <v-row>
      <v-col cols='6'>
        <v-text-field
          v-model='username'
          label='Username'
        ></v-text-field>
      </v-col>
      <v-col cols='6'>
        <v-text-field
          v-model='password'
          label='Password'
          :type="'password'"
        ></v-text-field>
      </v-col>
      <v-col cols='12'>
        <v-btn
          block
          elevation='2'
          v-on:click='onLogin'
        >Login</v-btn>
      </v-col>
      <v-col cols='12'>
        <span>{{message}}</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data: () => ({
    username: '',
    password: '',
    message: ''
  }),
  methods: {
    onLogin () {
    this.message = ''
      const url = 'http://localhost:5000/api/v1/login'
      const body = {
        username: this.username,
        password: this.password
      }
      axios.post(url, body)
        .then(() => {
          this.message = 'Logged in!'
        })
        .catch(() => {
          this.message = "Wrong email or password"
        })
    }
  }
}
</script>

<style></style>
