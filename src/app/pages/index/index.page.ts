import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { slideHeader } from './animations';


@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
  animations: [slideHeader]
})
export class IndexPage implements OnInit {

  public isSearching: boolean = false;
  constructor(private $data: DataService) { }

  ngOnInit() {
    this.$data.$isSearching.subscribe((isSearching: boolean) => {
      console.log(`CHANGE! ${isSearching}`);

      return this.isSearching = isSearching
    })
  }

}
