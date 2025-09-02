import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, HttpClientModule],  // 👈 Needed for ngModel + Http calls
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    project: '',
    subject: '',
    message: ''
  };

  constructor(private http: HttpClient) { }

  onSubmit() {
    console.log(this.formData); // 👈 For debugging

    this.http.post('https://localhost:7178/api/Contact/send', this.formData)
      .subscribe({
        next: () => alert('Message sent successfully!'),
        error: () => alert('Something went wrong!')
      });
  }
}
