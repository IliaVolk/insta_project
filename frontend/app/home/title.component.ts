import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-title',
    templateUrl: `title.component.html`,
})
export class TitleComponent {
    @Input()
    subtitle:string = "no";
    title = "Title";

}
