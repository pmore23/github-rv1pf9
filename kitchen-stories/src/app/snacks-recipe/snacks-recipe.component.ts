import { Component, OnInit, Input } from '@angular/core';

import { BackendMockService } from '../shared/services/backend-mock.service';
import { Item } from '../shared/model/Item';

@Component({
  selector: 'app-snacks-recipe',
  templateUrl: './snacks-recipe.component.html',
  styleUrls: ['./snacks-recipe.component.scss'],
})
export class SnacksRecipeComponent implements OnInit {
  @Input() item: String;
  @Input() itemList: Item[];
  constructor(private backendService: BackendMockService) {}

  ngOnInit(): void {}
}
