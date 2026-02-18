#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');
const distDir = path.join(__dirname, '..', 'dist');

if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });
if (!fs.existsSync(path.join(distDir, 'esm'))) fs.mkdirSync(path.join(distDir, 'esm'), { recursive: true });

fs.copyFileSync(
  path.join(srcDir, 'index.js'),
  path.join(distDir, 'index.js')
);

// Copy ESM
fs.copyFileSync(
  path.join(srcDir, 'esm', 'index.js'),
  path.join(distDir, 'esm', 'index.js')
);

console.log('Build selesai!');
console.log('dist/index.js     (CommonJS)');
console.log('dist/esm/index.js (ES Module)');