import { GetNameFromUidPipe } from './get-name-from-uid.pipe';

describe('GetNameFromUidPipe', () => {
  it('create an instance', () => {
    const pipe = new GetNameFromUidPipe();
    expect(pipe).toBeTruthy();
  });
});
