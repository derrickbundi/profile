<template>
  <div class="footer">
    <v-divider></v-divider>
    <v-row class="marginFooter">
      <v-col xs12 sm12 md4>
      <p align="center">ABOUT DERRICK</p>
      <v-divider></v-divider>
       <p class="mt-2">About Derrick</p>
       <p>Home</p>
       <p>Projects</p>
      </v-col>
      <v-col xs12 sm12 md2 align="center">
        <p>SOCIAL CONNECT</p>
        <v-divider></v-divider>
        <v-btn class="mt-5 mr-5" outlined fab color="teal">
        <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn class="mt-5 mr-5" outlined fab color="teal">
        <v-icon>mdi-twitter</v-icon>
        </v-btn>
        <v-btn class="mt-5" outlined fab color="teal">
        <v-icon>mdi-whatsapp</v-icon>
        </v-btn>
      </v-col>
      <v-col xs12 sm12 md6 clas="contact">
        <p align="center">TALK TO DERRICK</p>
        <v-divider></v-divider>
        <v-form v-model="contact">
          <v-row class="mb-n5">
            <v-col cols="12" md="6">
              <v-text-field
                v-model="firstname"
                label="First Name"
                required
                prepend-icon="mdi-pencil-outline"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="lastname"
                label="Last Name"
                required
                prepend-icon="mdi-pencil-outline"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mb-n5">
            <v-col cols="12" md="6">
              <v-text-field
                v-model="contact"
                label="Contact (Optional)"
                required
                prepend-icon="mdi-phone"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="email"
                label="E-mail *"
                required
                prepend-icon="mdi-email-outline"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="12">
              <v-textarea
                v-model="content"
                label="Body *"
                required
                prepend-icon="mdi-pencil-outline"
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row>
            <hr />
            <v-col cols="12" md="12" class="text-right">
              <v-btn tile color="teal" @click="submit">Send Message</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
    <br>
    <v-divider></v-divider>
    <v-row>
      <v-col align="center">
        <!-- <?php date(); ?> -->
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer {
  /* margin: 10px 30px 0px 30px; */
  background-color: #c8c2c1;
  color: teal;
}
.marginFooter {
  margin: 10px 30px 0px 30px;
}
.contact {
  border: solid 1px orange;
}
</style>