# Secciones completadas
- [x] Sección 1 (5/5) - PRIORITARIO - Introducción al curso
- [x] Sección 2 (4/4) - PRIORITARIO - Conceptos básicos angular y typescript
- [x] Sección 3 (20/20) - PRIORITARIO - Base de typescript
- [x] Sección 4 (23/23) - PRIORITARIO - Introducción a angular
- [x] Sección 5 (17/17) - PRIORITARIO - Expendiendo bases
- [x] Sección 6 (4/4) - PRIORITARIO - Despliegues rápidos a producción
- [x] Sección 7 (20/20) - PRIORITARIO - Gifs App - App para buscar imágenes.
- [x] Sección 8 (25/25) - PRIORITARIO - Paises app. 
- [x] Sección 9 (11/11) - PRIORITARIO - Continuación paises App - sugerencias, debounce y demás.
- [ ] Sección 10 (17/28) - NO PRIORITARIO - Pipes propios de ángular.
- [ ] Sección 11 (0/12) - NO PRIORITARIO - Pipes personalizados.
- [x] Sección 12 (11/11) - PRIORITARIO - Heroes app - rutas hijas, lazyload.
- [x] Sección 13 (22/22) - PRIORITARIO - Heroes app - Angular material & angular flex-layout
- [x] Sección 14 (15/15) - PRIORITARIO - Heroes app - CRUD (Continuación con angular material).
- [x] Sección 15 (10/10) - PRIORITARIO - Protección de rutas
- [x] Sección 16 (20/20) - PRIORITARIO - Formularios - Template y lazyload
- [x] Sección 17 (16/16) - PRIORITARIO - Formularios reactivos
- [x] Sección 18 (16/16) - PRIORITARIO - Formularios: Validaciones manuales y asíncronas.
- [x] Sección 19 (9/14) - PRIORITARIO - Formularios reactivos: Múltiples selectores anidados. La marco como completada porque visto dos selectores vistos todos.
- [ ] Sección 20 (0/9 ) - PRIORITARIO - LifeCycle Hooks.
- [ ] Sección 21 (0/24) - NO PRIORITARIO  - Mapas en ángular
- [ ] Sección 22 (0/16) - NO PRIORITARIO - Gráficas en angular
- [ ] Sección 23 (0/14) - PRIORITARIO - Directivas personalizadas de angular
- [x] Sección 24 (25/25) - PRIORITARIO - Auth backend - MEAN
- [x] Sección 25 (19/19) - PRIORITARIO - AuthApp - MEAN
- [x] Sección 26 (7/7) - PRIORITARIO - Desplegar backend y frontend a producción
- [ ] Sección 27 (0/23) - NO PRIORITARIO - Bonus mapas - Marcadores y direcciones de mapbox
- [ ] Sección 28 (0/3 ) - NO PRIORITARIO - Fin del curso.

# Notas y comandos
## Creación de la aplicación.
ng new bases

## Levantar la aplicación.
ng serve -o

## Crear componente por línea de comandos. Para no crear la clase con test se debe añadir --skipTests
ng g c listado --skipTests -is

## Crear módulo.
ng g m dbz

## Crear servicio
ng g s nombreServicio --skipTests

## Crear guard
ng g guard auth/guards/nombreAuth

## Ciclo de vida de un componente.
- Constructor
- On init : se utiliza para inicializar datos.

## @Input, @Output y servicios
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

## Explicación ficheros.
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

## Generar compilado para desplegar.
ng build --prod

## Levantar servidor node para fichero json (teniendo en cuenta que el fichero está en 05-heroesServer):
 json-server --watch db.json

## Crear proyecto de node 
npm init
