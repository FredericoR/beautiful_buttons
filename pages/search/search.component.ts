import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchPage implements OnInit {

  constructor() {
    this.initializeSearchResults(); // static search results
   }

  ngOnInit() {
  }

  
  showList: boolean = false;
  searchQuery: string = '';
  searchResults: string[]; // array

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

}