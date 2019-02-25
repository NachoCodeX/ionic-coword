import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-word-item',
  templateUrl: './word-item.component.html',
  styleUrls: ['./word-item.component.scss']
})
export class WordItemComponent implements OnInit {

  @Input() word: string;
  @Input() source: string;
  @Input() _id: string;
  @Output() onClick: EventEmitter<true> = new EventEmitter();


  constructor(private router: Router) { }

  ngOnInit() {
  }



}
