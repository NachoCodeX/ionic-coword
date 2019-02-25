import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // public isSearching: boolean = false;
  readonly $isSearching: Subject<boolean> = new Subject()

  constructor() { }



}
