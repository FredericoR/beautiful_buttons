import { Component } from '@angular/core';

import { SearchPage } from '../search/search';
import { HomePage } from '../home/home';
import { InfoPage } from '../info/info';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SearchPage;
  tab3Root = InfoPage;


  constructor() {

  }
}