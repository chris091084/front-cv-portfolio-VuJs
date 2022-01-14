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
                     <Field name='birthday' v-slot="{ field }">
                         <ion-label position="floating">Date de naissance</ion-label>
                    <ion-datetime id="birthday"
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
                    
                    <ion-item :class="{'ion-invalid': errors.email}">
                     <Field name='email' v-slot="{ field }">
                         <ion-label position="floating">E-mail</ion-label>
                    <ion-input id="email"
                               type="email"
                               name="email"
                                  v-bind="field"
                    ></ion-input>
                     </Field>
                    </ion-item>
                    <ion-text color="danger">{{errors.email}}</ion-text>
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
                    <ion-item :class="{'ion-invalid': errors.phoneNumber}">
                    <ion-label position="floating">Numéro de téléphoneNumber</ion-label>
                     <Field name='phoneNumber' v-slot="{ field }">
                <ion-input
                        placeholder="0650..."
                        id="phoneNumber"
                        type="tel"
                        name="phoneNumber"
                        maxlength="10"
                        v-bind="field"
                ></ion-input>
                     </Field>
                    </ion-item>
                    <ion-text color="danger">{{errors.phoneNumber}}</ion-text>
                </ion-col>
            </ion-row>
             <ion-row class="ion-justify-content-center">
                <ion-col size-xl="6">
                    <ion-item :class="{'ion-invalid': errors.password}">
                    <ion-label position="floating">Mot de passe</ion-label>
                     <Field name='password' v-slot="{ field }">
                <ion-input
                        id="password"
                        type="password"
                        name="password"
                        v-bind="field"
                ></ion-input>
                     </Field>
                    </ion-item>
                    <ion-text color="danger">{{errors.password}}</ion-text>
                </ion-col>
            </ion-row>
             <ion-row class="ion-justify-content-center">
                <ion-col size-xl="6">
                    <ion-item :class="{'ion-invalid': errors.repeatPassword}">
                    <ion-label position="floating">confirmation de mot de passe</ion-label>
                     <Field name='repeatPassword' v-slot="{ field }">
                <ion-input
                        id="repeatPassword"
                        type="password"
                        name="repeatPassword"
                        v-bind="field"
                ></ion-input>
                     </Field>
                    </ion-item>
                    <ion-text color="danger">{{errors.repeatPassword}}</ion-text>
                </ion-col>
            </ion-row>
           <ion-button  :disabled="loading === true"  expand="block" type="submit" ><div v-if='loading === false'>Valider</div><ion-spinner v-if='loading' name="lines" color="light"></ion-spinner></ion-button>
<ion-toast 
    :is-open="isOpenRef"
    message="votre compte a été bien sauvegardé"
    :duration="2000"
    @didDismiss="setOpen(false)"
  >
</ion-toast>
        </ion-grid>
        </form>
          
    </ion-content>
    
</template>

<script lang="ts">
import { IonLabel, IonInput,IonContent, IonGrid,IonDatetime,IonRow, IonCol, IonItem, IonButton, IonText,IonSpinner,IonToast } from '@ionic/vue';
import { defineComponent, ref} from '@vue/runtime-core';
import axios from "axios";
import {Form, Field} from 'vee-validate';
import * as yup from 'yup';
import {User} from 'src/Model/User';


    export default defineComponent({
        components: { IonButton,IonItem, IonLabel, IonInput, IonContent,IonGrid,IonDatetime,IonRow,IonCol, Form, Field, IonText, IonSpinner, IonToast},
        data: () => {
           
            
            const schema = yup.object({
                firstname: yup.string().required('Merci de remplir ce champ'),
                name :yup.string().required('Merci de remplir ce champ'),
                birthday: yup.date().required('Merci de remplir ce champ'),
                email: yup.string().required('Merci de remplir ce champ').email('Merci de respecter le format mail ex:chris@hotmail.com'),
                adress: yup.string().required('Merci de remplir ce champ'),
                city: yup.string().required('Merci de remplir ce champ').min(2,"Merci d'entrer 2 charactères minimum"),
                phoneNumber: yup.string(),
                password: yup.string().required('Merci de remplir ce champ').matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,'Le mot depase doit contenir au moins une lettre, un chriffre et un charactère spécial'),
                repeatPassword: yup.string().required('Merci de remplir ce champ').min(8,"minimum 8 charactères et/ou chiffres").oneOf([yup.ref('password'), null], 'Le mot de passe n\'est pas identique au premier').matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,'Le mot depase doit contenir au moins une lettre, un chriffre et un charactère spécial')
            })
            const loading= false;
             const isOpenRef = ref(false);
      const setOpen = (state: boolean) => (isOpenRef.value = state);


          let submitValidate: any;
          return {
                schema,
                loading,
                isOpenRef,
                setOpen,
                submitValidate
            }
        },
        methods: {
            submit(values: any)  {
                delete values.repeatPassword;
                this.loading = true
                const newUser = values
                axios
  .post('http://127.0.0.1:8080/signup', newUser)
  .then( (response) => { this.submitValidate = response.data
    this.setOpen(true)
  })
  .finally(() => 
      this.loading = false
      )
  
                
            }
        },
    })
</script>