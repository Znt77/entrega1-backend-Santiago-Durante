class ProductManager {
    constructor() {
        this.products = []
        this.productIdCounter = 1
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Todos los campos son obligatorios")
            return;
        }

        if (this.products.some(product => product.code === code)) {
            console.error("Ya existe un producto con ese código")
            return;
        }

        const product = {
            id: this.productIdCounter++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        this.products.push(product)
        console.log("Producto agregado:", product)
    }

    getProducts() {
        return this.products
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id)

        if (product) {
            console.log("Producto encontrado:", product)
        } else {
            console.log("Producto no encontrado")
        }

        return product
    }
}

const productManager = new ProductManager()

productManager.addProduct("Polera a rayas", "Polera 50% algodón 50% polyester", 9.99, "img1.jpg", "Polera01", 27)
productManager.addProduct("Polera con imágen de tiburón", "Polera 100% algodón", 14.99, "img2.jpg", "Polera02", 11)
productManager.addProduct("Polera con imágen de perro", "Polera 75% algodón, 25% polyester", 19.99, "img3.jpg", "Polera02", 14) //Ejemplo de error en la parte de code

const allProducts = productManager.getProducts()
console.log("Todos los productos:", allProducts)

const productById = productManager.getProductById(1)
const productNotExists = productManager.getProductById(99999)