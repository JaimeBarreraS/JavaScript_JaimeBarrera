function Menu(){
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

    switch (option){
        case "1":
            console.log("Product Management")
            let opcionProducto = prompt ("Selecciones una opcion:\n1. Crear\n2. Añadir\n3. Actualizar\n4. Eliminar\n0. Volver al Menu Principal");
            switch (opcionProducto){
                case "1":
                    console.log("Crear");
                break;
                case "2":
                    console.log("Añadir");
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
            }
            break;
        case "2":
            console.log("Supplier Management")
            proveedores();
            break;
        case "3":
            console.log("Order Management")    
            pedidos();
            break;
        case "4":
            console.log("Stock Management")
            existencias();
            break;
        case "5":
            console.log("Reporting")
            informes();
            break;
        case "6":
            console.log("Search and Filter")
            buscar();
            break;
        case "0":
            console.log("Exit")
            Salir();
            break;
    }
}
Menu()
optio_menu()