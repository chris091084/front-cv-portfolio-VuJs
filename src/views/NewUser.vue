<template>
    <ion-content fullscreen>
        <ion-grid class="--ion-grid-padding-lg" >
            <ion-row class="ion-justify-content-center" >
                <h1> Merci de renseigner les champs suivants</h1>
            </ion-row>
            <ion-row class="ion-justify-content-center">
                <ion-col size-xl="3">
                    <ion-label>Prénom</ion-label>
                <ion-input></ion-input>
                </ion-col>
                <ion-col size-xl="3">
                    <ion-label>Nom</ion-label>
                <ion-input></ion-input>
                </ion-col>

            </ion-row>
            <ion-row class="ion-justify-content-center">
                <ion-col size-xl="6">
                    <ion-label>Date de naissance</ion-label>
                    <ion-input></ion-input>
                </ion-col>
            </ion-row>
            <ion-row class="ion-justify-content-center">
                <ion-col size-xl="6">
                    <ion-label>Adresse</ion-label>
                <ion-input></ion-input>
                </ion-col>
            </ion-row>
            <ion-row class="ion-justify-content-center">
                <ion-col size-xl="6">
                    <ion-label>Ville</ion-label>
                <ion-input></ion-input>
                </ion-col>
            </ion-row>
            <ion-row class="ion-justify-content-center">
                <ion-col size-xl="6">
                    <ion-label>Numéro de téléphone</ion-label>
                <ion-input placeholder="0650..."></ion-input>
                </ion-col>
            </ion-row>
                <ion-button expand="block">Valider</ion-button>
        </ion-grid>
    </ion-content>
</template>

<script lang="ts">


    export default {
        name: 'NewUser',
        components: {},
        setup() {
            return {

            }
        }
    }
</script>