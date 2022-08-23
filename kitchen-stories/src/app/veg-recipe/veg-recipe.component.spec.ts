import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegRecipeComponent } from './veg-recipe.component';

describe('VegRecipeComponent', () => {
  let component: VegRecipeComponent;
  let fixture: ComponentFixture<VegRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegRecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VegRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
