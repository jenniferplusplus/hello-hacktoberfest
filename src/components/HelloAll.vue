<template>
  <v-card class="mx-auto" max-width="450">
    <v-card-title>Welcome WWC DFW!</v-card-title>
    <v-card-text>
      <v-list-item>
        <v-list-item-content>
          <p>Hello, <transition name="fade"><span v-show="shouldShow">{{ name }}</span></transition></p>
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
import { tap, delay } from "rxjs/operators";
import { HelloAll } from "@/services/helloAll.service";

export default {
  name: "HelloAll",
  data: () => {
    const data = {
      name: '',
      shouldShow: true
    };

    HelloAll.names$
        .pipe(
            tap(() => data.shouldShow = false),
            delay(250)
        )
        .subscribe(val => {
          data.name = val
          data.shouldShow = true;
        })

    return data;
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 225ms;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
