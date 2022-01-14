<template>
    <ion-content fullscreen>
        <Form
            id="login"
            @submit="submit"
            :validation-schema="schema"
            v-slot="{ errors }"
            >
        <ion-grid class="--ion-grid-padding-lg" >
            <ion-row class="ion-justify-content-center" >
                <h1> Merci de renseigner les champs suivants</h1>
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
                city: yup.string().required('Merci de remplir ce champ').min(2,"Merci d'entrer 2 charactères minimum"),
                password: yup.string().required('Merci de remplir ce champ').matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,'Le mot depase doit contenir au moins une lettre, un chriffre et un charactère spécial')
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