import { Component } from '@angular/core';
import { MessagingService } from './services/messaging.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [],
})
export class AppComponent {
  mesaggeReceived = '';
  token =
    'dSL5ajY3rUQy2-BYyeFPNg:APA91bFGiOj-KbRz4ZX8Df1AHtMTPcEf3MpYJaY9BfmXO5dR-j7So_7gqV31Gl6siQkeGF48fKhT2c1Ox6cf17f2UC_-SDEsk3iQTceijniKb-szThVVF-_HsmLxOtKE3DB7OOCK0zbD';
  clientForm: FormGroup;
  constructor(
    private notificacion: MessagingService,
    private toastr: ToastrService,
    private http: HttpClient,
    private fb: FormBuilder
  ) {
    notificacion.requestPermission().then((token) => {
      console.log(token);
    });
    this.clientForm = this.fb.group({
      dest: [this.token],
      title: [''],
      body: [''],
    });
  }

  ngOnInit(): void {
    this.notificacion.receiveMessage().subscribe((payload: any) => {
      console.log(payload);
      this.mesaggeReceived = payload;
      this.toastr.success(
        payload.notification.title,
        payload.notification.body
      );
    });
  }

  sendNotification(form: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        'key=AAAAapEvZgI:APA91bGNSfzitVWZ1WCKD--hCY8YIBJ49xUayy8-l67MqoKuRK7aLtTc98IsLN2IYO0nYyCGpjR7TfLC-YxUOXDEbAnznBrsdlZ5CQAwYh8Td6xlRM7VJA3W7VDRmjhxVenTFh4mXyFi',
    });
    const options = JSON.stringify({
      to: form.dest,
      notification: {
        title: form.title,
        body: form.body,
        icon: 'assets/firebase-logo.png',
        click_action: 'https://notif-b16b2.web.app/',
      },
    });
    this.http
      .post('https://fcm.googleapis.com/fcm/send', options, { headers })
      .subscribe({
        next: (respuesta) => console.log(respuesta),
        error: (err) => console.error(err),
      });
  }
}
