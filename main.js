class ProductManager {
    static ultId = 0;
    // Variable estatica de la clase.

    // Creo el constructor con el elemento products, que sera un array vacio.
    constructor() {
        this.products = [];
    }

    // Metodos: addProduct, getProducts, getProductById

    addProduct(title, description, price, image, code, stock) {

        // Variaciones que nos pide la consigna:
        // 1) Validacion de agregado de todos los campos:
        if (!title || !description || !price || !image || !code || !stock) {
            console.log("Todos los datos son obligatorios, por favor completar todos los campos")
            return;
        }

        // 2) Validacion de que el codigo sea unico:
        if (this.products.some(item => item.code === code)) {
            console.log("El codigo debe ser unico");
            return;
        }
        // 3) Creacion de un nuevo objeto con los datos solicitados

        const newProduct = {
            id: ++ProductManager.ultId,
            title,
            description,
            price,
            image,
            code,
            stock
        }
        // 4) se agrega el objeto nuevo al array

        this.products.push(newProduct);

    }

    getProducts() {
        console.log(this.products);
    }

    getProductById(id) {
        const product = this.products.find(item => item.id === id);

        if (!product) {
            console.log("Producto no encontrado");
        } else {
            console.log("Producto encontrado: ", product);
        }
        return product;
    }

}


// Testing

//1) Creo la instancia de la clase "ProductManager"

const manager = new ProductManager();

//2) Se llama al metodo "getProducts". Debe devolver un arreglo vacio.

manager.getProducts();

//3) Se agrega un nuevo producto con el metodo "addProduct" con los campos solicitados:

manager.addProduct("Producto Prueba", "Este es un producto prueba", 200, "sin imagen", "abc123", 25);

//4) Agrego otros objetos para corroborar que no se repite el id.

manager.addProduct("Remera", "Azul", 2000, "Remera.jpg", "reme01", 20);

manager.addProduct("Pantalon", "Negro", 8000, "Pantalon.jpg", "pant01", 10);

//5) Se llama nuevamente al metodo "getProducts". Debe aparecer el producto recien agregado.

manager.getProducts();


//6) Se agrega un producto repetido. Debe mostrar un error por este motivo.

manager.addProduct("Pantalon", "Negro", 8000, "Pantalon.jpg", "pant01", 10);

// 7) Se corrobora que getProductById devuelva error si no encuentra el producto o que devuelva el producto en caso de encontrarlo.

manager.getProductById(2); // Debe arrojar la leyenda: "Producto encontrado: Remera"

manager.getProductById(20); // Debe arrojar la leyenda "Producto no encontrado"
