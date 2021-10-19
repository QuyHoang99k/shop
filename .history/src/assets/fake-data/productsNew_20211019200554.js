const product_01_image_01 = require('../images/productNew/download-1.jpg').default
const product_01_image_02 = require('../images/productNew/download-3.jpg').default
// const product_01_image_03 = require('../images/products/product-01 (3).jpg').default

const product_02_image_01 = require('../images/productNew/download-2.jpg').default
const product_02_image_02 = require('../images/productNew/download-24.jpg').default

const product_03_image_01 = require('../images/productNew/download-4.jpg').default
const product_03_image_02 = require('../images/productNew/download-5.jpg').default

const product_04_image_01 = require('../images/productNew/download-6.jpg').default
const product_04_image_02 = require('../images/productNew/download-7.jpg').default

const product_05_image_01 = require('../images/productNew/download-8.jpg').default
const product_05_image_02 = require('../images/productNew/download-9.jpg').default

const product_06_image_01 = require('../images/productNew/download-10.jpg').default
const product_06_image_02 = require('../images/productNew/download-14.jpg').default

const product_07_image_01 = require('../images/productNew/download-12.jpg').default
const product_07_image_02 = require('../images/productNew/download-13.jpg').default

const product_08_image_01 = require('../images/productNew/download-11.jpg').default
const product_08_image_02 = require('../images/productNew/download-15.jpg').default

const product_09_image_01 = require('../images/productNew/download-16.jpg').default
const product_09_image_02 = require('../images/productNew/download-17.jpg').default

const product_10_image_01 = require('../images/productNew/download-18.jpg').default
const product_10_image_02 = require('../images/productNew/download-19.jpg').default

const product_11_image_01 = require('../images/productNew/download-20.jpg').default
const product_11_image_02 = require('../images/productNew/download-21.jpg').default

const product_12_image_01 = require('../images/productNew/download-22.jpg').default
const product_12_image_02 = require('../images/productNew/download-23.jpg').default

const productNew = [
    {
        title: "Gối ôm",
        price: '189000',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "red", "orange"],
        slug: "ao-thun-dinosaur-01",
        size: ["s", "m", "l", "xl"]
    },
    {
        title: "Gối kê đầu",
        price: '159000',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "red", "blue"],
        slug: "ao-thun-dinosaur-02",
        size: ["s", "m"]
    },
    {
        title: "Móc khóa",
        price: '90000',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "red", "orange", "yellow"],
        slug: "ao-thun-dinosaur-03",
        size: ["m"]
    },
    {
        title: "Ốp iphone 11",
        price: '194000',
        image01: product_04_image_01,
        image02: product_04_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "orange", "blue"],
        slug: "ao-thun-polo-04",
        size: ["xl"]
    },
    {
        title: "Áo thun Polo 05",
        price: '194000',
        image01: product_05_image_01,
        image02: product_05_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "pink"],
        slug: "ao-thun-polo-05",
        size: ["xxl"]
    },
    {
        title: "Áo thun Polo 06",
        price: '194000',
        image01: product_06_image_01,
        image02: product_06_image_02,
        categorySlug: "ao-thun",
        colors: ["black"],
        slug: "ao-thun-polo-06",
        size: ["s", "m", "xl"]
    },
    {
        title: "Áo somi caro 07",
        price: '194000',
        image01: product_07_image_01,
        image02: product_07_image_02,
        categorySlug: "ao-somi",
        colors: ["white", "red", "orange", "blue"],
        slug: "ao-somi-caro-07",
        size: ["l", "xl"]
    },
    {
        title: "Áo somi dài tay 08",
        price: '194000',
        image01: product_08_image_01,
        image02: product_08_image_02,
        categorySlug: "ao-somi",
        colors: ["white", "red", "black"],
        slug: "ao-somi-dai-tay-08",
        size: ["s", "m", "xl"]
    },
    {
        title: "Áo somi tay dài 09",
        price: '194000',
        image01: product_09_image_01,
        image02: product_09_image_02,
        categorySlug: "ao-somi",
        colors: ["white", "blue"],
        slug: "ao-somi-tay-dai-09",
        size: ["m"]
    },
    {
        title: "Quần jean phong cách 10",
        price: '194000',
        image01: product_10_image_01,
        image02: product_10_image_02,
        categorySlug: "quan-jean",
        colors: ["blue", "black"],
        slug: "quan-jean-phong-cach-10",
        size: ["l"]
    },
    {
        title: "Quần jean 11",
        price: '194000',
        image01: product_11_image_01,
        image02: product_11_image_02,
        categorySlug: "quan-jean",
        colors: ["blue", "black"],
        slug: "quan-jean-11",
        size: ["s", "m", "xl"]
    },
    {
        title: "Quần jean 12",
        price: '194000',
        image01: product_12_image_01,
        image02: product_12_image_02,
        categorySlug: "quan-jean",
        colors: ["blue"],
        slug: "quan-jean-12",
        size: ["s", "m", "xl"]
    },
    
    
]

const getAllProducts = () => productNew

const getProducts = (count) => {
    const max = productNew.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return productNew.slice(start, start + count)
}

const productNewData = {
    getAllProducts,
    getProducts
}

export default productNewData