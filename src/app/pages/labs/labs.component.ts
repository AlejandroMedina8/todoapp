import { Component, signal } from '@angular/core';
//Directivas de control versiones anteriores
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-labs',
  imports: [ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css',
})
export class LabsComponent {
  welcome = 'Hola!';
  tasks = signal([
    'Instalar el Angular CLI',
    'Crear proyecto',
    'Crear componente',
    'Crear servicio',
  ]);
  name = signal('Alejo');
  age = 24;
  // private age = 24;
  disabled = true;
  img =
    'https://files.idyllic.app/files/static/2772338?width=640&optimizer=image';

  person = signal({
    name: 'Alejo',
    age: 24,
    avatar:
      'https://files.idyllic.app/files/static/2772338?width=640&optimizer=image',
  });

  colorCrtl = new FormControl();

  widthCrtl = new FormControl(50, {
    nonNullable: true,
  });

  nameCrtl = new FormControl('Alejo', {
    nonNullable: true,
    validators: [Validators.required, Validators.minLength(3)],
  });

  constructor() {
    this.colorCrtl.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  clickHandler() {
    alert('Hola');
  }

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }

  keydownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }

  keyupHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }

  changeAge(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update((prevState) => {
      return {
        ...prevState,
        age: parseInt(newValue, 10),
      };
    });
  }

  changeName(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update((prevState) => {
      return {
        ...prevState,
        name: newValue,
      };
    });
  }
}
