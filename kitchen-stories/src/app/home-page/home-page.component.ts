import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
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
}
