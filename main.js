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

        if(this.products.length === 0) {
            nuevoProducto.id = 1
        } else {
            nuevoProducto.id = this.products[this.products.length - 1].id + 1;
        }
        
        this.products.push(nuevoProducto)
    }

    getProducts(){
        return this.products
    }

    getProductsById(id) {
        let idFiltrados = this.products.filter(product => product.id === id);
        return idFiltrados
    }
}

let persona = new ProductManager()
persona.addProduct("producto prueba", "este es un producto prueba", 200, "sin imagen", 25)
persona.addProduct("hola", "no", 20, "foto", 90)

console.log(persona.getProducts())

const productWithId1 = persona.getProductsById(1);
console.log(productWithId1);

