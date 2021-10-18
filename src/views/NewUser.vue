<template>
    <ion-content fullscreen>
        <form
            id="newUser"
            @submit.prevent="checkForm"
            >
        <ion-grid class="--ion-grid-padding-lg" >
            <ion-row class="ion-justify-content-center" >
                <h1> Merci de renseigner les champs suivants</h1>
            </ion-row>
            <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
            <ion-row class="ion-justify-content-center">
                <ion-col size-xl="3">
                    <ion-label>Prénom</ion-label>
                <ion-input  id="firstname"
                            v-model="firstname"
                            type="text"
                            name="firstname"
                            required
                ></ion-input>
                </ion-col>
                <ion-col size-xl="3">
                    <ion-label>Nom</ion-label>
                <ion-input id="name"
                           v-model="name"
                           type="text"
                           name="name"
                           required
                ></ion-input>
                </ion-col>

            </ion-row>
            <ion-row class="ion-justify-content-center">
                <ion-col size-xl="6">
                    <ion-label>Date de naissance</ion-label>
                    <ion-datetime id="birthDay"
                               v-model="birthDay"
                               type="date"
                               name="birthday"
                                  display-format="D-M-YYYY"
                                  picker-format="D-M-YYYY"
                                  value=""
                                  required

                    ></ion-datetime>
                </ion-col>
            </ion-row>
            <ion-row class="ion-justify-content-center">
                <ion-col size-xl="6">
                    <ion-label>Adresse</ion-label>
                <ion-input id="adress"
                           v-model="adress"
                           type="text"
                           name="adress"
                           required
                ></ion-input>
                </ion-col>
            </ion-row>
            <ion-row class="ion-justify-content-center">
                <ion-col size-xl="6">
                    <ion-label>Villev</ion-label>
                <ion-input id="city"
                           v-model="city"
                           type="text"
                           name="city"
                           required
                ></ion-input>
                </ion-col>
            </ion-row>
            <ion-row class="ion-justify-content-center">
                <ion-col size-xl="6">
                    <ion-label>Numéro de téléphone</ion-label>
                <ion-input
                        placeholder="0650..."
                        id="phone"
                        v-model="phone"
                        type="tel"
                        name="phone"
                        maxlength="10"
                ></ion-input>
                </ion-col>
            </ion-row>
                <ion-button expand="block" type="submit">Valider</ion-button>
        </ion-grid>
        </form>

    </ion-content>
</template>

<script lang="ts">
import { IonLabel, IonInput,IonButton,IonContent, IonGrid,IonDatetime,IonRow, IonCol } from '@ionic/vue';
import { defineComponent} from '@vue/runtime-core';

    export default defineComponent({
        components: { IonLabel, IonInput, IonButton, IonContent,IonGrid,IonDatetime,IonRow,IonCol },
        data: () => {
            return {
                firstname : '',
                name :'',
                birthDay: '',
                adress: '',
                city: '',
                phone: '',
                errors: ['']
                
            };
        },
        
        methods: {
            checkForm()  {
                //axios
                
            }
        },
    })
</script>