export default function () {
  return {
    // Online stores icons
    appleBooksIconPath: new URL(
      '../images/shops/apple-books.png',
      import.meta.url
    ).href,

    bookShopIconPath: new URL('../images/shops/book-shop.png', import.meta.url)
      .href,

    amazonIconPath: new URL('../images/shops/amazon.png', import.meta.url).href,

    // Empty list stub image
    emptyListStubImage: new URL('../images/shoppingbook1.png', import.meta.url)
      .href,

    // SVG
    svgTrashIcon: new URL('../images/symbol-defs.svg', import.meta.url),
  };
}
