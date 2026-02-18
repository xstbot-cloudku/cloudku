# @xstbot/cloudku

> **CloudKu Official SDK** Solusi integrasi CDN yang cepat, aman, dan dirancang khusus untuk pengembang modern.

[![NPM Version](https://img.shields.io/npm/v/@xstbot/cloudku)](https://www.npmjs.com/package/@xstbot/cloudku)
[![License](https://img.shields.io/npm/l/@xstbot/cloudku)](https://www.npmjs.com/package/@xstbot/cloudku)
[![Status](https://img.shields.io/badge/status-stable-brightgreen)]()

¦ NPM Package : https://www.npmjs.com/package/@xstbot/cloudku
– Dokumentasi : https://cloudku.sbs/docs

---

## ‹ Daftar Isi

- [Tentang](#tentang)
- [Instalasi](#instalasi)
- [Penggunaan](#penggunaan)
  - [JavaScript (CommonJS)](#javascript-commonjs)
  - [JavaScript (ES Module)](#javascript-es-module)
- [API Reference](#api-reference)
- [Response Schema](#response-schema)
- [Error Handling](#error-handling)
- [Lisensi](#lisensi)

---

## Tentang

`@xstbot/cloudku` adalah SDK resmi dari **CloudKu CDN** yang memungkinkan pengembang mengunggah file ke jaringan CDN secara mudah dan cepat. Library ini mendukung **JavaScript** dalam format **CommonJS (CJS)** maupun **ES Module (ESM)**, sehingga kompatibel dengan berbagai environment Node.js modern.

---

## Instalasi

```bash
npm install @xstbot/cloudku
# atau
yarn add @xstbot/cloudku
```

---

## – Penggunaan

### JavaScript (CommonJS)

```js
const { CloudKu } = require('@xstbot/cloudku');
const fs = require('fs');

const buffer = fs.readFileSync('./photo.jpg');

async function handleUpload() {
  try {
    const result = await CloudKu(buffer, 'photo.jpg');
    if (result.status === 'success') {
      console.log('File berhasil diunggah:', result.url);
    } else {
      console.error('API Error:', result.message);
    }
  } catch (err) {
    console.error('System Error:', err.message);
  }
}

handleUpload();
```

---

### JavaScript (ES Module)

```js
import { CloudKu } from '@xstbot/cloudku';
import { readFileSync } from 'fs';

const buffer = readFileSync('./photo.jpg');

const handleUpload = async () => {
  const result = await CloudKu(buffer, 'photo.jpg');
  if (result.status === 'success') {
    console.log(`File live at: ${result.url}`);
  } else {
    console.error('Upload gagal:', result.message);
  }
};

handleUpload();
```

---

## API Reference

### CloudKu(fileBuffer, fileName)

Fungsi utama untuk upload file ke CloudKu CDN.

| Parameter    | Type     | Required | Description                     |
|--------------|----------|----------|---------------------------------|
| fileBuffer   | Buffer   | YES      | Isi file sebagai Node.js Buffer |
| fileName     | string   | YES      | Nama file beserta ekstensinya   |

**Returns:** `Promise<Object>` Response dari CDN.

---

## Response Schema

| Property   | Type                    | Description                                   |
|------------|-------------------------|-----------------------------------------------|
| status     | "success" atau "error"  | Status hasil operasi                          |
| message    | string                  | Detail pesan atau informasi error             |
| url        | string atau undefined   | URL publik file (hanya tersedia jika success) |

---

## Error Handling

Library ini sudah menangani error secara internal. Jika upload gagal, fungsi akan mengembalikan object dengan `status: 'error'` dan `message` yang berisi keterangan kegagalan sehingga aplikasi Anda tidak akan crash.

```js
const { CloudKu } = require('@xstbot/cloudku');

async function safeUpload(buffer, filename) {
  const result = await CloudKu(buffer, filename);

  if (result.status === 'success') {
    console.log('URL File:', result.url);
    return result.url;
  } else {
    console.error('Upload gagal:', result.message);
    return null;
  }
}
```

---

## — Tautan Penting

| Sumber        | URL                                           |
|---------------|-----------------------------------------------|
| NPM Package   | https://www.npmjs.com/package/@xstbot/cloudku |
| Dokumentasi   | https://cloudku.sbs/docs                      |
| CloudKu Utama | https://cloudku.sbs                           |

---

## Lisensi

Proyek ini dilisensikan di bawah **MIT License**.
Kunjungi: https://www.npmjs.com/package/@xstbot/cloudku

---

> © 2026 CloudKu CDN API Developed for Modern Apps