<template>
    <ion-content fullscreen>
        <ion-grid class="--ion-grid-padding-lg" >
            <ion-row class="ion-justify-content-center" >
                <h1> Merci de renseigner les champs suivants</h1>
            </ion-row>
            <ion-row>

                <ion-input placeholder="Prénom"></ion-input>
                <ion-input placeholder="Nom"></ion-input>

            </ion-row>


            <ion-row class="ion-justify-content-center" >
                <ion-col size="6" style="border: solid red;">
                    <ion-input placeholder="Date de naissance"></ion-input>
                </ion-col>
            </ion-row>
            <ion-row class="ion-justify-content-center">
                <ion-col size="6" style="border: solid red;">
                <ion-input placeholder="Adresse"></ion-input>
                </ion-col>
            </ion-row>
            <ion-row class="ion-justify-content-center">
                <ion-col size="6" style="border: solid red;">
                <ion-input placeholder="Ville"></ion-input>
                </ion-col>
            </ion-row>
            <ion-row class="ion-justify-content-center">
                <ion-col size="6" style="border: solid red;">
                <ion-input placeholder="Numéro de téléphone"></ion-input>
                </ion-col>
            </ion-row>

                <ion-button expand="block">Block Button</ion-button>

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