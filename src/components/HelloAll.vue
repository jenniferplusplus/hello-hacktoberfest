<template>
  <v-card>
    <v-card-title>Welcome WWC DFW!</v-card-title>
    <v-card-text>
      <p>Hello, {{name}}</p>
      <p>Are you ready for Hacktoberfest?</p>
    </v-card-text>
  </v-card>
</template>

<script>
import { Singleton } from "@/services/helloAll.service";

export default {
  name: "HelloAll",
  data: () => {
    const result = {};
    Singleton.names$.subscribe(val => result.name = val)

    return result;
  }
}
</script>

<style scoped>

</style>
