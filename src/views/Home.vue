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
            <v-btn icon color="red">
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
              <v-container class="d-flex justify-center">
                <v-progress-circular
                  :size="100"
                  color="primary"
                  :value="frontRebound * 4"
                  style="transform: scaleX(-1)"
                >
                  <span style="transform: scaleX(-1)">{{ frontRebound }}</span>
                </v-progress-circular>
              </v-container>

              <v-container>
                <v-slider v-model="frontRebound" min="0" max="25"></v-slider>
              </v-container>
            </v-tab-item>

            <!-- Rear -->
            <v-tab-item></v-tab-item>
          </v-tabs-items>
        </v-tabs>

        <v-card-text> </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    showSetupDialog: false,
    tab: null,

    frontRebound: 0,
  }),

  methods: {
    onItemClicked() {
      this.showSetupDialog = true;
    },
  },
};
</script>
