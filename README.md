# Sistema de Transporte en Angular 7

Este sistema ha sido creado con base a los siguientes requerimientos:

1. El sistema debe ser construido en Angular
2. Se debe registrar la siguiente información de cada vehículo:
    - Tipo (moto, automóvil, Camioneta, Todoterreno, Van, Bus, Camión)
    - Marca
    - Modelo
    - Año de Fabricación
    - Capacidad de tanque en litros
    - Número de pasajeros
    - Capacidad de carga
    
3. Se debe tener la posibilidad de crear, consultar, modificar, y listar los vehículos
4. Se requiere tener un cálculo de la cantidad de combustible necesaria para llenar todos los abastos, en litros y galones. 

# Funcionamiento del aplicativo
Se requiere instalar: Visual Studio Code, Node.js, angular cli
Por medio de Visual Studio Code abrir el proyecto SistemaTransporte, en el terminal ejecutar ng serve para subir la aplicación
En el navegador acceder a http://localhost:4200/

De acuerdo al requerimiento #3, se especifica lo siguiente:
1. Crear
- Ingresar en los datos en el formulario
- Clic en Crear
2. Consultar
- Ingresar un id (número inicial es 1)
- Clic en Consultar
- Los datos se visualizan en el formulario
3. Editar
- A partir del punto 2, proceder a modificar los datos necesarios
- Clic en Editar
4. Listar y Cálculo de litros y galones
- Cada vez que se cree un registro se irán listando automáticamente
- El cálculo de litros y galones considera la totalidad de Capacidad de Carga de todos vehículos ingresados

