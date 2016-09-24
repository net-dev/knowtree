import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { KnowtreeAppComponent } from '../app/knowtree.component';

beforeEachProviders(() => [KnowtreeAppComponent]);

describe('App: Knowtree', () => {
  it('should create the app',
      inject([KnowtreeAppComponent], (app: KnowtreeAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'knowtree works!\'',
      inject([KnowtreeAppComponent], (app: KnowtreeAppComponent) => {
    expect(app.title).toEqual('knowtree works!');
  }));
});
