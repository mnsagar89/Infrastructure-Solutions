import { Component, OnInit } from '@angular/core';
import {IpService} from "../ip.service";
import {takeUntil} from "rxjs/operators";
import {Observable, Subject} from "rxjs";

@Component({
  selector: 'app-ip',
  templateUrl: './ip.component.html',
  styleUrls: ['./ip.component.scss']
})
export class IpComponent implements OnInit {
  private destroy$ = new Subject();
  checkIPControl: any = '';
  ipValue: any;
  constructor(private ipService: IpService) { }

  ngOnInit(): void {
    this.checkIP();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  checkIP(value?: string) {
    this.ipService.getIpInfo(value).pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.ipValue = data;
    })
  }
}
