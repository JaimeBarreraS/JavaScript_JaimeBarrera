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
    
    if (dataForm) {
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

            try {
                const response = await fetch('data.json');
                let dataJson = await response.json();

                if (Array.isArray(dataJson) && dataJson.length > 0) {
                    if (!dataJson[0].products) {
                        dataJson[0].products = [];
                    }
                    dataJson[0].products.push(nuevoData);
                    
                    console.log('Datos del producto a agregar:', nuevoData);
                    console.log('Datos actualizados:', dataJson);

                    const dataUpdatedJson = JSON.stringify(dataJson, null, 2);
                    console.log('JSON actualizado:', dataUpdatedJson);
                }

                dataForm.reset();
            } catch (error) {
                console.error('Error al procesar el JSON:', error);
            }
        });
    } else {
        console.error('El formulario con ID "data-form" no se encontró.');
    }
}

function viewProducts() {

}

Menu();
optio_menu();
