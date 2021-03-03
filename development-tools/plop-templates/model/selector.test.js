import expect from 'expect';
import { select{{uppercase}}s, selectActive{{uppercase}}, selectDeleted{{uppercase}} } from './{{camelCaseName}}';

describe('{{uppercase}} Selector Tests', () => {
  it('Should return the active {{camelCaseName}} from state', () => {
    const selected = selectActive{{uppercase}}.resultFunc({ active{{uppercase}}: {} });
    expect(selected).toEqual(expect.objectContaining({}));
  });
  it('Should return the {{camelCaseName}}s object from state', () => {
    const selected = select{{uppercase}}s.resultFunc({ {{camelCaseName}}s: {} });
    expect(selected).toEqual(expect.objectContaining({}));
  });
  it('Should return the deleted {{camelCaseName}} from state', () => {
    const selected = selectDeleted{{uppercase}}.resultFunc({ deleted{{uppercase}}: {} });
    expect(selected).toEqual(expect.objectContaining({}));
  });
});
