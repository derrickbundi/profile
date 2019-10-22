<template>
  <nav>
    <v-toolbar app >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-dialog v-model="directContact" width="500">
        <template v-slot:activator="{on}">
        <v-btn icon v-on="on">
         <v-icon>mdi-message-processing-outline</v-icon>
        </v-btn>
        </template>
        <v-card>
          <v-card-title primary-title class="headline justify-center">
            DIRECT CONTACTS
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <p class="mt-4">Email: derrick.bundi27@gmail.com</p>
            <p>Contact: +2540725212418</p>
            <P>Twitter: #derrickbundi01</P>
            <p>Facebook: Derrick Bundi</p>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="directContact = false">Exit</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- dropdown -->
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" text class="">
            <v-icon left>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app temporary class="teal">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="/Images/abc.jpg" />
          </v-avatar>
          <p class="white--text subheading mt-1">Derrick Bundi</p>
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>

export default {
  components: {
  },
  data: () => ({
    drawer: false,
    links: [
      { icon: "mdi-view-dashboard-outline", text: "Dashboard", route: "/" },
      { icon: "mdi-folder", text: "My Projects", route: "/projects" },
    ],
    directContact: false,
  })
};
</script>

<style scoped>
</style>