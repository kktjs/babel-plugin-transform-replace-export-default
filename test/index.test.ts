import { transformSync } from '@babel/core';
import plugin from '../src';

const defaultBabelOptions = {
  presets: [],
  plugins: [plugin],
};

test(`Case const`, () => {
  const babelOptions = { ...defaultBabelOptions };
  const source = `const demo = 0;\n export default demo;`;
  const { code } = transformSync(source, babelOptions);
  const expected = `const demo = 0;\nreturn demo;`;
  expect(code).toBe(expected);
});

test(`Case function`, () => {
  const babelOptions = { ...defaultBabelOptions };
  const source = `function demo() {};export default demo;`;
  const { code } = transformSync(source, babelOptions);
  const expected = `function demo() {}\n\n;\nreturn demo;`;
  expect(code).toBe(expected);
});

test(`Case class`, () => {
  const babelOptions = { ...defaultBabelOptions };
  const source = `class demo { constructor() { } };export default demo;`;
  const { code } = transformSync(source, babelOptions);
  const expected = `class demo {\n  constructor() {}\n\n}\n\n;\nreturn demo;`;
  expect(code).toBe(expected);
});

test(`Case 02`, () => {
  const babelOptions = { ...defaultBabelOptions };
  const source = `export default function demo() {}`;
  const { code } = transformSync(source, babelOptions);
  const expected = `return function demo() {};`;
  expect(code).toBe(expected);
});

test(`Case 03`, () => {
  const babelOptions = { ...defaultBabelOptions };
  const source = `export default class demo { }`;
  const { code } = transformSync(source, babelOptions);
  const expected = `return class demo {};`;
  expect(code).toBe(expected);
});

test(`Case options remove export default 01`, () => {
  const babelOptions = {
    ...defaultBabelOptions, plugins: [[plugin, {
      removeExportDefault: true,
    }]]
  };
  const source = `export default class demo { }`;
  const { code } = transformSync(source, babelOptions);
  const expected = `class demo {}`;
  expect(code).toBe(expected);
});

test(`Case options remove export default 02`, () => {
  const babelOptions = {
    ...defaultBabelOptions, plugins: [
      [plugin, { removeExportDefault: true }]
    ]
  };
  const source = `export default function demo() {}`;
  const { code } = transformSync(source, babelOptions);
  const expected = `function demo() {}`;
  expect(code).toBe(expected);
});


test(`Case options remove export default 03`, () => {
  const babelOptions = {
    ...defaultBabelOptions, plugins: [
      [plugin, { removeExportDefault: true }]
    ]
  };
  const source = `class demo {}\nexport default demo;`;
  const { code } = transformSync(source, babelOptions);
  const expected = `class demo {}`;
  expect(code).toBe(expected);
});

test(`Case options remove export default 04`, () => {
  const babelOptions = {
    ...defaultBabelOptions, plugins: [
      [plugin, { removeExportDefault: true }]
    ]
  };
  const source = `function demo() {}\nexport default demo;`;
  const { code } = transformSync(source, babelOptions);
  const expected = `function demo() {}`;
  expect(code).toBe(expected);
});

test(`Case options remove export default 05`, () => {
  const babelOptions = {
    ...defaultBabelOptions, plugins: [
      [plugin, { removeExportDefault: true }]
    ]
  };
  const source = `const demo = 0;\n export default demo;`;
  const { code } = transformSync(source, babelOptions);
  const expected = `const demo = 0;`;
  expect(code).toBe(expected);
});
