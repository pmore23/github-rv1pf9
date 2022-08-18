import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnacksRecipeComponent } from './snacks-recipe.component';

describe('SnacksRecipeComponent', () => {
  let component: SnacksRecipeComponent;
  let fixture: ComponentFixture<SnacksRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnacksRecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnacksRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
