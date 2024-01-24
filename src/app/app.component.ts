import { Component, ViewChild, ElementRef } from '@angular/core';
import { ServiceNameService } from './service-name.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interface';
  response: any[] = []; // Assuming your array is of type any[]
  @ViewChild('prisonerIdInput') prisonerIdInput!: ElementRef;
  @ViewChild('startDatetimeInput') startDatetimeInput!: ElementRef;
  @ViewChild('endDatetimeInput') endDatetimeInput!: ElementRef;

  constructor(private nameService: ServiceNameService) {}

  onSend() {
    const formData: FormData = new FormData();
    formData.append('prisoner_id', this.prisonerIdInput.nativeElement.value);
    formData.append('start_datetime', this.startDatetimeInput.nativeElement.value);
    formData.append('end_datetime', this.endDatetimeInput.nativeElement.value);

    this.nameService.onSendService(formData).subscribe(
      res => {
        console.log(res);
        this.response = res;
      },
      err => {
        console.error(err);
      }
    );
  }
}
