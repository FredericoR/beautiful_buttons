import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})

export class SearchPage {

  showList: boolean = false;
  searchQuery: string = '';
  searchResults: string[]; // array

  // Button text scaling
  size: number = 15;
  maxSize: number = 19;
  minSize: number = 15;
  increment: number = 1;
  someText: string = "I change!";

  constructor(public navCtrl: NavController) {
     this.initializeSearchResults(); // static search results
  }


  // initializeSearchResults() generates a list of search elements
  initializeSearchResults() {
    this.searchResults = [
      'HOC - House of Competence',
      'ISS - Informatik Studiengangservice',
      'SCC - Steinbuch Centre of Computing',
      'SLE - Dienstleistungseinheit Studium und Lehre',
      'SZS - Studienzentrum für Sehgeschädigte'
    ];
  }

  getSearchResults(ev: any) { // the getSearchResults method will notice when it comes to an input change in the searchbar
    this.initializeSearchResults(); // will return all search results of the list
    let searchValue = ev.target.value; //searchValue is a variable and keeps the searchbar value

    if (searchValue && searchValue.trim() != '') {

      this.searchResults = this.searchResults.filter((searchResult) => { //filter gives back filtered search results
        return (searchResult.toLowerCase().indexOf(searchValue.toLowerCase()) > -1);
      });

      // show the results
      this.showList = true;
    } else {

      // hide the results when the query is empty
      this.showList = false;

    }
  }

  increaseFontSize() : void  {
    console.log("font increased.")
    if (this.size >= this.maxSize) { return };
    this.size = this.size + this.increment;
  };

  decreaseFontSize() : void  {
    console.log("font decreased.")
    if (this.size <= this.minSize) { return };
    this.size = this.size - this.increment;
  };
}
