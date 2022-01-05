# Creación de la aplicación.
ng new bases

# Levantar la aplicación.
ng serve -o

# Crear componente por línea de comandos. Para no crear la clase con test se debe añadir --skipTests
ng g c listado


# Crear módulo.
ng g m dbz

# Crear servicio
ng g s gifs

# Ciclo de vida de un componente.
- Constructor
- On init : se utiliza para inicializar datos.

# @Input, @Output y servicios
- Con @Input es para enviar información del padre al hijo
  ·main-page.component.html:
    <app-personajes [personajes]="personajes"></app-personajes>. Le estamos diciendo que la variable personajes del hijo (el que tiene @Input) se rellena con la variable personajes (del padre)
- Con @Output es para enviar información del hijo al padre.
  .agregar.component.ts: 
    · @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
    · Cuando se ejecuta el método asociado al form se llama a this.onNuevoPersonaje.emit(this.nuevo);
    · En el padre (main-page.component.html) se espera el evento <app-agregar (onNuevoPersonaje)="agregarNuevoPersonaje($event)" ></app-agregar> para que cuando se haga el emit, se llame a onNuevoPersonaje y éste llama a agregarNuevoPersonaje, que es un método
    de la clase main-page.component.ts. El parámetro que recibe es un objeto de tipo personaje
- Con servicios: Aquí la comunicación es a nivel de hermanos, no se pasa por el padre para nada.
  .agregar.component.ts:
    this.dbzService.agregarPersonaje(this.nuevo);
  .personajes.component.ts:
     get personajes(){
    return this.dbzService.personajes;
  }

# Explicación ficheros.
Los json son ficheros de configuración
- tslint.json: reglas que nos obligan a programar de cierta manera. ts viene de typescript.
- tsconfig.json: fichero de configuración de typescript para compilar a typescript (no se suele tocar)
- tsconfig.spec.json: 
- tsconfig.app.json:
- README.md: texto normal
- package.json: no se suelen hacer modificaciones manualmente. Aquí se indican las dependendias.
- package-lock.json: no es importante.
- karma.conf.js: para pruebas unitarias basadas en karma.
- angular.json: configuraciones importantes como los assets (recursos estáticos), estilos.
- gitignore: para ignorar ficheros de git.
- editorconfig: para identar o para establecer la configuración del IDE.
- e2e_ testing.

# Generar compilado para desplegar.
ng build --prod

# Giphy
giphy.com
  
  ![image](https://user-images.githubusercontent.com/55620393/147700395-2609db94-a897-44bf-bdd4-ea9e82730979.png)
  
  ![image](https://user-images.githubusercontent.com/55620393/147700409-e60c85dd-df76-4ced-a21a-e9224729cec4.png)
  
  ![image](https://user-images.githubusercontent.com/55620393/147700416-47e6e26b-ce91-4cd6-9031-52229e51cd81.png)
  
  ![image](https://user-images.githubusercontent.com/55620393/147700426-0359ed04-6cd0-4ec1-93b5-32c56dbead8e.png)



