<template>
  <v-container>
    <h4 class="text-center" v-if="setups.length == 0">No setups to display!</h4>

    <v-list v-else two-line>
      <v-list-item
        v-for="setup in setups"
        :key="setup.id"
        @click.stop="openDialog(setup.id)"
      >
        <v-list-item-content>
          <v-list-item-title class="text-subtitle-2">{{
            setup.title
          }}</v-list-item-title>
          <v-list-item-subtitle>{{ setup.description }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon @click.stop="triggerFavorite(setup)">
            <v-icon v-if="setup.favorite" color="accent">mdi-star</v-icon>
            <v-icon v-else>mdi-star-plus-outline</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>

    <v-btn fab fixed bottom right color="secondary" @click="openDialog(-1)">
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <v-dialog v-model="dialog" v-if="dialog" fullscreen>
      <setup-form @close="closeDialog"></setup-form>
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
    dialog: false,
    setups: {},
  }),

  created() {
    this.setups = this.$store.getters["setups"];
  },

  methods: {
    openDialog(setupId) {
      this.$store.dispatch("setCurrentSetup", setupId);
      this.dialog = true;
    },

    closeDialog() {
      this.dialog = false;
      this.$store.dispatch("setCurrentSetup", -1);
    },

    triggerFavorite(setup) {
      this.$store.dispatch("triggerFavorite", setup);
    },
  },
};
</script>
