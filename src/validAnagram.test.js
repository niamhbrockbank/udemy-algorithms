import {validAnagram} from './validAnagram'

test('empty string', () => {
    expect(validAnagram('', '')).toBe(true)
})

test('letters don\'t match', () => {
    expect(validAnagram('aaz', 'zza')).toBe(false)
    expect(validAnagram('rat', 'car')).toBe(false)
})

test('letters match in any order', () => {
    expect(validAnagram('anagram', 'nagaram')).toBe(true)
    expect(validAnagram('qwerty', 'qeywrt')).toBe(true)
    expect(validAnagram('texttwisttime', 'timetwisttext')).toBe(true)
})