import { NgModule } from "@angular/core";
import { P6ButtonComponent } from './components/p6-button/p6-button.component';
import { P6InputComponent } from './components/p6-input/p6-input.component';

@NgModule({
    declarations: [P6ButtonComponent, P6InputComponent],
    imports: [],
    exports: [P6ButtonComponent, P6InputComponent],
    providers: []
})

export class SharedModule { }