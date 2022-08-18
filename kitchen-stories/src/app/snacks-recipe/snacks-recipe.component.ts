import { Component, OnInit } from '@angular/core';
import { BackendMockService } from '../shared/services/backend-mock.service';

@Component({
  selector: 'app-snacks-recipe',
  templateUrl: './snacks-recipe.component.html',
  styleUrls: ['./snacks-recipe.component.scss'],
})
export class SnacksRecipeComponent implements OnInit {
  constructor(private backendService: BackendMockService) {}

  ngOnInit(): void {}
}
