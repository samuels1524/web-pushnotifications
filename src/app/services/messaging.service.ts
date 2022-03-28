import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MessagingService {
  messagingFirebase;

  constructor() {
    const app = initializeApp(environment.firebase);
    this.messagingFirebase = getMessaging(app);
  }

  requestPermission = () => {
    return new Promise(async (resolve, reject) => {
      const permsis = await Notification.requestPermission();
      if (permsis === 'granted') {
        const tokenFirebase = await getToken(this.messagingFirebase, {
          vapidKey:
            'BFvphIsmvKdeiDm1Shz8JPMhHbzuAljKQVMwNWfEi2VAkE1boVxRPwABEuom6FnuTWizeo-JLFLODCS1vY_D-AY',
        });
        resolve(tokenFirebase);
      } else {
        reject(new Error('No se otorgaron los permisos'));
      }
    });
  };

  private messaginObservable = new Observable((observe) => {
    onMessage(this.messagingFirebase, (payload) => {
      observe.next(payload);
    });
  });

  receiveMessage() {
    return this.messaginObservable;
  }
}
