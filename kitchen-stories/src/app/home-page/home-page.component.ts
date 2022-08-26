import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SnacksRecipeComponent } from '../snacks-recipe/snacks-recipe.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  @ViewChild(SnacksRecipeComponent)
  private snacksRecipeComponent = {} as SnacksRecipeComponent;
  @ViewChild('myName')
  private myName = {} as ElementRef;
  toppings = new FormControl('');

  toppingList: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',

    'Pepperoni',
    'Sausage',
    'Tomato',
  ];
  btnDisabledFlag = true; // property binding
  buttonColor = 'btnColor';
  buttonText = true;
  imgSourceUrl =
    'https://cdn.pixabay.com/photo/2018/10/11/12/31/black-cat-3739702_1280.jpg';

  tableBorder = '1';
  snackItem = 'Pohe';

  snackItemList = [
    {
      id: 1,
      name: 'sandwich',
    },
    {
      id: 2,
      name: 'dosa',
    },
    {
      id: 3,
      name: 'Idli',
    },
  ];
  interpolatedString = ' I am an interpolated string';
  constructor() {}

  ngOnInit(): void {}

  btnClicked(event: MouseEvent) {
    console.log('button was clicked : ', event);
  }

  addItem(itemParam: any) {
    this.snackItemList.push(itemParam);
  }

  increase() {
    this.snacksRecipeComponent.increaseByOne();
  }
  decrease() {
    this.snacksRecipeComponent.decreaseByOne();
  }

  //viewchild ElementRef example
  ngAfterViewInit() {
    this.myName.nativeElement.style.background = 'cyan';
  }
}
