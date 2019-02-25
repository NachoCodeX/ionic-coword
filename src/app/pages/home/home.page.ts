import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, filter, tap } from 'rxjs/operators'
import { Apollo } from 'apollo-angular';
import { SEARCH_BY_TEXT } from '../../queries';
import { Word } from '../../interfaces/word';
import { faSadCry, faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  //icons
  public sadCryIcon: IconDefinition = faSadCry;
  public searchIcon: IconDefinition = faSearch;
  // 
  public isSearching: boolean = false;
  public text: string = '';
  public words: Word[] = [];
  public isLoading: boolean = false;
  // private $isLoading: Subject<boolean> = new Subject();
  private $searchText: Subject<string> = new Subject();



  constructor(private apollo: Apollo, private $data: DataService) {
  }


  ngOnInit(): void {
    this.subscribeSearchText();
    this.$data.$isSearching.subscribe((isSearching: boolean) => {
      this.isSearching = isSearching;
    })
  }

  onChange(text: string) {
    // this.text = text;
    this.words = []
    this.$searchText.next(text)
    // this.$data.$isSearching.next(true);
  }


  subscribeSearchText() {

    this.$searchText
      .pipe(filter(
        (text: string) => {
          // if (text.length > 0)
          // this.$data.$isSearching.next(true);
          // else
          // this.$data.$isSearching.next(false);
          return text.length > 0
        }),
        tap(() => this.isLoading = true),
        debounceTime(500)
      )
      .subscribe(text => {
        this.isLoading = false;

        this.apollo.watchQuery({
          query: SEARCH_BY_TEXT,
          variables: { text }
        }).valueChanges.subscribe(({ data }: any) => this.words = <Word[]>data.words)


      })
  }

  onItemClick(_id: string) {
    // console.log(`Click on: ${_id}`);
    this.text = ''
    this.words = []
    this.$data.$isSearching.next(true);


  }

  onBlur() {
    console.log("On blur");

    this.$data.$isSearching.next(false);
  }
  onFocus() {
    console.log("HOLA");
    this.$data.$isSearching.next(true);

  }

}
