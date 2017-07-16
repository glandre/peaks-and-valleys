# Castles on Peaks and Valleys

The goal of this project is to write a function in JavaScript to solve the problem described bellow:

## Problem

Given an array of integers, where each integer represents the current height of the land. Write a function that reads that array and returns the number of castles that can be built. A castle can only be built on Peaks and Valleys, and only one castle can be built on each Peak or Valley.

Assumptions:

- You can always build a castle at the start of the array, provided it is non-empty

- We only want to build one castle per peak or valley.

- A peak is an integer or series of integers that is above the immediately preceding and following ints. For example, in the sequence [2,6,6,6,3] the sequence of 3 6s is a peak.

- A valley is an integer or series of integers that is below the immediately preceding and following ints. For example, in the sequence [6,1,4] the "1" would be a valley.

## Instructions to Run

TODO

## Technical Description

This project uses Mocha for automated tests, and, it uses Babel to transpile Javascript from ES6 to ES5.

## Project Creation Steps

Here is the step-by-step I followed in order to create this repository.

### Requirements

- NPM and Node must be installed in your computer and available in the command line.
  - https://www.npmjs.com/
  - https://nodejs.org/en/

- Babel: npm install --save-dev babel-cli
  - Setup: http://babeljs.io/docs/setup/#installation

### Steps

```
  git init
  npm init
  npm install --save-dev mocha
  mkdir src
  nano src/index.js 
  mkdir test
  nano test/index.js
  nano test/test.js
  nano .gitignore
  npm test
  npm install babel-core --save-dev
  npm install babel-preset-es2015 --save-dev
  npm install --save-dev babel-plugin-transform-flow-strip-types
  npm test
  git add .gitignore
  git add package.json
  git add src/
  git add test/
  nano README.md
  git commit -as
```

## REFERENCES

- Mocha JS
  - Getting started: https://mochajs.org/
- Babel
  - Setup: http://babeljs.io/docs/setup/#installation
  - Testing in ES6 (ES2015) with Mocha and Babel: http://jamesknelson.com/testing-in-es6-with-mocha-and-babel-6/

