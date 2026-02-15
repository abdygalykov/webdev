import {Component, input} from '@angular/core';

@Component({
    selector: 'app-user',
    standalone: true,
    template:`
    <p> Username: Dimash</p>
    <p>occupation: {{occupation()}}</p>
    `,
})
export class User{
    occupation = input<string>();
}