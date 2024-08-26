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
                        deleteProduct()
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
            do {
                const opcionSupplier = prompt("Seleccione una opción:\n1. Create\n2. Read\n3. Update\n4. Delete\n0. Volver al Menu Principal");
                switch (opcionSupplier) {
                    case "1":
                        console.log("addProduct");
                        addSupplier();
                        break;
                    case "2":
                        console.log("viewProducts");
                        viewSuppliers();
                        break;
                    case "3":
                        console.log("Actualizar");
                        updateSupplier();
                        break;
                    case "4":
                        console.log("Eliminar");
                        deleteSupplier();
                        break;
                    case "0":
                        console.log("Volver al menu principal");
                        break;
                    default:
                        console.log("Opción no válida");
                }
            } while (opcionProducto !== "0");
            break;
        
        case "3":
            console.log("Order Management");
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


// Función para ver productos
async function viewProducts() {

    const response = await fetch('data.json');
    const data = await response.json();

    const products = data[0].products;
    const productsContainer = document.getElementById('products-container');

    productsContainer.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <p><strong>ID:</strong> ${product.id}</p>
            <p><strong>Nombre:</strong> ${product.name}</p>
            <p><strong>Categoría:</strong> ${product.category}</p>
            <p><strong>Precio:</strong> ${product.price}</p>
            <p><strong>Cantidad en Stock:</strong> ${product.quantityInStock}</p>
            <p><strong>ID del Proveedor:</strong> ${product.supplierId}</p>
            <hr>
        `;
        productsContainer.appendChild(productElement);
    });

    document.getElementById('view-section').style.display = 'none';
    document.getElementById('products-list').style.display = 'block';
}

document.getElementById('product-form').addEventListener('submit', (event) => {
    event.preventDefault();
    viewProducts();
});

async function updateProduct() {
    const dataForm = document.getElementById('update-form');

    dataForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const productId = parseInt(document.getElementById('productId').value, 10);
        const newId = document.getElementById('newId').value ? parseInt(document.getElementById('newId').value, 10) : undefined;
        const newQuantityInStock = parseInt(document.getElementById('newQuantityInStock').value, 10);

        const newDetails = {
            id: newId,
            quantityInStock: newQuantityInStock
        };

        const response = await fetch('data.json');
        const dataJson = await response.json();

        const products = dataJson[0].products || [];
        const productIndex = products.findIndex(product => product.id === productId);

        const productToUpdate = products[productIndex];
        const { id: updatedId = productToUpdate.id, quantityInStock: updatedQuantityInStock = productToUpdate.quantityInStock } = newDetails;

        products[productIndex] = {
            ...productToUpdate,
            id: updatedId,
            quantityInStock: updatedQuantityInStock
        };

        console.log('Producto actualizado:', products[productIndex]);

    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateProduct();
});



async function deleteProduct() {
    const dataForm = document.getElementById('delete-form');

    dataForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const productId = parseInt(document.getElementById('deleteProductId').value, 10);

        const response = await fetch('data.json');
        const dataJson = await response.json();

        const products = dataJson[0].products || [];

        const productIndex = products.findIndex(product => product.id === productId);

        const productToDelete = products[productIndex];

        products.splice(productIndex, 1);


        console.log('Información del producto eliminado:', productToDelete);

    });
}

document.addEventListener('DOMContentLoaded', () => {
    deleteProduct();
});

async function addSupplier() {
    const form = document.getElementById('create-supplier-form');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const nuevoProveedor = {
            id: Date.now(),
            name: document.getElementById("supplierName").value,
            contactInfo: {
                phone: document.getElementById("supplierPhone").value,
                email: document.getElementById("supplierEmail").value,
                address: document.getElementById("supplierAddress").value
            }
        };

        const response = await fetch('data.json');
        const data = await response.json();

        const suppliers = data[0].suppliers || [];
        suppliers.push(nuevoProveedor);

        console.log('Proveedor agregado:', nuevoProveedor);
        form.reset();
    });
}

async function viewSuppliers() {
    const response = await fetch('data.json');
    const data = await response.json();

    const suppliers = data[0].suppliers;
    const suppliersContainer = document.getElementById('suppliers-container');

    suppliersContainer.innerHTML = '';

    suppliers.forEach(supplier => {
        const supplierElement = document.createElement('div');
        supplierElement.className = 'supplier';
        supplierElement.innerHTML = `
            <p><strong>ID:</strong> ${supplier.id}</p>
            <p><strong>Nombre:</strong> ${supplier.name}</p>
            <p><strong>Teléfono:</strong> ${supplier.contactInfo.phone}</p>
            <p><strong>Email:</strong> ${supplier.contactInfo.email}</p>
            <p><strong>Dirección:</strong> ${supplier.contactInfo.address}</p>
            <hr>
        `;
        suppliersContainer.appendChild(supplierElement);
    });

    document.getElementById('view-supplier').style.display = 'none';
    document.getElementById('suppliers-list').style.display = 'block';
}

document.getElementById('view-supplier-form').addEventListener('submit', (event) => {
    event.preventDefault();
    viewSuppliers();
});

async function updateSupplier() {
    const form = document.getElementById('update-supplier-form');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const supplierId = parseInt(document.getElementById('supplierIdUpdate').value, 10);
        const newName = document.getElementById('newSupplierName').value;
        const newPhone = document.getElementById('newSupplierPhone').value;
        const newEmail = document.getElementById('newSupplierEmail').value;
        const newAddress = document.getElementById('newSupplierAddress').value;

        const response = await fetch('data.json');
        const data = await response.json();

        const suppliers = data[0].suppliers || [];
        const supplierIndex = suppliers.findIndex(supplier => supplier.id === supplierId);

        if (supplierIndex !== -1) {
            const supplierToUpdate = suppliers[supplierIndex];
            suppliers[supplierIndex] = {
                ...supplierToUpdate,
                name: newName || supplierToUpdate.name,
                contactInfo: {
                    phone: newPhone || supplierToUpdate.contactInfo.phone,
                    email: newEmail || supplierToUpdate.contactInfo.email,
                    address: newAddress || supplierToUpdate.contactInfo.address
                }
            };

            console.log('Proveedor actualizado:', suppliers[supplierIndex]);
        } else {
            console.log('Proveedor no encontrado');
        }

        form.reset();
    });
}

async function deleteSupplier() {
    const form = document.getElementById('delete-supplier-form');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const supplierId = parseInt(document.getElementById('deleteSupplierId').value, 10);

        const response = await fetch('data.json');
        const data = await response.json();

        const suppliers = data[0].suppliers || [];
        const supplierIndex = suppliers.findIndex(supplier => supplier.id === supplierId);

        if (supplierIndex !== -1) {
            const supplierToDelete = suppliers.splice(supplierIndex, 1)[0];
            console.log('Proveedor eliminado:', supplierToDelete);
        } else {
            console.log('Proveedor no encontrado');
        }

        form.reset();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    addSupplier();
    updateSupplier();
    deleteSupplier();
});


Menu();
optio_menu();
