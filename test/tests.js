import './example.test.js';
import { createCountString } from './utils.js';

const { test: myTest, skip } = QUnit;

myTest('this test should display the type and count of changes for the dropdown options', (expect) => {
    const expected = 'You have changed the architecture option 3 times.'

    const actual = createCountString('architecture', 3);
    expect.equal(actual, expected);
})