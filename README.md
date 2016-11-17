### Workshop 2016 AngularJS


#### Requerimientos previos


- Computadora con Linux o Windows
- Git (si estás en Windows usá la consola de Git bash) 
- Node.js 6.0 o superior
- npm 3.0 o superior


#### Instrucciones de uso


- 1 Instalar las dependencias


```
   npm install
```


- 2 Iniciar el server de dev


```
    npm start
```


#### Descripción del proyecto
Con el desarrollo de esta app vas a aprender cómo comunicarte con una api y mostrar esos resultados en diferentes rutas y con componentes acordes a cada tipo de información


#### Esquema de carpetas


```
.
├── /src/
│   └── /components/          
│        └── /app/                
│            │── /services/
│            │   └── api.js         # Llamadas a los correspondientes endpoints para conseguir data
│            │── /views             # HTML de los templates de cada componente y pagina
│            │── index.js           
│            └── routes.js          # Rutas para cada pagina y llamadas a su correspondiente endpoint 
└── package.json        
```


##### API: Como llamar a endpoints


Usamos la clase ApiService que contiene:


- url: path del server a usar
- Métodos que retornan respuestas de cada endpoint


Cada llamada usa una estructura similar a esta:
 
```
    getSomething(parameter1) {
        return this.http.get(`${this.url}/endpoint/${parameter1}`)
                    .then(response => response.data);
    } 
   
```
##### Router


Estructura de rutas


```
    .when('/path/:pathParameter/', {
                templateUrl: '/components/app/views/template.html',
                resolve: {
                  characters: ($route, ApiService) =>
                      ApiService.getSomething($route.current.params.pathParameter)
                },
            })
```

Luego en nuestro template podremos acceder a la data conseguida del server de la siguiente forma:


(Asumiendo que characters es un array con la siguiente estructura: 
```
[{title: 'Mike'}, {title: 'Eleven'}, {title: 'Dustin'}, {title: 'Lucas'}, {title: 'Will'}])
```


```
    <h1>Stranger Things Characters:</h1>
    <ul> 
        <li ng-repeat="item in $resolve.characters">
            {{item.title}}
        </li>
    </ul>
```


### Have fun!
