<template>
    <ion-content fullscreen>
        <Form
            id="newUser"
            @submit.prevent="checkForm"
            >
        <ion-grid class="--ion-grid-padding-lg" >
            <ion-row class="ion-justify-content-center" >
                <h1> Merci de renseigner les champs suivants</h1>
            </ion-row>
            <ion-row class="ion-justify-content-center">
                <ion-col size-xl="3">
                    <ion-item>
                    <ion-label position="floating">Prénom</ion-label>
                    <Field name='firstname' :rules ='firstnameRules'>
                <ion-input  id="firstname"
                            v-model="firstname"
                            type="text"
                            name="firstname"
                ></ion-input>
                    </Field>
                    
                    <ion-badge color="danger"><ErrorMessage name ='firstname'/></ion-badge>
                    </ion-item>
                
                </ion-col>
                <ion-col size-xl="3">
                    <ion-item>
                    <ion-label position="floating">Nom</ion-label>
                     <Field name='name' :rules ='nameRules'>
                <ion-input id="name"
                           v-model="name"
                           type="text"
                           name="name"
                ></ion-input>
                     </Field>
                     <ion-badge color="danger"><ErrorMessage name ='name'/></ion-badge>
                    </ion-item>
                </ion-col>

            </ion-row>
            <ion-row class="ion-justify-content-center">
                <ion-col size-xl="6">
                    
                    <ion-item>
                     <Field name='birthDay' :rules ='birthDayRules'>
                         <ion-label position="floating">Date de naissance</ion-label>
                    <ion-datetime id="birthDay"
                               v-model="birthDay"
                               type="date"
                               name="birthday"
                                  display-format="D-M-YYYY"
                                  picker-format="D-M-YYYY"
                                  value=""
                    ></ion-datetime>
                     </Field>
                     <ion-badge color="danger"><ErrorMessage name ='birthDay'/></ion-badge>
                    </ion-item>
                </ion-col>
            </ion-row>
            <ion-row class="ion-justify-content-center">
                <ion-col size-xl="6">
                    <ion-item>
                    <ion-label position="floating">Adresse</ion-label>
                     <Field name='adress' :rules ='adressrules'>
                <ion-input id="adress"
                           v-model="adress"
                           type="text"
                           name="adress"
                ></ion-input>
                     </Field>
                     <ion-badge color="danger"><ErrorMessage name ='adress'/></ion-badge>
                    </ion-item>
                </ion-col>
            </ion-row>
            <ion-row class="ion-justify-content-center">
                <ion-col size-xl="6">
                    <ion-item>
                     <Field name='city' :rules ='cityRules'>
                    <ion-label position="floating">Ville</ion-label>
                <ion-input id="city"
                           v-model="city"
                           type="text"
                           name="city"
                ></ion-input>
                     </Field>
                     <ion-badge color="danger"><ErrorMessage name ='city'/></ion-badge>
                    </ion-item>
                </ion-col>
            </ion-row>
            <ion-row class="ion-justify-content-center">
                <ion-col size-xl="6">
                    <ion-item>
                    <ion-label position="floating">Numéro de téléphone</ion-label>
                     <Field name='phone' :rules ='phoneRules'>
                <ion-input
                        placeholder="0650..."
                        id="phone"
                        v-model="phone"
                        type="tel"
                        name="phone"
                        maxlength="10"
                ></ion-input>
                     </Field>
                     <ion-badge color="danger"><ErrorMessage name ='phone'/></ion-badge>
                    </ion-item>
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
import axios from "axios";
import {ErrorMessage, Form, Field} from 'vee-validate';
import * as yup from 'yup';
    export default defineComponent({
        components: { IonLabel, IonInput, IonButton, IonContent,IonGrid,IonDatetime,IonRow,IonCol,ErrorMessage, Form, Field},
        name:'NewUser',
        data: () => {
            
            return {    
                firstnameRules: yup.string().required('Merci de remplir ce champ'),
                nameRules :yup.string().required('Merci de remplir ce champ'),
                birthDayRules: yup.date().required('Merci de remplir ce champ'),
                adressrules: yup.string().required('Merci de remplir ce champ'),
                cityRules: yup.string().required('Merci de remplir ce champ').min(9),
                phoneRules: yup.string(),
                errorsRules: ['']
                
            };
        },
        
        methods: {
            checkForm()  {
                const dataPost = {
    "name":"coley",
    "firstname": "christian",
    "birthDay": "2021-10-14",
    "adress":"118 ch du bassard",
    "city":"chonas l'amballan",
    "phone":"0650279253"
}
                axios
  .post('https://127.0.0.1:8000/user', dataPost)
  .then(response => (console.log(response)))
                
            }
        },
    })
</script>