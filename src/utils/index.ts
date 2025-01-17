const accentsMap = {
  à: 'a',
  á: 'a',
  ả: 'a',
  ã: 'a',
  ạ: 'a',
  ă: 'a',
  ắ: 'a',
  ằ: 'a',
  ẳ: 'a',
  ẵ: 'a',
  ặ: 'a',
  â: 'a',
  ấ: 'a',
  ầ: 'a',
  ẩ: 'a',
  ẫ: 'a',
  ậ: 'a',
  đ: 'd',
  è: 'e',
  é: 'e',
  ẻ: 'e',
  ẽ: 'e',
  ẹ: 'e',
  ê: 'e',
  ế: 'e',
  ề: 'e',
  ể: 'e',
  ễ: 'e',
  ệ: 'e',
  ì: 'i',
  í: 'i',
  ỉ: 'i',
  ĩ: 'i',
  ị: 'i',
  ò: 'o',
  ó: 'o',
  ỏ: 'o',
  õ: 'o',
  ọ: 'o',
  ô: 'o',
  ố: 'o',
  ồ: 'o',
  ổ: 'o',
  ỗ: 'o',
  ộ: 'o',
  ơ: 'o',
  ớ: 'o',
  ờ: 'o',
  ở: 'o',
  ỡ: 'o',
  ợ: 'o',
  ù: 'u',
  ú: 'u',
  ủ: 'u',
  ũ: 'u',
  ụ: 'u',
  ư: 'u',
  ứ: 'u',
  ừ: 'u',
  ử: 'u',
  ữ: 'u',
  ự: 'u',
  ỳ: 'y',
  ý: 'y',
  ỷ: 'y',
  ỹ: 'y',
  ỵ: 'y',
};
export function toSlug(text) {
  let slug = text.toLowerCase();
  slug = slug
    .split('')
    ?.map((char) => accentsMap[char] || char)
    .join('');
  slug = slug
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/ +/g, '-')
    .replace(/^-+|-+$/g, '');
  return slug;
}

export const extractImageUrls = (str) => {
  const urlRegex = /https?:\/\/[^\s(["<,>/]*\/[^\s[",><]*\.(?:png|jpg|jpeg|gif|webp|bmp|tiff|svg)(\?[^\s[",><]*)?/gi;
  const urls = str.match(urlRegex);
  return urls || [];
};
