<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Dashboard</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Dashboard</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-title>Programs</ion-title>
      <ion-grid>
        <ion-row>
          <ion-col>1</ion-col>
          <ion-col>2</ion-col>
          <ion-col>3</ion-col>
          <ion-col>4</ion-col>
          <ion-col>5</ion-col>
          <ion-col>6</ion-col>
          <ion-col>7</ion-col>
          <ion-col>8</ion-col>
          <ion-col>9</ion-col>
        </ion-row>
        <ion-title>Workouts</ion-title>
        <ion-row>
          <ion-col>1</ion-col>
          <ion-col>2</ion-col>
          <ion-col>3</ion-col>
          <ion-col>1</ion-col>
          <ion-col>2</ion-col>
          <ion-col>3</ion-col>
          <ion-col>1</ion-col>
          <ion-col>2</ion-col>
          <ion-col>3</ion-col>
          <ion-col>1</ion-col>
          <ion-col>2</ion-col>
          <ion-col>3</ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid } from '@ionic/vue';
</script>

<style scoped>
ion-col {
  background-color: gray;
  padding: 50px;
  margin: 10px;
  border-radius: 20px;
}
</style>