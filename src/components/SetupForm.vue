<template>
  <v-card>
    <v-toolbar color="primary" dark dense>
      <v-btn icon @click.stop="dialog = false">
        <v-icon @click="closeDialog">mdi-arrow-left</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn v-if="setup.id != ''" text color="error" @click="deleteSetup">
        Delete
      </v-btn>
      <v-btn text @click="saveSetup"> Save </v-btn>
    </v-toolbar>

    <v-form ref="form">
      <v-container>
        <v-text-field
          v-model="setup.title"
          label="Title"
          solo
          :rules="titleRule"
        ></v-text-field>
        <v-textarea
          v-model="setup.description"
          label="Description"
          solo
        ></v-textarea>

        <h3>FORK</h3>

        <v-row class="justify-center" no-gutters>
          <v-col class="text-center">
            <span class="text-overline">Rebound</span>
            <v-container class="d-flex justify-center">
              <round-slider
                v-model="setup.fork.rebound"
                max="22"
                :radius="radius"
                :width="width"
                :rangeColor="secondary"
                :tooltipColor="accent"
              ></round-slider>
            </v-container>
          </v-col>

          <v-col class="text-center">
            <span class="text-overline">Compression</span>
            <v-container class="d-flex justify-center">
              <round-slider
                v-model="setup.fork.compression"
                max="15"
                :radius="radius"
                :width="width"
                :rangeColor="secondary"
                :tooltipColor="accent"
              ></round-slider>
            </v-container>
          </v-col>

          <v-col class="text-center">
            <span class="text-overline">Air Pressure</span>
            <v-container class="d-flex justify-center">
              <round-slider
                v-model="setup.fork.airPressure"
                max="110"
                :radius="radius"
                :width="width"
                :rangeColor="secondary"
                :tooltipColor="accent"
              ></round-slider>
            </v-container>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <h3>SHOCK</h3>

        <v-row class="justify-center" no-gutters>
          <v-col class="text-center">
            <span class="text-overline">Rebound</span>
            <v-container class="d-flex justify-center">
              <round-slider
                v-model="setup.shock.rebound"
                max="20"
                :radius="radius"
                :width="width"
                :rangeColor="secondary"
                :tooltipColor="accent"
              ></round-slider>
            </v-container>
          </v-col>

          <v-col class="text-center">
            <span class="text-overline">Low Comp</span>
            <v-container class="d-flex justify-center">
              <round-slider
                v-model="setup.shock.lowComp"
                max="5"
                :radius="radius"
                :width="width"
                :rangeColor="secondary"
                :tooltipColor="accent"
              ></round-slider>
            </v-container>
          </v-col>

          <v-col class="text-center">
            <span class="text-overline">High Comp</span>
            <v-container class="d-flex justify-center">
              <round-slider
                v-model="setup.shock.highComp"
                max="3"
                :radius="radius"
                :width="width"
                :rangeColor="secondary"
                :tooltipColor="accent"
              ></round-slider>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
import RoundSlider from "vue-round-slider";

export default {
  components: {
    RoundSlider,
  },

  data: () => ({
    radius: 40,
    width: 10,
    setup: {},
    titleRule: [(v) => !!v || "Title is required"],
  }),

  created() {
    this.setup = this.$store.getters["setup"];
  },

  computed: {
    secondary() {
      return this.$vuetify.theme.themes.light.secondary;
    },

    accent() {
      return this.$vuetify.theme.themes.light.accent;
    },
  },

  methods: {
    closeDialog() {
      this.$emit("close");
    },

    saveSetup() {
      if (!this.$refs.form.validate()) return;
      this.$store.dispatch("saveSetup", this.setup);
      this.$emit("close");
    },

    deleteSetup() {
      this.$store.dispatch("deleteSetup", this.setup);
      this.$emit("close");
    },
  },
};
</script>
