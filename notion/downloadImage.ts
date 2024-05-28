import axios from "axios";
import { writeFile } from "fs";

/**
 * 画像をダウンロードし、保存する
 *
 * @param {string} downloadURL - ダウンロード先画像のURL
 * @param {string} saveLocalPath - 保存するローカルのパス
 */
export async function downloadImage(
  downloadURL: string,
  saveLocalPath: string,
) {
  // 画像ファイルをダウンロード
  try {
    const response = await axios.get(downloadURL, {
      responseType: "arraybuffer",
    });
    writeFile(saveLocalPath, response.data, (error) => {
      if (error) {
        throw error;
      }
    });
  } catch (error) {
    throw error;
  }
}
