import axios from 'axios';
import FormData from 'form-data';

/**
 * Upload file ke CloudKu CDN
 * @param {Buffer} fileBuffer - Buffer dari file yang akan di-upload
 * @param {string} fileName - Nama file beserta ekstensinya (contoh: "foto.jpg")
 * @returns {Promise<Object>} Response dari CDN
 */
const CloudKu = async (fileBuffer, fileName) => {
  try {
    const url = 'https://cloudku.sbs/cdn/api.php';
    const form = new FormData();

    form.append('file', fileBuffer, {
      filename: fileName,
    });

    const response = await axios.post(url, form, {
      headers: {
        ...form.getHeaders(),
      },
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
    });

    return response.data;
  } catch (error) {
    console.error('CloudKu Upload Error:', error.response?.data || error.message);
    return {
      status: 'error',
      message: error.response?.data?.message || error.message,
    };
  }
};

export { CloudKu };
export default CloudKu;