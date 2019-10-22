<template>
  <div class="home">
    <!-- Row Top-->
    <v-row>
      <v-col
        xs12
        sm12
        md6
        align="center"
        justify="center"
        v-for="pro in profile"
        :key="pro.contact"
      >
        <v-avatar size="200" class="grey lighten-2">
          <v-img :src="pro.picture"></v-img>
        </v-avatar>
        <p class="subheading mt-4">
          <v-btn outlined color="teal" class="white--text">{{pro.name}} | {{pro.contact}}</v-btn>
        </p>
      </v-col>
      <v-col xs12 sm12 md6 v-for="pro in profile" :key="pro.contact">
        <p class="subheading uppercase" align="center">
          <b>{{pro.specialty}}</b>
        </p>
        <p>Experienced programmer for 2 years</p>
        <blockquote class="blockquote">~Everything is doable if thought through~</blockquote>
        <p>Proficient in...</p>
        <blockquote class="blockquote">
          <p>Laravel(PHP) | Jquery | CSS and HTML | Bootstrap</p>
          <p>Node JS and Vue JS</p>
          <p>Mysql and Mongo DB</p>
        </blockquote>
      </v-col>
    </v-row>
    <!-- End -->
    <v-divider></v-divider>
    <!-- Row Resource -->
    <v-row>
      <v-col xs6 sm6 md2 v-for="social in socials" :key="social.name" router :to="social.link">
        <a :href="social.link" class="link" target="blank">
          <v-btn outlined block class="teal white--text">
          {{social.name}}          
          <v-icon>{{social.icon}}</v-icon>          
        </v-btn>
        </a>
      </v-col>
    </v-row>
    <!-- End -->
    <v-divider></v-divider>
    <br />
    <!-- Row History -->
    <div align="center">Work History</div>
    <br />
    <v-row>
      <v-col xs12 sm12 md4 v-for="work in works" :key="work.name" router :to="work.link">
        <v-card class="mx-auto" width="350" shaped>
          <v-img
            class="white--text align-end"
            height="200px"
            :src="work.pic"
          >
          </v-img>
          <v-card-title class="teal white--text">{{work.name}}</v-card-title>
          <v-card-text class="text--primary">
            <div><b>{{work.role}}</b></div>
            <v-divider></v-divider>
            <div>{{work.description}}</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="teal" text>
              <a :href="work.link" target="blank" class="link">Explore</a>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      
    </v-row>
    <!-- End -->
    <br>
    <div align="center">More about Derrick...</div>
    <br>
    <!-- Row Projects -->
    <v-row>
      <v-col class="text-justify">
        <p>I am Derrick Bundi, passionate and focused man who adheres to attaining and giving the best
          in whatever I lay my hands in doing. I believe and to this day hold that "<b>Everything is doable if thought through</b>".
          Who could have told that any woman could bear a son who will at some point come up with an application
          that connect the whole world, "Mark Zuckerberg", What of Microsoft ?
        </p>
        <p>I pursued <b>Bachelor of Business Information Technology (BBIT)</b> at <b>Taita Taveta University</b>
        for <b>Four Years</b> from 2015-2019. It was a great exposure for me and that why a can plainly tell 
        how it feels to start something give it your best and fail. Basically, during my four years i runned
        a Job advetisment website which I created while I was in second year I runned for 6months, with all the 
        the effort it could not be sustained because of the monetization model implemented.
        </p>
        <blockquote class="blockquote">
          <p>
            It is the  Resistance of anyone letting anything worthwhile go that make him/her have it after all.
          </p>
        </blockquote>
      </v-col>
    </v-row>
    <!-- End -->
    <br>
    <div align="center">Download Center</div>
    <br>
    <!-- Row Download Center -->
    <v-row>
      <v-col align="center">
      <v-btn color="teal" rounded>
      <a href="/Downloads/derrick_CV.pdf" target="blank" class="link white--text">My CV</a>
      <v-icon right class="white--text">mdi-download</v-icon>
      </v-btn>
      </v-col>
      <v-col align="center">
      <v-btn color="teal" rounded>
      <a href="/Downloads/derrick_KCSE_result_slip.pdf" target="blank" class="link white--text">
       KCSE Result slip
      </a>
      <v-icon right class="white--text">mdi-download</v-icon>
      </v-btn>
      </v-col>
      <v-col align="center">
      <v-btn color="teal" rounded>
      <a href="/Downloads/derrick_KCPE_result_slip.pdf" target="blank" class="link white--text">
      kcpe Result slip
      </a>
      <v-icon right class="white--text">mdi-download</v-icon>
      </v-btn>
      </v-col>
      <v-col align="center">
      <v-btn color="teal" rounded>
      <a href="/Downloads/award_1.pdf" target="blank" class="link white--text">
      Awards
      </a>
      <v-icon right class="white--text">mdi-download</v-icon>
      </v-btn>
      </v-col>
    </v-row>
    <!-- End -->
  </div>
</template>

<script>
export default {
  data: () => ({
    profile: [
      {
        name: "Derrick Bundi",
        contact: "0725212418",
        picture: "/Images/abc.jpg",
        specialty: "A fullstack developer"
      }
    ],
    socials: [
      { name: "github", icon: "mdi-github-circle", link: "https://github.com/derrickbundi/" },
      { name: "gitlab", icon: "mdi-gitlab", link: "https://gitlab.com/bundi" },
      { name: "facebook", icon: "mdi-facebook", link: "https://en-gb.facebook.com/bundi.derrick" },
      { name: "linkedin", icon: "mdi-linkedin-box", link: "https://www.linkedin.com/in/derrick-bundi-b2898b120/" },
      { name: "twitter", icon: "mdi-twitter-circle", link: "https://twitter.com/derrickbundi01" },
      { name: "whatsapp", icon: 'mdi-whatsapp', link: "https://wa.me/254725212418" }
    ],
    works: [
      {
        name: "Obitell Global Limited",
        pic: "/Images/obitell.png",
        description: "Features enhancement and managing company website",
        role: "Web Developer",
        link: "https://obitellglobal.com"
      },
      {
        name: "FEP (Meru Eagles)",
        pic: "/Images/fep.png",
        description: "Building and managing County Company Website, Data analysis ie Excel",
        role: "IT Assistants",
        link: "https://www.fep-group.com"
      },
      {
        name: "Coffee Farm Society",
        pic: "/Images/coffee.jpg",
        description: "Keeping track and recording farmers harvest inputs",
        role: "Sherry Recorder",
        // link: ""
      }
    ]
  })
};
</script>

<style scoped>
.blockquote {
  border-left: solid indigo 5px;
}
.uppercase {
  text-transform: uppercase;
}
.link {
  text-decoration: none;
}
</style>