# @xstbot/cloudku

> **CloudKu Official SDK** Solusi integrasi CDN yang cepat, aman, dan dirancang khusus untuk pengembang modern.

| NPM Package : https://www.npmjs.com/package/@xstbot/cloudku 
| Dokumentasi : https://cloudku.sbs/docs

---

## Daftar Isi

- [Tentang](#tentang)
- [Instalasi](#instalasi)
- [Penggunaan](#penggunaan)
  - [JavaScript (CommonJS)](#javascript-commonjs)
  - [JavaScript (ES Module)](#javascript-es-module)
  - [Sebagai Module / Function](#sebagai-module--function)
- [API Reference](#api-reference)
- [Response Schema](#response-schema)
- [Error Handling](#error-handling)
- [Lisensi](#lisensi)

---

## Tentang

`@xstbot/cloudku` adalah SDK resmi dari **CloudKu CDN** yang memungkinkan pengembang mengunggah file ke jaringan CDN secara mudah dan cepat. Library ini mendukung **JavaScript** dalam format **CommonJS (CJS)** maupun **ES Module (ESM)**, sehingga kompatibel dengan berbagai environment Node.js modern.

> ⚠️ **Penting:** `CloudKu` adalah sebuah **class**, bukan function biasa.
> Gunakan keyword `new` saat membuat instance, lalu panggil method `.upload()` untuk mengunggah file.

---

## Instalasi

```bash
npm install @xstbot/cloudku
# atau
yarn add @xstbot/cloudku
```

---

## Penggunaan

### JavaScript (CommonJS)

```js
const { CloudKu } = require('@xstbot/cloudku');
const fs = require('fs');

const buffer = fs.readFileSync('./photo.jpg');

async function handleUpload() {
  try {
    const cloudku = new CloudKu(); // ← gunakan 'new' karena CloudKu adalah class
    const result = await cloudku.upload(buffer, 'photo.jpg'); // ← panggil method .upload()
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
  const cloudku = new CloudKu(); // ← gunakan 'new' karena CloudKu adalah class
  const result = await cloudku.upload(buffer, 'photo.jpg'); // ← panggil method .upload()
  if (result.status === 'success') {
    console.log(`File live at: ${result.url}`);
  } else {
    console.error('Upload gagal:', result.message);
  }
};

handleUpload();
```

---

### Sebagai Module / Function

Jika ingin membungkus CloudKu dalam function terpisah agar lebih modular:

```js
// cloudku.js
const { CloudKu } = require('@xstbot/cloudku');

/**
 * Upload file ke CloudKu CDN
 * @param {Buffer} buffer - Buffer file yang akan diunggah
 * @param {string} filename - Nama file beserta ekstensinya
 * @returns {Promise<{status: string, url?: string, message?: string}>}
 */
async function uploadToCloudKu(buffer, filename) {
  try {
    const cloudku = new CloudKu();
    const result = await cloudku.upload(buffer, filename);
    if (result.status === 'success') {
      return { status: 'success', url: result.url };
    } else {
      return { status: 'error', message: result.message };
    }
  } catch (err) {
    return { status: 'error', message: err.message };
  }
}

module.exports = { uploadToCloudKu };
```

Cara penggunaan:

```js
const fs = require('fs');
const { uploadToCloudKu } = require('./cloudku');

const buffer = fs.readFileSync('./photo.jpg');

uploadToCloudKu(buffer, 'photo.jpg').then((result) => {
  if (result.status === 'success') {
    console.log('File berhasil diunggah:', result.url);
  } else {
    console.error('Error:', result.message);
  }
});
```

---

## API Reference

### new CloudKu()

Membuat instance baru dari class CloudKu.

```js
const cloudku = new CloudKu();
```

### cloudku.upload(fileBuffer, fileName)

Method utama untuk upload file ke CloudKu CDN.

| Parameter  | Type   | Required | Description                     |
|------------|--------|----------|---------------------------------|
| fileBuffer | Buffer | YES      | Isi file sebagai Node.js Buffer |
| fileName   | string | YES      | Nama file beserta ekstensinya   |

**Returns:** `Promise<Object>` — Response dari CDN.

### cloudku.getOptions()

Method untuk mendapatkan konfigurasi/opsi yang tersedia pada instance CloudKu.

```js
const cloudku = new CloudKu();
const options = cloudku.getOptions();
console.log(options);
```

---

## Response Schema

| Property | Type                   | Description                                   |
|----------|------------------------|-----------------------------------------------|
| status   | "success" atau "error" | Status hasil operasi                          |
| message  | string                 | Detail pesan atau informasi error             |
| url      | string atau undefined  | URL publik file (hanya tersedia jika success) |

---

## Error Handling

Tangani error dengan memeriksa property `status` pada response:

```js
const { CloudKu } = require('@xstbot/cloudku');

async function safeUpload(buffer, filename) {
  const cloudku = new CloudKu();
  const result = await cloudku.upload(buffer, filename);

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

## Kesalahan Umum

### ❌ Class constructor CloudKu cannot be invoked without 'new'

Terjadi jika memanggil `CloudKu()` tanpa keyword `new`.

```js
// ❌ Salah
const result = await CloudKu(buffer, 'photo.jpg');

// ✅ Benar
const cloudku = new CloudKu();
const result = await cloudku.upload(buffer, 'photo.jpg');
```

---

## Tautan Penting

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
