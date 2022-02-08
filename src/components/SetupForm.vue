<template>
  <v-card>
    <v-toolbar color="primary">
      <v-btn icon @click.stop="dialog = false">
        <v-icon @click="closeDialog">mdi-arrow-left</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn icon>
        <v-icon @click.prevent="setup.favorite = !setup.favorite">{{
          setup.favorite ? "mdi-star" : "mdi-star-plus-outline"
        }}</v-icon>
      </v-btn>
      <v-btn text @click="save"> Save </v-btn>
    </v-toolbar>

    <v-container>
      <v-text-field v-model="title" label="Title" solo></v-text-field>
      <v-textarea v-model="description" label="Description" solo></v-textarea>

      <h3>FORK</h3>

      <v-row class="justify-center" no-gutters>
        <v-col class="text-center">
          <span class="text-overline">Rebound</span>
          <v-container class="d-flex justify-center">
            <round-slider
              v-model="forkRebound"
              max="22"
              :radius="radius"
              :width="width"
            ></round-slider>
          </v-container>
        </v-col>

        <v-col class="text-center">
          <span class="text-overline">Compression</span>
          <v-container class="d-flex justify-center">
            <round-slider
              v-model="forkCompression"
              max="15"
              :radius="radius"
              :width="width"
            ></round-slider>
          </v-container>
        </v-col>

        <v-col class="text-center">
          <span class="text-overline">Air Pressure</span>
          <v-container class="d-flex justify-center">
            <round-slider
              v-model="forkAirPressure"
              max="110"
              :radius="radius"
              :width="width"
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
              v-model="shockRebound"
              max="20"
              :radius="radius"
              :width="width"
            ></round-slider>
          </v-container>
        </v-col>

        <v-col class="text-center">
          <span class="text-overline">Low Comp</span>
          <v-container class="d-flex justify-center">
            <round-slider
              v-model="shockLowComp"
              max="5"
              :radius="radius"
              :width="width"
            ></round-slider>
          </v-container>
        </v-col>

        <v-col class="text-center">
          <span class="text-overline">High Comp</span>
          <v-container class="d-flex justify-center">
            <round-slider
              v-model="shockHighComp"
              max="3"
              :radius="radius"
              :width="width"
            ></round-slider>
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

    title: "",
    description: "",
    favorite: "",
    forkRebound: "",
    forkCompression: "",
    forkAirPressure: "",
    shockRebound: "",
    shockLowComp: "",
    shockHighComp: "",
  }),

  mounted() {
    if (this.setupId != null) {
      this.title = this.setup.title;
      this.description = this.setup.description;
      this.forkRebound = this.setup.fork.rebound;
      this.favorite = this.setup.favorite;
      this.forkCompression = this.setup.fork.compression;
      this.forkAirPressure = this.setup.fork.airPressure;
      this.shockRebound = this.setup.shock.rebound;
      this.shockLowComp = this.setup.shock.lowComp;
      this.shockHighComp = this.setup.shock.highComp;
    }
  },

  computed: {
    setup() {
      return this.$store.getters.setup(this.setupId);
    },

    updatedSetup() {
      return {
        id: this.setupId,
        title: this.title,
        description: this.description,
        favorite: this.favorite,
        fork: {
          rebound: this.forkRebound,
          compression: this.forkCompression,
          airPressure: this.airPressure,
        },
        shock: {
          rebound: this.shockRebound,
          lowComp: this.shockLowComp,
          highComp: this.shockHighComp,
        },
      };
    },
  },

  methods: {
    closeDialog() {
      this.$emit("close");
    },

    save() {
      this.$store.dispatch("saveSetup", this.updatedSetup);
      this.$emit("close");
    },
  },
};
</script>
