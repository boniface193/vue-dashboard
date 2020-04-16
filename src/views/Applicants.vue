<template>
  <v-layout row class="mt-3">
    <v-flex md3 class="hidden-sm-and-down">
      <v-app class="grey lighten-5">
        <v-container ml-5 mt-5 >
          <h4 class="mb-5">FILTERS</h4>
          <v-list-item>
            <v-list-item-action>
              <v-icon small>fas fa-user-plus</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>New Candidates</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-action>
              <v-icon small>fas fa-user-tag</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Flower Candidates</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-action>
              <v-icon small>fas fa-user-cog</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Still running</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-text-field label="Custom Search" prepend-icon="search" class="ml-3 mr-12"></v-text-field>
          <v-select
            v-model="value"
            :items="items"
            chips
            attach
            clearable
            label="Keyword"
            multiple
            class="ml-3 mr-12"
          ></v-select>
          <v-select
            v-model="job"
            :items="jobs"
            chips
            attach
            clearable
            label="Jobs"
            multiple
            class="ml-3 mr-12"
          ></v-select>
        </v-container>
      </v-app>
    </v-flex>
    <v-flex md9>
        <v-app style="background-color: white; " class="ma-n4">
            <v-container>
                <template>
                    <v-data-table
                    v-model="selected"
                    :single-select="singleSelect"
                    item-key="name" show-select
                    :headers="headers" :items="desserts"
                    sort-by="applied"
                    class="mr-2"
                    >
                    <template v-slot:top>
                        <v-toolbar flat color="white">
                            <v-toolbar-title>Applicants</v-toolbar-title>
                            <v-divider class="mx-4" insert vertical="">

                            </v-divider>
                            <v-space></v-space>
                            <v-btn color="grey lighten-1" dark class="mb-2 mr-2" v-on="on" text><v-icon left>fas fa-upload</v-icon>CSV Import</v-btn>

                            <v-btn color="success" dark class="mb-2" v-on="on" text><v-icon left>add</v-icon>Add candidate</v-btn>
                        </v-toolbar>
                    </template>
                    <template v-slot:item.avatar="{ item }">
                        <v-avatar size="30px"><img :src="item.avatar"></v-avatar>
                    </template>
                    <template v-slot:item.rating="{ item }">
                        <v-rating v-model="item.rating" background-color="purple lighten-3" color="purple" small dense></v-rating>
                    </template>

                    <template v-slot:item.progress="{ item }">
                        <v-progress-linear color="light-blue" height="6" v-model="item.progress" striped=""></v-progress-linear>
                    </template>

                    <template v-slot:item.action="{item}">
                        <v-icon small class="mr-2" @click="editItem(item)" color="green">edit</v-icon>

                        <v-icon small class="mr-2" @click="deleteItem(item)" color="red">delete</v-icon>

                    </template>
                    <template v-slot:no-data>
                        <v-btn color="primary" @click="initialize">Reset</v-btn>
                    </template>
                    </v-data-table>
                </template>
            </v-container>
        </v-app>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    items: ["key1", "key2"],
    value: ["key1", "key2"],
    job: ["Designer", "Programmer"],
    jobs: ["UI/UX", "CTO"],
    singleSelect: false,
    selected: [],
    headers: [
        {text: 'PICTURE', align: 'right', sortable: false, value: 'avatar'},
        {text: 'APPLIED ON',  value: 'applied'},
        {text: 'PROGRESS', value: 'progress'},
        {text: 'RATING', value: 'rating'},
        {text: '', value: 'action', sortable: false}
    ]

  }),
  created(){
      this.initialize()
  },
