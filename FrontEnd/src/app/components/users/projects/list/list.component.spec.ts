import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD
<<<<<<< HEAD:FrontEnd/src/app/components/users/projects/list/list.component.spec.ts
=======
>>>>>>> master
import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ]
<<<<<<< HEAD
=======
import { ChartComponent } from './chart.component';

describe('ChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartComponent ]
>>>>>>> master:FrontEnd/src/app/components/users/chart/chart.component.spec.ts
=======
>>>>>>> master
    })
    .compileComponents();
  }));

  beforeEach(() => {
<<<<<<< HEAD
<<<<<<< HEAD:FrontEnd/src/app/components/users/projects/list/list.component.spec.ts
    fixture = TestBed.createComponent(ListComponent);
=======
    fixture = TestBed.createComponent(ChartComponent);
>>>>>>> master:FrontEnd/src/app/components/users/chart/chart.component.spec.ts
=======
    fixture = TestBed.createComponent(ListComponent);
>>>>>>> master
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
