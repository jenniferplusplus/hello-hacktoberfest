<template>
  <v-app>
    <v-app-bar app color="primary"></v-app-bar>
    <v-main>
      <v-main>
        <HelloAll/>
      </v-main>
    </v-main>
  </v-app>
</template>

<script>
import HelloAll from "@/components/HelloAll";

export default {
  name: 'App',

  components: {
    HelloAll,
  },

  data: () => ({
    //
  }),
};
</script>
