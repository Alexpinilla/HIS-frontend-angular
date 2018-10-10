import { Router2Module } from './router2.module';

describe('Router2Module', () => {
  let router2Module: Router2Module;

  beforeEach(() => {
    router2Module = new Router2Module();
  });

  it('should create an instance', () => {
    expect(router2Module).toBeTruthy();
  });
});
