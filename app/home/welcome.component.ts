import { Component } from '@angular/core';

@Component({
    moduleId:module.id,
    selector:'welcome-page',
    templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
}
