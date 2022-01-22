<template>
  <v-container>
    <v-timeline :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item small fill-dot>
        <span slot="opposite">2021-08-03</span>
        <v-card>
          <v-card-text>
            La suspension était réactive, le devant collait, piste en bonne
            condition, beaucoup de confiance
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>
