import { Component, output } from "@angular/core";

@Component({
    selector: 'app-child',
    standalone: true,
    template:`
    <button class="btn" (click)="addItem()"> add Item</button>
    `
})

export class Child{
    addItemEvent = output<string>();

    addItem(){
        this.addItemEvent.emit('🐢');
    }
}