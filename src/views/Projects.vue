<template>
  <div class="projects">
    <!-- Row Projects -->
    <!-- Header -->
    <div align="center">My Projects...</div>
    <!-- End -->
    <v-row>
      <v-col>
        <v-expansion-panels v-for="project in projects" :key="project.title" router :to="project.link">
          <v-expansion-panel class="mt-2">
            <v-expansion-panel-header>
              <v-flex>
                {{project.title}}
              </v-flex>
              <v-spacer></v-spacer>
              <v-flex>
                <div class="text-right">
                  <v-chip outlined>
                <v-icon>mdi-account</v-icon>
                Status: Ongoing
              </v-chip>
                </div>
              </v-flex>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div class="font-weight-bold">Start date: {{project.start}}</div>
              <div class="text-justify">{{project.content}}</div>
              <v-divider></v-divider>
              <v-row>
                <v-btn color="teal" text>Explore</v-btn>
                <v-spacer></v-spacer>
                <v-btn text color="teal"><v-icon>{{project.icon}}</v-icon></v-btn>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-divider></v-divider>
        </v-expansion-panels>
      </v-col>
    </v-row>
    <!-- End -->
  </div>
</template>

<script>
export default {
  data: () => ({
    projects: [
      {
        title: "Express Kenya Limited Laravel",
        person: "Derrick Bundi",
        start: "2018",
        status: "ongoing",
        content:
          "Express Kenya is a project that aim at online booking for every matatu dealers, \
          service providers upload their services i.e matatu they have on their routes,\
          travellers can book online to their services.",
        icon: "mdi-gitlab",
        link: ""
      },
      {
        title: "Meru Eagles Limited | Laravel",
        person: "Derrick Bundi",
        start: "Jan 2019",
        status: "complete",
        content:
          "Meru Eagles is a Bakery website designed to FEP county company for their ongoing bakery, \
          customers can make order, buy breads, see investors meeting notification and look to products\
          they are offering as they compare prices",
        icon: "mdi-github-circle",
        link: ""
      },
      {
        title: "Get Jobs in Kenya | Laravel",
        person: "Derrick Bundi",
        start: "20th Dec 2019",
        status: "complete",
        content:
          "Get Jobs Kenya is website I designed for advertisement of jobs and merchants platforms\
          while in year 2 in Taita Taveta Univeristy. The website had functionalities such as \
          posting jobs by admin and merchants where they could upload their services such as selling\
          shoes in the website",
        icon: "mdi-gitlab",
        link: ""
      },
      {
        title: "Portifolio | Vue Js and Node JS",
        person: "Derrick Bundi",
        start: "2019",
        status: "complete",
        content:
          "This is my portifolio I designed using Vue Js as the frontend with material desing i.e Vuetify\
          because of it rich in user interface experiences.",
        icon: "mdi-github-circle",
        link: ""
      }
    ]
  }),
  computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.person === "Derrick Bundi";
      });
    }
  }
};
</script>

<style scoped>
</style>