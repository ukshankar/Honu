import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';



@Injectable()
export class ConfigService {

  constructor() { }

  serverHost=environment.service.host;
  serviceHost=this.serverHost+"/services/";

}
