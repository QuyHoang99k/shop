const product_01_image_01 = require('../images/productTop/productTop-01 (1).jpg').default
const product_01_image_02 = require('../images/productTop/productTop-01 (2).jpg').default
// const product_01_image_03 = require('../images/products/product-01 (3).jpg').default

const product_02_image_01 = require('../images/productTop/productTop-02 (1).jpg').default
const product_02_image_02 = require('../images/productTop/productTop-02 (2).jpg').default

const product_03_image_01 = require('../images/productTop/productTop-03 (1).jpg').default
const product_03_image_02 = require('../images/productTop/productTop-03 (2).jpg').default

const product_04_image_01 = require('../images/productTop/productTop-04 (1).jpg').default
const product_04_image_02 = require('../images/productTop/productTop-04 (2).jpg').default

const productTop = [
    {
        title: "Túi đeo vai",
        price: '189000',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "red", "orange"],
        slug: "ao-thun-dinosaur-01",
        size: ["s", "m", "l", "xl"]
    },
    {
        title: "Mũ thể thao",
        price: '159000',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "red", "blue"],
        slug: "ao-thun-dinosaur-02",
        size: ["s", "m"]
    },
    {
        title: "Giày baby",
        price: '189000',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "red", "orange"],
        slug: "ao-thun-dinosaur-01",
        size: ["s", "m", "l", "xl"]
    },
    {
        title: "Áo Peanuts",
        price: '189000',
        image01: product_04_image_01,
        image02: product_04_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "red", "orange"],
        slug: "ao-thun-dinosaur-01",
        size: ["s", "m", "l", "xl"]
    },
    
]

const getAllProducts = () => productTop

const getProducts = (count) => {
    const max = productTop.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return productTop.slice(start, start + count)
}

const productTopData = {
    getAllProducts,
    getProducts
}

export default productTopData