<template>
  <v-container>
    <v-list two-line>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item v-for="(setup, i) in setups" :key="i">
          <v-list-item-content>
            <v-list-item-title>{{ setup.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ setup.description }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon v-if="setup.favorite" color="yellow">mdi-star</v-icon>
            <v-icon v-else>mdi-star-plus-outline</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <v-btn fab fixed bottom right color="primary">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import { sync } from "vuex-pathify";

export default {
  components: {},
  data: () => ({
    selectedItem: null,
  }),

  computed: { setups: sync("setups") },

  methods: {
    log() {
      console.log("Logging : ", this.setups);
    },
  },
};
</script>
