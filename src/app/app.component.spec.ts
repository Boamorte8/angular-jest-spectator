import {
  createComponentFactory,
  Spectator
} from '@ngneat/spectator/jest';

import { AppComponent } from './app.component';


// with Spectator:
describe('AppComponent', () => {
  const createComponent = createComponentFactory({
    component: AppComponent
  });
  let spectator: Spectator<AppComponent>;
  beforeEach(() => spectator = createComponent());
  test('should create the app', () => {
    const app = spectator.component;
    expect(app).toBeTruthy();
  });

  // more 'it' blocks
  it(`should have as title 'angular-jest-spectator'`, () => {
    const app = spectator.component;
    expect(app.title).toEqual('angular-jest-spectator');
  });

  it('should render title', () => {
    const compiled = spectator.element;
    expect(compiled.querySelector('.content span').textContent).toContain('angular-jest-spectator app is running!');
  });
});

// import { TestBed, async } from '@angular/core/testing';


// describe('AppComponent', () => {
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         AppComponent
//       ],
//     }).compileComponents();
//   }));

//   test('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

// it(`should have as title 'angular-jest-spectator'`, () => {
//   const fixture = TestBed.createComponent(AppComponent);
//   const app = fixture.componentInstance;
//   expect(app.title).toEqual('angular-jest-spectator');
// });

// it('should render title', () => {
//   const fixture = TestBed.createComponent(AppComponent);
//   fixture.detectChanges();
//   const compiled = fixture.nativeElement;
//   expect(compiled.querySelector('.content span').textContent).toContain('angular-jest-spectator app is running!');
// });
// });
