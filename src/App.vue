<template>
  <v-app app>
    <Navbar />
    <v-content class="body">
      <div class="container">
        <router-view />
      </div>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  data: () => ({
    //
  }),
};
</script>
<style scoped>
  .body{
    background-color: #dedede;
  }
</style>
