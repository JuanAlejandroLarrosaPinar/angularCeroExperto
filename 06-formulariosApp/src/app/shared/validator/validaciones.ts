import { FormControl } from "@angular/forms";

//TODO: Temporal
export const nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = '^[a-z0-9._%+.]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

export const noPuedeSerStrider = (control: FormControl) => {
    const valor = control.value?.trim().toLowerCase();
    console.log(valor);
    if (valor === 'strider') {
        return {
            noStrider: false
        }
    }
    return null;
}