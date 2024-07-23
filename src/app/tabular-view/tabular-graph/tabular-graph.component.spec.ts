import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabularGraphComponent } from './tabular-graph.component';

describe('TabularGraphComponent', () => {
  let component: TabularGraphComponent;
  let fixture: ComponentFixture<TabularGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabularGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabularGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
