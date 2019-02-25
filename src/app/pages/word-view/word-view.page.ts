import { Component, OnInit } from '@angular/core';
import { IconDefinition, faSearch, faCalendarDay, faPenSquare, faLink, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';
import { Apollo } from 'apollo-angular';
import { GET_WORD_BY_ID } from 'src/app/queries';
import { filter } from 'rxjs/operators';
import { Word } from 'src/app/interfaces/word';




@Component({
  selector: 'app-word-view',
  templateUrl: './word-view.page.html',
  styleUrls: ['./word-view.page.scss'],
})
export class WordViewPage implements OnInit {

  readonly backIcon: IconDefinition = faArrowAltCircleLeft;
  readonly searchIcon: IconDefinition = faSearch;
  readonly authorIcon: IconDefinition = faPenSquare;
  readonly linkIcon: IconDefinition = faLink;
  readonly createdIcon: IconDefinition = faCalendarDay;

  public isLoading: boolean = true;
  public word: Word;
  constructor(private route: ActivatedRoute, private apollo: Apollo, private router: Router, private $data: DataService) { }

  ngOnInit() {
    this.route.params.subscribe(({ id }) => {
      // console.log(id);
      this.getWord(id)
    })
  }


  private getWord(id: string) {

    this.apollo.watchQuery({
      query: GET_WORD_BY_ID,
      variables: { id }
    }).valueChanges
      .pipe(filter(() => id.length > 0))
      .subscribe(({ data: { word } }: any) => {
        this.word = word;
        setTimeout(() => this.isLoading = false, 1000);
      })
  }



  Onback() {
    console.log("Back!");
    this.$data.$isSearching.next(false);
    this.router.navigate(['/index', { outlets: { main: ['home'] } }]);
  }

}
