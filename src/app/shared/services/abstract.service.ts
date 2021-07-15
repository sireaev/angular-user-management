import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AbstractService {
  protected PUBLIC_URL: string = 'http://localhost:3000';
  constructor() { }
}
