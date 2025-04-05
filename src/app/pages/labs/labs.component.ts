import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-labs',
  imports: [],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css',
})
export class LabsComponent {
  welcome = 'Hola!';
  tasks = [
    'Instalar el Angular CLI',
    'Crear proyecto',
    'Crear componente',
    'Crear servicio',
  ];
  name = signal('Alejo');
  age = 24;
  // private age = 24;
  disabled = true;
  img =
    'https://files.idyllic.app/files/static/2772338?width=640&optimizer=image';

  person = {
    name: 'Alejo',
    age: 24,
    avatar:
      'https://files.idyllic.app/files/static/2772338?width=640&optimizer=image',
  };

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
}
