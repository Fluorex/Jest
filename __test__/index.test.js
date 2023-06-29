import {indexOf, lastIndexOf, includes, some} from '../js/index.js'

const array = [1, 2, 3, 4, 3, 5];

test('check indexOf', () => {
const checkIndexOf = new indexOf()
expect(checkIndexOf).not.toBeNull()
expect(checkIndexOf).not.toBeUndefined()
    const item = 3;
    const expectedIndex = 2;
    expect(indexOf(array, item)).toBe(expectedIndex);
});

test('check lastIndexOf', () => {
    const checkLastIndexOf = new lastIndexOf()
    expect(checkLastIndexOf).not.toBeNull()
    expect(checkLastIndexOf).not.toBeUndefined()
    const item = 3;
    const expectedIndex = 4;
    expect(lastIndexOf(array, item)).toBe(expectedIndex);
});

test('check includes', () => {
    const checkIncludes = new includes()
    expect(checkIncludes).not.toBeNull()
    expect(checkIncludes).not.toBeUndefined()
    expect(typeof checkIncludes).toBe('boolean')
    const element = 3;
    expect(includes(array, element)).toBe(true);
});

test('check some', () => {
    const checkSome = new some()
    expect(checkSome).not.toBeNull()
    expect(checkSome).not.toBeUndefined()
    expect(typeof checkSome).toBe('boolean')
});