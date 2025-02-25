import 'zone.js';
import {createApplication} from "@angular/platform-browser";
import {createCustomElement} from "@angular/elements";
import {AppComponent} from "./app.component";

(async () => {
  const app = await createApplication();
  const angularMfeElement = createCustomElement(AppComponent, {injector: app.injector});
  customElements.define("angular-mfe", angularMfeElement);
})();
