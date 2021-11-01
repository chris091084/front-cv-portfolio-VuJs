<template>
    <ion-content fullscreen>
        <Form
            id="newUser"
            @submit="submit"
            :validation-schema="schema"
            v-slot="{ errors }"
            >
        <ion-grid class="--ion-grid-padding-lg" >
            <ion-row class="ion-justify-content-center" >
                <h1> Merci de renseigner les champs suivants</h1>
            </ion-row>
            <ion-row class="ion-justify-content-center">
                <ion-col size-xl="3">
                    <ion-item :class="{'ion-invalid': errors.firstname}">
                    <ion-label position="floating">Prénom</ion-label>
                    <Field name='firstname' v-slot="{ field }" >
                <ion-input  id="firstname"
                v-bind="field"
                            type="text"
                            name="firstname"
                ></ion-input>
                    </Field>
                    </ion-item>
                    <ion-text color="danger">{{errors.firstname}}</ion-text>
                </ion-col>
                <ion-col size-xl="3">
                    <ion-item :class="{'ion-invalid': errors.name}">
                    <ion-label position="floating">Nom</ion-label>
                     <Field name='name' v-slot="{ field }" >
                <ion-input id="name"
                           type="text"
                           name="name"
                           v-bind="field"
                ></ion-input>
                     </Field>
                    </ion-item>
                    <ion-text color="danger">{{errors.name}}</ion-text>
                </ion-col>

            </ion-row>
            <ion-row class="ion-justify-content-center">
                <ion-col size-xl="6">
                    
                    <ion-item :class="{'ion-invalid': errors.birthDay}">
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
                    </ion-item>
                    <ion-text color="danger">{{errors.birthDay}}</ion-text>
                </ion-col>
            </ion-row>
            <ion-row class="ion-justify-content-center">
                <ion-col size-xl="6">
                    <ion-item :class="{'ion-invalid': errors.adress}">
                    <ion-label position="floating">Adresse</ion-label>
                     <Field name='adress' v-slot="{ field }">
                <ion-input id="adress"
                           type="text"
                           name="adress"
                           v-bind="field"
                ></ion-input>
                     </Field>
                    </ion-item>
                    <ion-text color="danger">{{errors.adress}}</ion-text>
                </ion-col>
            </ion-row>
            <ion-row class="ion-justify-content-center">
                <ion-col size-xl="6">
                    <ion-item :class="{'ion-invalid': errors.city}">
                     <Field name='city' v-slot="{ field }">
                    <ion-label position="floating">Ville</ion-label>
                <ion-input id="city"
                           type="text"
                           name="city"
                           v-bind="field"
                ></ion-input>
                     </Field>
                    </ion-item>
                    <ion-text color="danger">{{errors.city}}</ion-text>
                </ion-col>
            </ion-row>
            <ion-row class="ion-justify-content-center">
                <ion-col size-xl="6">
                    <ion-item :class="{'ion-invalid': errors.phone}">
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
                    </ion-item>
                    <ion-text color="danger">{{errors.phone}}</ion-text>
                </ion-col>
            </ion-row>
           <ion-button expand="block" type="submit">Valider</ion-button>
        </ion-grid>
        </form>
    </ion-content>
</template>

<script lang="ts">
import { IonLabel, IonInput,IonContent, IonGrid,IonDatetime,IonRow, IonCol, IonItem, IonButton, IonText } from '@ionic/vue';
import { defineComponent} from '@vue/runtime-core';
import axios from "axios";
import {Form, Field} from 'vee-validate';
import * as yup from 'yup';

    export default defineComponent({
        components: { IonButton,IonItem, IonLabel, IonInput, IonContent,IonGrid,IonDatetime,IonRow,IonCol, Form, Field, IonText},
        data: () => {
            
            const schema = yup.object({
                firstname: yup.string().required('Merci de remplir ce champ'),
                name :yup.string().required('Merci de remplir ce champ'),
                birthDay: yup.date().required('Merci de remplir ce champ'),
                adress: yup.string().required('Merci de remplir ce champ'),
                city: yup.string().required('Merci de remplir ce champ').min(9,"Merci d'entrer 9 charactères minimum"),
                phone: yup.string(),
            })
            return {
                schema,
            };
        },
        methods: {
            submit(values: any)  {
                const dataPost = {
    "name":values.name,
    "firstname": values.firstname,
    "birthDay": values.birthDay,
    "adress":values.adress,
    "city":values.city,
    "phone":values.phone
}
console.log(dataPost)
                axios
  .post('https://127.0.0.1:8000/user', dataPost)
  .then(response => (console.log(response)))
                
            }
        },
    })
</script>