methods: {
    initialize(){
        this.desserts = [
            // {
            //     avatar: 'https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_640.png', 
            //     name: 'Frozen Yogurt', 
            //     applied: '04/04/2020', 
            //     progress: 70, 
            //     rating: 4
            // },
            {
                avatar: 'https://th.bing.com/th/id/OIP._TCRQCA2Z6XnJI_DBRUMOwHaIE?w=157&h=170&c=7&o=5&pid=1.7', 
                name: 'Youra Mara', 
                applied: '04/04/2020', 
                progress: 30, 
                rating: 1
            },
            // {
            //     avatar: 'https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_640.png', 
            //     name: 'Frozen Yogurt', 
            //     applied: '04/04/2020', 
            //     progress: 70, 
            //     rating: 4
            // },
            {
                avatar: 'https://th.bing.com/th/id/OIP.3P2MmXgslI40Ifl32dLG-QHaIE?w=153&h=168&c=7&o=5&pid=1.7', 
                name: 'Young Kufuli', 
                applied: '03/04/2020', 
                progress: 65, 
                rating: 3
            },
            // {
            //     avatar: 'https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_640.png', 
            //     name: 'Frozen Yogurt', 
            //     applied: '04/04/2020', 
            //     progress: 70, 
            //     rating: 4
            // },
            {
                avatar: 'https://th.bing.com/th/id/OIP.DkGosbdP67z0rtnrdnPjDQHaHz?w=177&h=187&c=7&o=5&pid=1.7', 
                name: 'Chang You', 
                applied: '04/02/2020', 
                progress: 50, 
                rating: 3
            },
            // {
            //     avatar: 'https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_640.png', 
            //     name: 'Frozen Yogurt', 
            //     applied: '04/04/2020', 
            //     progress: 70, 
            //     rating: 4
            // },
            {
                avatar: 'https://th.bing.com/th/id/OIP.h9LXe5AQtcDsb6H-he0hGgHaHf?w=199&h=201&c=7&o=5&pid=1.7', 
                name: 'Febian Brown', 
                applied: '04/04/2020', 
                progress: 70, 
                rating: 4
            },
            {
                avatar: 'https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_640.png', 
                name: 'Frozen Yogurt', 
                applied: '04/04/2020', 
                progress: 70, 
                rating: 4
            },
            {
                avatar: 'https://th.bing.com/th/id/OIP.w-EK647MH1KdWSFG61md3wHaG1?w=203&h=187&c=7&o=5&pid=1.7', 
                name: 'Kuba Lionard', 
                applied: '04/2/2020', 
                progress: 70, 
                rating: 4
            },
            {
                avatar: 'https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_640.png', 
                name: 'Frozen Yogurt', 
                applied: '04/04/2020', 
                progress: 30, 
                rating: 0
            },
            {
                avatar: 'https://th.bing.com/th/id/OIP.6Q9kK1dTs3P9SmmyAjiSIgHaG1?w=204&h=184&c=7&o=5&pid=1.7', 
                name: 'Sodier Don', 
                applied: '04/01/2020', 
                progress: 80, 
                rating: 5
            },
            {
                avatar: 'https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_640.png', 
                name: 'Frozen Yogurt', 
                applied: '04/04/2020', 
                progress: 20, 
                rating: 0
            },
            {
                avatar: 'https://th.bing.com/th/id/OIP.NHPgp2wqo2ny06q_GBsqpwHaHA?w=213&h=201&c=7&o=5&pid=1.7', 
                name: 'Matty Williams', 
                applied: '18/04/2020', 
                progress: 70, 
                rating: 4
            },
            {
                avatar: 'https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_640.png', 
                name: 'Frozen Yogurt', 
                applied: '04/04/2020', 
                progress: 70, 
                rating: 4
            },
            // {
            //     avatar: 'https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_640.png', 
            //     name: 'Frozen Yogurt', 
            //     applied: '04/04/2020', 
            //     progress: 70, 
            //     rating: 4
            // },
            {
                avatar: 'https://th.bing.com/th/id/OIP.A2v8PBPhrDb5tU5dsFMnvQHaHa?w=189&h=184&c=7&o=5&pid=1.7', 
                name: 'Caty Mark', 
                applied: '14/03/2020', 
                progress: 70, 
                rating: 4
            },
            {
                avatar: 'https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_640.png', 
                name: 'Frozen Yogurt', 
                applied: '04/04/2020', 
                progress: 14, 
                rating: 0
            },
            {
                avatar: 'https://th.bing.com/th/id/OIP.f_TwgvUgh6r3nTlVuihpBwHaJK?w=163&h=191&c=7&o=5&pid=1.7', 
                name: 'Kira White', 
                applied: '04/04/2020', 
                progress: 70, 
                rating: 4
            },
            {
                avatar: 'https://th.bing.com/th/id/OIP.USP1T_5fjD1VcqeFBkbNDwHaHa?w=183&h=183&c=7&o=5&pid=1.7', 
                name: 'Jack Power', 
                applied: '04/04/2020', 
                progress: 70, 
                rating: 4
            },
            {
                avatar: 'https://th.bing.com/th/id/OIP._4ykrJTn6s4wCYSfixuWDQHaHa?w=181&h=183&c=7&o=5&pid=1.7', 
                name: 'Kira Stone', 
                applied: '04/04/2020', 
                progress: 70, 
                rating: 4
            },
            {
                avatar: 'https://th.bing.com/th/id/OIP.-T025WLNuofAKQCduA5hFwHaHl?w=173&h=177&c=7&o=5&pid=1.7', 
                name: 'Thur Kura', 
                applied: '04/04/2020', 
                progress: 25, 
                rating: 3
            },
            {
                avatar: 'https://th.bing.com/th/id/OIP.wh3KB3WlFHoTOPyCcKlUBgHaLQ?w=126&h=184&c=7&o=5&pid=1.7', 
                name: 'Chifu Wang', 
                applied: '15/04/2020', 
                progress: 35, 
                rating: 2
            },
            {
                avatar: 'https://th.bing.com/th/id/OIP.V8RNVXHaCQ9PpmglX52V6wHaH5?w=160&h=170&c=7&o=5&pid=1.7', 
                name: 'Yommy Comic', 
                applied: '04/07/2020', 
                progress: 10, 
                rating: 0
            }
          ]
    }
}
};
</script>

<style lang="stylus" scoped>

</style>