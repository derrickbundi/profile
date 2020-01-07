<template>
  <div class="footer">
    <v-divider />
    <v-row class="marginFooter">
      <v-col
        cols="12"
        xs="3"
        sm="3"
        md="3"
      >
        <p align="center">
          ABOUT DERRICK
        </p>
        <v-divider />
        <p class="mt-2">
          <a
            href="#about"
            class="ab"
          >About Derrick</a>
        </p>
        <p>
          <v-icon left>
            mdi-format-align-justify
          </v-icon>
          <a
            href="/"
            class="ab"
          >Home</a>
        </p>
        <p>
          <v-icon left>
            mdi-folder
          </v-icon>
          <a
            href="/projects"
            class="ab"
          >Projects</a>
        </p>
        <p>
          <v-icon left>
            mdi-account-group
          </v-icon>
          <a
            href="/community"
            class="ab"
          >Community</a>
        </p>
      </v-col>
      <v-col
        cols="12"
        xs="3"
        sm="3"
        md="3"
        align="center"
      >
        <p>SOCIAL CONNECT</p>
        <v-divider />
        <v-btn
          class="mt-5 mr-5"
          fab
          outlined
          color="teal"
        >
          <a
            href="https://en-gb.facebook.com/bundi.derrick"
            class="link"
            target="blank"
          >
            <v-icon>mdi-facebook</v-icon>
          </a>
        </v-btn>
        <v-btn
          class="mt-5 mr-5"
          outlined
          fab
          color="teal"
        >
          <a
            href="https://twitter.com/derrickbundi01"
            class="link"
            target="blank"
          >
            <v-icon>mdi-twitter</v-icon>
          </a>
        </v-btn>
        <v-btn
          class="mt-5"
          outlined
          fab
          color="teal"
        >
          <a
            href="https://wa.me/254725212418"
            class="link"
            target="blank"
          >
            <v-icon>mdi-whatsapp</v-icon>
          </a>
        </v-btn>
      </v-col>
      <v-col
        cols="12"
        xs="3"
        sm="3"
        md="6"
      >
        <p align="center">
          TALK TO DERRICK
        </p>
        <v-divider />
        <v-form class="contact">
          <v-row class="mb-n5">
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="contact.firstname"
                :rules="firstRules"
                label="First Name"
                required
                prepend-icon="mdi-pencil-outline"
              />
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="contact.lastname"
                :rules="lastRules"
                label="Last Name"
                required
                prepend-icon="mdi-pencil-outline"
              />
            </v-col>
          </v-row>
          <v-row class="mb-n5">
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="contact.contact"
                :counter="10"
                label="Contact (Optional)"
                prepend-icon="mdi-phone"
              />
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="contact.email"
                :rules="emailRules"
                label="E-mail *"
                required
                prepend-icon="mdi-email-outline"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="12"
              md="12"
            >
              <v-textarea
                v-model="contact.body"
                :rules="bodyRules"
                label="Body *"
                required
                prepend-icon="mdi-pencil-outline"
              />
            </v-col>
          </v-row>
          <v-row>
            <hr>
            <v-col
              cols="12"
              md="12"
              class="text-right"
            >
              <v-btn
                v-show="contact.firstname && contact.lastname && contact.email && contact.body"
                tile
                color="teal"
                @click="formSubmit"
              >
                Send Message
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
    <br>
    <v-divider />
    <v-row>
      <v-col align="center">
        <v-icon>mdi-copyright</v-icon> . 2020 |
        All Rights Reserved. Kenya
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import axios from 'axios'
export default {
  data: () => ({
    data: [],
    contact: {
      firstname: '',
      lastname: '',
      contact: '',
      email: '',
      body: '',
    },
    firstRules: [
      v => !!v || 'First Name is required',
      v => v.length >= 3 || 'First Name must not be less than 2 characters'
    ],
    lastRules: [
      v => !!v || 'Last Name is required',
      v => v.length >= 3 || 'Last Name must not be less than 2 characters'
    ],
    bodyRules: [
      v => !!v || 'Body is required',
      v => v.length >= 5 || 'Body should not be less than 5 characters'
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  }),
  methods: {
    formSubmit() {
      axios.post("http://serverap.herokuapp.com/api/profile/contact", this.contact)
      .then(response => {
        Swal.fire({
          icon: 'success',
          // title: response.status,
          title: 'Hi, ' + response.data.name,
          text: response.data.message,
          // text: 'Message Sent to Derrick Successfully',
          footer: 'Here from me soon...'
        })
        // eslint-disable-next-line no-console
        console.log(response)
      })
      .catch(response => {
        // console.log(response.response.data)
        // error.response.data;
        Swal.fire({
          title: response.message, 
          // text: response.message.errors,
          text: 'Oops, input can\'t be empty',
          icon: "warning"
        })
      });
    }
  }
}
</script>

<style scoped>
.footer {
  background-color: #c8c2c1;
  color: teal;
}
.marginFooter {
  margin: 10px 30px 0px 30px;
}
.contact {
  /* border: solid 1px teal; */
  color: white;
}
.ab {
  text-decoration: none;
  color: teal;
}
.icon {
  padding: 20px;
  font-size: 30px;
  width: 50px;
  text-align: center;
  text-decoration: none;
}
.fa:hover {
  opacity: 0.7;
}
.fa-facebook {
  background: #3B5998;
  color: white;
}
.fa-twitter {
  background: #55ACEE;
  color: white;
}
</style>