<template>
  <v-card class="mx-auto" max-width="450">
    <v-card-title>Welcome WWC DFW!</v-card-title>
    <v-card-text>
      <v-list-item>
        <v-list-item-content>
          <p>Hello, {{ name }}</p>
          <p>Are you ready for Hacktoberfest?</p>
        </v-list-item-content>
        <v-list-item-avatar tile size="100">
          <v-img src="/wwcdfw-logo.jpg"></v-img>
        </v-list-item-avatar>
      </v-list-item>
    </v-card-text>
  </v-card>
</template>

<script>
import { HelloAll } from "@/services/helloAll.service";

export default {
  name: "HelloAll",
  data: () => {
    const result = {};

    HelloAll.names$.subscribe(val => result.name = val)

    return result;
  }
}
</script>

<style scoped>

</style>
