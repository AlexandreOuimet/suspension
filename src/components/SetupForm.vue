<template>
  <v-card>
    <v-toolbar color="primary">
      <v-btn icon @click.stop="dialog = false">
        <v-icon @click="closeDialog">mdi-arrow-left</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn text> Save </v-btn>
    </v-toolbar>

    <v-container>
      <span>Setup : {{ setup }}</span>
      <v-text-field label="Title" solo></v-text-field>
      <v-textarea label="Description" solo></v-textarea>
      <h3>FORK</h3>

      <v-row class="justify-center" no-gutters>
        <v-col class="text-center">
          <span class="text-overline">Rebound</span>
          <v-container class="d-flex justify-center">
            <round-slider :radius="radius" :width="width"></round-slider>
          </v-container>
        </v-col>

        <v-col class="text-center">
          <span class="text-overline">Compression</span>
          <v-container class="d-flex justify-center">
            <round-slider :radius="radius" :width="width"></round-slider>
          </v-container>
        </v-col>

        <v-col class="text-center">
          <span class="text-overline">Air Pressure</span>
          <v-container class="d-flex justify-center">
            <round-slider :radius="radius" :width="width"></round-slider>
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
            <round-slider :radius="radius" :width="width"></round-slider>
          </v-container>
        </v-col>

        <v-col class="text-center">
          <span class="text-overline">Low Comp</span>
          <v-container class="d-flex justify-center">
            <round-slider :radius="radius" :width="width"></round-slider>
          </v-container>
        </v-col>

        <v-col class="text-center">
          <span class="text-overline">High Comp</span>
          <v-container class="d-flex justify-center">
            <round-slider :radius="radius" :width="width"></round-slider>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import RoundSlider from "vue-round-slider";

export default {
  components: {
    RoundSlider,
  },

  props: {
    setupId: Number,
  },

  data: () => ({
    radius: 40,
    width: 10,
  }),

  computed: {
    setup() {
      return this.$store.getters.setup(this.setupId);
    },
  },

  methods: {
    closeDialog() {
      this.$emit("close");
    },
  },
};
</script>
