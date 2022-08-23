import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonVegRecipeComponent } from './non-veg-recipe.component';

describe('NonVegRecipeComponent', () => {
  let component: NonVegRecipeComponent;
  let fixture: ComponentFixture<NonVegRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonVegRecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonVegRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
