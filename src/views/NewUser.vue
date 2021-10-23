<template>
    <ion-content fullscreen>
        <Form
            id="newUser"
            @submit="submit"
            :validation-schema="schema"
            >
        <ion-grid class="--ion-grid-padding-lg" >
            <ion-row class="ion-justify-content-center" >
                <h1> Merci de renseigner les champs suivants</h1>
            </ion-row>
            <ion-row class="ion-justify-content-center">
                <ion-col size-xl="3">
                    <ion-item>
                    <ion-label position="floating">Prénom</ion-label>
                    <Field name='firstname' v-slot="{ field }" >
                <ion-input  id="firstname"
                v-bind="field"
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
                     <Field name='name' v-slot="{ field }" >
                <ion-input id="name"
                           type="text"
                           name="name"
                           v-bind="field"
                ></ion-input>
                     </Field>
                     <ion-badge color="danger"><ErrorMessage name ='name'/></ion-badge>
                    </ion-item>
                </ion-col>

            </ion-row>
            <ion-row class="ion-justify-content-center">
                <ion-col size-xl="6">
                    
                    <ion-item>
                     <Field name='birthDay' v-slot="{ field }">
                         <ion-label position="floating">Date de naissance</ion-label>
                    <ion-datetime id="birthDay"
                               type="date"
                               name="birthday"
                                  display-format="D-M-YYYY"
                                  picker-format="D-M-YYYY"
                                  value=""
                                  v-bind="field"
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
                     <Field name='adress' v-slot="{ field }">
                <ion-input id="adress"
                           type="text"
                           name="adress"
                           v-bind="field"
                ></ion-input>
                     </Field>
                     <ion-badge color="danger"><ErrorMessage name ='adress'/></ion-badge>
                    </ion-item>
                </ion-col>
            </ion-row>
            <ion-row class="ion-justify-content-center">
                <ion-col size-xl="6">
                    <ion-item>
                     <Field name='city' v-slot="{ field }">
                    <ion-label position="floating">Ville</ion-label>
                <ion-input id="city"
                           type="text"
                           name="city"
                           v-bind="field"
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
                     <Field name='phone' v-slot="{ field }">
                <ion-input
                        placeholder="0650..."
                        id="phone"
                        type="tel"
                        name="phone"
                        maxlength="10"
                        v-bind="field"
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
import { IonLabel, IonInput,IonContent, IonGrid,IonDatetime,IonRow, IonCol, IonItem,IonBadge, IonButton } from '@ionic/vue';
import { defineComponent} from '@vue/runtime-core';
import axios from "axios";
import {ErrorMessage, Form, Field} from 'vee-validate';
import * as yup from 'yup';

    export default defineComponent({
        components: { IonButton,IonItem, IonBadge, IonLabel, IonInput, IonContent,IonGrid,IonDatetime,IonRow,IonCol,ErrorMessage, Form, Field},
        data: () => {
            
            

            const schema = yup.object({
                firstname: yup.string().required('Merci de remplir ce champ'),
                name :yup.string().required('Merci de remplir ce champ'),
                birthDay: yup.date().required('Merci de remplir ce champ'),
                adress: yup.string().required('Merci de remplir ce champ'),
                city: yup.string().required('Merci de remplir ce champ').min(9),
                phone: yup.string(),
            })
            
            return {
                schema,
            };
        },
        
        methods: {
            submit()  {
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