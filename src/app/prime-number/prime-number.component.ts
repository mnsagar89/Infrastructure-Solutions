import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-prime-number',
  templateUrl: './prime-number.component.html',
  styleUrls: ['./prime-number.component.scss']
})
export class PrimeNumberComponent implements OnInit {

  myForm!: FormGroup;
  count: number = 0;
  totalTime: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      from: new FormControl(1, [Validators.required]),
      to: new FormControl(1000000, [Validators.required]),
    })
  }

  private isPrime = (value: number) => {
    for(let i = 2, p = Math.floor(Math.sqrt(value)); i <= p; i++)
      if(value % i === 0) return false;
    return value > 1;
  }

  findPrime() {
    this.reset()
    let startTime = performance.now();
    const fromValue = this.myForm.getRawValue()['from'];
    const toValue = this.myForm.getRawValue()['to'];
    for (let i = fromValue; i <= toValue; i++) {
      if (this.isPrime(i)) {
        this.count++;
      }
    }
    let endTime = performance.now();
    this.totalTime = (endTime - startTime) / 1000.0;
    console.log('total time', this.totalTime);
    console.log('prime count', this.count)
  }

  private reset() {
    this.totalTime = 0;
    this.count = 0;
  }
}
