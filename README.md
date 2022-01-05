# Secciones completadas
- [x] Sección 1 (5/5) 
- [x] Sección 2 (4/4)
- [x] Sección 3 (20/20)
- [x] Sección 4 (23/23)
- [x] Sección 5 (17/17)
- [x] Sección 6 (4/4)
- [x] Sección 7 (20/20)
- [x] Sección 8 (25/25)
- [x] Sección 9 (11/11)
- [ ] Sección 10 (17/28)
- [ ] Sección 11 (0/12)
- [x] Sección 12 (11/11)
- [ ] Sección 13 (0/22)
- [ ] Sección 14 (0/15)
- [ ] Sección 15 (0/10)
- [ ] Sección 16 (0/20)
- [ ] Sección 17 (0/16)
- [ ] Sección 18 (0/16)
- [ ] Sección 19 (0/14)
- [ ] Sección 20 (0/9 )
- [ ] Sección 21 (0/24)
- [ ] Sección 22 (0/16)
- [ ] Sección 23 (0/14)
- [ ] Sección 24 (0/25)
- [ ] Sección 25 (0/19)
- [ ] Sección 26 (0/7)
- [ ] Sección 27 (0/23)
- [ ] Sección 28 (0/3 )

# Capturas

## 01-bases
  ![Screenshot_1](https://user-images.githubusercontent.com/55620393/147700095-840390b4-983e-4b78-b3b0-5906cb9d00cf.png)
  ![image](https://user-images.githubusercontent.com/55620393/147700142-ae9e5903-f6c6-44ee-ae65-4d456fcc08cb.png)

## 02-gifsApp
  ![image](https://user-images.githubusercontent.com/55620393/147700395-2609db94-a897-44bf-bdd4-ea9e82730979.png)
  ![image](https://user-images.githubusercontent.com/55620393/147700409-e60c85dd-df76-4ced-a21a-e9224729cec4.png)
  ![image](https://user-images.githubusercontent.com/55620393/147700416-47e6e26b-ce91-4cd6-9031-52229e51cd81.png)
  ![image](https://user-images.githubusercontent.com/55620393/147700426-0359ed04-6cd0-4ec1-93b5-32c56dbead8e.png)

## 03-paisesApp  
  ![image](https://user-images.githubusercontent.com/55620393/147749562-ccf72320-81ba-47f3-b8a7-9b92b8da360e.png)
  ![image](https://user-images.githubusercontent.com/55620393/147749583-0f5896f3-f78b-495c-ad9e-36e0b7ddc2b0.png)
  ![image](https://user-images.githubusercontent.com/55620393/147749594-b2fb97aa-005f-42ea-aee2-d215eff27f19.png)
  ![image](https://user-images.githubusercontent.com/55620393/147749637-725ea7e5-3986-4c90-8b35-ccb16d0e2fa3.png)
  ![image](https://user-images.githubusercontent.com/55620393/147765217-ca8dc266-d99f-4e98-818f-610c6dc57809.png)
  ![image](https://user-images.githubusercontent.com/55620393/147765231-c94700c3-eb67-47ea-8542-5596f286107b.png)
  ![image](https://user-images.githubusercontent.com/55620393/147765263-620f1ca5-527b-4866-8b15-272fa8462b3d.png)
  ![image](https://user-images.githubusercontent.com/55620393/147765318-4724683c-44d3-46f6-be36-4e5760f8931e.png)
  ![image](https://user-images.githubusercontent.com/55620393/147765331-1b2fe52f-f7ac-4c7b-9535-961ee949590d.png)
 
# Creación de la aplicación.
ng new bases

# Levantar la aplicación.
ng serve -o

# Crear componente por línea de comandos. Para no crear la clase con test se debe añadir --skipTests
ng g c listado


# Crear módulo.
ng g m dbz

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