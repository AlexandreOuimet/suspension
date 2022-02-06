<template>
  <v-container>
    <v-row>
      <v-col class="text-center">
        <h2>{{ title }}</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center">
        <round-slider v-model="value" :max="max" step="1" radius="70">
        </round-slider>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import RoundSlider from "vue-round-slider";

export default {
  props: {
    title: String,
    max: String,
  },

  data: () => ({
    value: "",
  }),

  components: {
    RoundSlider,
  },
};
</script>
