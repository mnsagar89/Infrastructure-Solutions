import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class IpService {

  constructor(private httpClient: HttpClient) { }

  getIpInfo(ipAddress?: string) {
    const url = `https://freegeoip.app/json` + (ipAddress ? `/${ipAddress}`: '');
    return this.httpClient.get(url);
  }

}
