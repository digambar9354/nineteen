import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpHandler, HttpHandlerFn, HttpRequest, provideHttpClient, withInterceptors } from '@angular/common/http'

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export function logingIntercepter(request: HttpRequest<unknown>, next: HttpHandlerFn) {
    const requ = request.clone();
    return next(requ);
}

export const appConfig: ApplicationConfig = {
    providers: [
        provideExperimentalZonelessChangeDetection(),
        provideRouter(routes),
        provideAnimationsAsync(),
        provideHttpClient(withInterceptors([
            logingIntercepter
        ])),

    ]
};
