import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeAnimations } from './animations/route.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations],
})
export class AppComponent {
  title = 'route-animation-test';

  getAnimationState(routerOutlet: RouterOutlet): string {
    const animationState: string | null = routerOutlet?.activatedRouteData?.['animation'];
    console.log(animationState);
    return animationState ? animationState : '';
  }
}
