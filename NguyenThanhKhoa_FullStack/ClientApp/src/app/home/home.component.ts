import { Component } from '@angular/core';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public arrayaftersort: string = "";

  constructor(
    private _HomeService: HomeService,
  ) { }

  public async btnsubmit_onClick() {
    this.arrayaftersort = "";
    const inputArray: any = document.querySelector('#inputArray');
    const btnSubmit: any = document.querySelector('#btnSubmit');
    const btnReset: any = document.querySelector('#btnReset');

    const data = inputArray.value.split(",");
    if (data.length < 30) {
      this.arrayaftersort = "Mảng không hợp lệ.";
      return;
    }
    data.forEach((element: string) => {
      if (element.trim() === '' || isNaN(Number(element))) {
        this.arrayaftersort = "Mảng không hợp lệ.";
      }
    });

    if (this.arrayaftersort !== '') {
      return;
    }

    inputArray.disabled = true;
    btnSubmit.disabled = true;
    btnReset.disabled = true;

    const result = await this._HomeService.sendpostrequest(data).toPromise();
    if (result) {
      this.arrayaftersort = "Kết quả: " + result[0];
    }

    inputArray.disabled = false;
    btnSubmit.disabled = false;
    btnReset.disabled = false;
  }

  public btnreset_onClick() {
    const inputArray: any = document.querySelector('#inputArray');
    inputArray.value = "";
    this.arrayaftersort = "";
  }
}
