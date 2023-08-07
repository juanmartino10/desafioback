class ProductManager {
    constructor() {
        this.products = []
    }

    addProduct(title, description, price, thumbnail, stock) {
        let nuevoProducto = {
            title,
            description,
            price,
            thumbnail,
            stock
        }

        if (this.products.length === 0) {
            nuevoProducto.id = 1
        } else {
            nuevoProducto.id = this.products[this.products.length - 1].id + 1;
        }

        this.products.push(nuevoProducto)
    }

    getProducts() {
        return this.products
    }

    getProductosById(idProducto) {
        let indiceProducto = this.products.findIndex(prod => prod.id === idProducto)

        if (indiceProducto === -1) {
            console.log(`El producto ${idProducto} no existe`)
            return
        } else {
            return this.products[idProducto]
        }
    }
}

let persona = new ProductManager()
persona.addProduct("producto prueba", "este es un producto prueba", 200, "sin imagen", 25)
persona.addProduct("hola", "no", 20, "foto", 90)
persona.getProductosById(15)

console.log(persona.getProducts())



