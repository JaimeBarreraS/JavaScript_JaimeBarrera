function Menu() {
    console.log("1. Product Management");
    console.log("2. Supplier Management");
    console.log("3. Order Management");
    console.log("4. Stock Management");
    console.log("5. Reporting");
    console.log("6. Search and Filter");
    console.log("0. Exit");
}

function optio_menu() {
    const option = prompt("Seleccione una opción: ");

    switch (option) {
        case "1":
            console.log("Product Management");
            do {
                const opcionProducto = prompt("Seleccione una opción:\n1. Create\n2. Read\n3. Update\n4. Delete\n0. Volver al Menu Principal");
                switch (opcionProducto) {
                    case "1":
                        console.log("addProduct");
                        addProduct();
                        break;
                    case "2":
                        console.log("viewProducts");
                        viewProducts();
                        break;
                    case "3":
                        console.log("Actualizar");
                        updateProduct();
                        break;
                    case "4":
                        console.log("Eliminar");
                        break;
                    case "0":
                        console.log("Volver al menu principal");
                        break;
                    default:
                        console.log("Opción no válida");
                }
            } while (opcionProducto !== "0");
            break;
        
        case "2":
            console.log("Supplier Management");
            proveedores();
            break;
        case "3":
            console.log("Order Management");
            pedidos();
            break;
        case "4":
            console.log("Stock Management");
            existencias();
            break;
        case "5":
            console.log("Reporting");
            informes();
            break;
        case "6":
            console.log("Search and Filter");
            buscar();
            break;
        case "0":
            console.log("Exit");
            Salir();
            break;
        default:
            console.log("Opción no válida");
    }
}

function addProduct() {

    const dataForm = document.getElementById('data-form');

    dataForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const nuevoData = {
            "id": Date.now(),
            "name": document.getElementById("name").value,
            "category": document.getElementById("category").value,
            "price": parseFloat(document.getElementById("price").value),
            "quantityInStock": parseInt(document.getElementById("quantityInStock").value),
            "supplierId": parseInt(document.getElementById("supplierId").value),
        };

        const response = await fetch('data.json');
        const dataJson = await response.json();

        const products = dataJson[0].products || [];
        products.push(nuevoData);

        console.log('Datos del producto a agregar:', nuevoData);

        dataForm.reset();
    });
}


async function viewProducts() {

    const response = await fetch('data.json');
    const data = await response.json();

    const products = data[0].products;

    products.forEach(product => {
        console.log(`ID: ${product.id}`);
        console.log(`Nombre: ${product.name}`);
        console.log(`Categoría: ${product.category}`);
        console.log(`Precio: ${product.price}`);
        console.log(`Cantidad en Stock: ${product.quantityInStock}`);
        console.log(`ID del Proveedor: ${product.supplierId}`);
        console.log('-------------------------');
    });
}

async function updateProduct() {
    const dataForm = document.getElementById('update-form');

    dataForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const productId = parseInt(document.getElementById('productId').value);
        const newId = document.getElementById('newId').value ? parseInt(document.getElementById('newId').value) : undefined;

        const newDetails = {
            id: newId,
            quantityInStock: newQuantityInStock
        };

        const response = await fetch('data.json');
        const dataJson = await response.json();

        const products = dataJson[0].products || [];
        const productIndex = products.findIndex(product => product.id === productId);

        const productToUpdate = products[productIndex];
        const { id: newProductId = productToUpdate.id, quantityInStock: newProductQuantityInStock = productToUpdate.quantityInStock } = newDetails;

        productToUpdate.id = newProductId;
        productToUpdate.quantityInStock = newProductQuantityInStock;

        console.log('Producto actualizado:', productToUpdate);

    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateProduct();
});



Menu();
optio_menu();
