<template>
  <v-container>
    <v-timeline dense>
      <v-timeline-item
        v-for="n in 8"
        :key="n"
        small
        @click.native.stop="onItemClicked()"
      >
        <v-card>
          <v-card-title>
            St-Élie
            <v-spacer />
            <span class="text-caption"> 2021-08-03 </span>
          </v-card-title>
          <v-card-text>
            La suspension était réactive, le devant collait, piste en bonne
            condition, beaucoup de confiance
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>

    <v-dialog
      v-model="showSetupDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar color="primary">
          <v-btn icon @click="showSetupDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>

          <v-spacer />

          <v-toolbar-items>
            <v-btn icon>
              <v-icon>mdi-trash-can-outline</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-check</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-tabs v-model="tab" fixed-tabs>
          <v-tab>Front</v-tab>
          <v-tab>Rear</v-tab>

          <v-tabs-items v-model="tab" class="pt-4">
            <!-- Front -->
            <v-tab-item>
              <circular-slider max="22" title="Rebound"></circular-slider>
              <circular-slider max="22" title="Compression"></circular-slider>

              <v-row class="justify-center mt-6">
                <v-col cols="8">
                  <v-text-field
                    label="Air Pressure"
                    filled
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row class="justify-center">
                <v-col cols="8">
                  <v-text-field label="Spring Rate" filled dense></v-text-field>
                </v-col>
              </v-row>
            </v-tab-item>

            <!-- Rear -->
            <v-tab-item>
              <circular-slider
                max="22"
                title="Low Speed Compression"
              ></circular-slider>
              <circular-slider
                max="22"
                title="High Speed Compression"
              ></circular-slider>

              <circular-slider max="22" title="Rebound"></circular-slider>

              <v-row class="justify-center">
                <v-col cols="8">
                  <v-text-field label="Shock" filled dense></v-text-field>
                </v-col>
              </v-row>
            </v-tab-item>
          </v-tabs-items>
        </v-tabs>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import CircularSlider from "../components/CircularSlider.vue";
export default {
  components: { CircularSlider },
  data: () => ({
    showSetupDialog: false,
    tab: null,
  }),

  methods: {
    onItemClicked() {
      this.showSetupDialog = true;
    },
  },
};
</script>
