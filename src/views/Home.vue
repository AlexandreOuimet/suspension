<template>
  <v-container>
    <v-list two-line>
      <v-list-item-group color="primary">
        <v-list-item
          v-for="setup in setups"
          :key="setup.id"
          @click.stop="openDialog(setup.id)"
        >
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

    <v-dialog v-model="dialog" fullscreen>
      <setup-form @close="dialog = false" :item="selectedItem"></setup-form>
    </v-dialog>
  </v-container>
</template>

<script>
import SetupForm from "../components/SetupForm.vue";

export default {
  components: {
    SetupForm,
  },

  data: () => ({
    selectedItem: null,
    dialog: false,
    radius: 40,
    width: 10,
    setups: {},
  }),

  created() {
    this.setups = this.$store.getters["setups"];
  },

  methods: {
    openDialog(setupId) {
      this.selectedItem = setupId;
      this.dialog = true;
    },
  },
};
</script>
