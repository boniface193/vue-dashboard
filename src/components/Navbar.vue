<template>
  <nav>
    <template>
      <v-app-bar app style="cursor: pointer; " dark class="grey darken-3">
          <v-icon @click="drawer = !drawer" right class="mt-1">fas fa-bars</v-icon>
       </v-app-bar>
    </template>

    <v-navigation-drawer v-model="drawer" dark app class="grey darken-3 py-0">
      <v-container>
        <v-row>
          <v-col md="9">
            <v-progress-circular
              :rotate="360"
              :size="50"
              :width="7"
              :value="value"
              color="lime accent-3"
              class="mt-n1"
            >{{value}}</v-progress-circular>
          </v-col>

          <v-col md="3">
            <!-- <v-icon right class="mt-1">fas fa-bars</v-icon> -->
          </v-col>
        </v-row>
      </v-container>
      <v-list nav>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon small>{{link.icon}}</v-icon>
          </v-list-item-action>

          <v-list-item-content class="border-0">
            <v-list-item-title>{{link.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-layout row style="position: absolute; bottom:0;">
        <v-flex md-10>
          <v-list-item dense>
            <v-list-item-avatar class="ml-2">
              <v-img src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_640.png"></v-img>
            </v-list-item-avatar>
            <v-list-item-action class="ml-8">
              <v-badge color="error" overlap>
                <template slot="badge">3</template>
                <v-icon color="tertiary">fas fa-bell</v-icon>
              </v-badge>
            </v-list-item-action>
          </v-list-item>
        </v-flex>
        <v-flex md-2>
          <v-tooltip top>
            <template v-slot:activator=" { on } ">
              <v-btn text icon v-on="on" class="mt-2">
                <v-icon dark right>fas fa-sign-out-alt</v-icon>
              </v-btn>
            </template>
            <span>Exit</span>
          </v-tooltip>
        </v-flex>
        <v-flex md12>
          <v-card color="grey darken-1">
            <v-list-item dense>
              <v-list-item-action>
                <v-btn class="mx-2" fab dark small color="blue">
                  <v-icon dark>fas fa-heart</v-icon>
                </v-btn>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>AAE IdeaPro</v-list-item-title>
              </v-list-item-content>
              <v-icon dark class="mr-2">fas fa-chevron-down</v-icon>
            </v-list-item>
          </v-card>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    links: [
      { icon: "fas fa-tachometer-alt", text: "Dashboard", route: "/" },
      { icon: "fas fa-users", text: "Applicants", route: "/Applicants" },
      { icon: "fas fa-briefcase", text: "Jobs", route: "/Jobs" },
      { icon: "fas fa-calendar-alt", text: "Calendar", route: "/Calender" },
      { icon: "fas fa-clipboard-list", text: "Reports", route: "/Reports" }
    ],

    interval: {},
    value: 0
  }),
  beforeDestroy() {
    clearInterval(this.interval);
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0);
      }
      this.value += 10;
    }, 1000);
  }
};
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>