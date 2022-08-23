import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  @Output() newItemEvent = new EventEmitter<Object>();

  constructor(private backendService: BackendMockService) {}

  ngOnInit(): void {}

  addNewItem(id: String, name: String) {
    let itemObj = {
      id: id,
      name: name,
    };
    this.newItemEvent.emit(itemObj);
  }
}
