/**
 * markdownの画像表記から画像URLのみを抽出する
 * ![代替テキスト](画像のURL) -> 画像のURL
 *
 * @param {string} MDImage - "![代替テキスト](画像のURL)"
 * @returns {string} 抽出した画像のURL
 */
export function mdUrlExtraction(MDImage: string): string {
  const startIdx = MDImage.indexOf("(");
  const endIdx = MDImage.lastIndexOf(")");
  // const altText = MDImage.substring(2, startIdx).trim();
  const url = MDImage.substring(startIdx + 1, endIdx).trim();

  return url;
}
