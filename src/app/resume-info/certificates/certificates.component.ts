import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent {
  certificates: { certificate: string, certificate_points: string[] }[] = []
  certificate_points: string[] = []
  certificate_name = ''
  certificate_detail(data: NgForm) {
    this.certificate_points.push(data.value.certificate_points);
    (<HTMLInputElement>document.querySelector('input[name="certificate_points"]')).value = '';
  }

  certificate(data: NgForm) {
    this.certificate_name = data.value.certificate;
    this.certificates.push({ certificate: this.certificate_name, certificate_points: this.certificate_points })
    sessionStorage.setItem('certificates', JSON.stringify(this.certificates))
    this.certificate_points = [];
    (<HTMLInputElement>document.querySelector('input[name="certificate"]')).value = '';
  }
}
