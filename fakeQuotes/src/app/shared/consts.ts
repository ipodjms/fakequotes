import { environment } from 'src/environments/environment';

let quoteAPI: string;

if (environment.production) {
  quoteAPI = 'ws:0.0.0.0:8080/quotes';
} else {
  quoteAPI = 'ws:0.0.0.0:8080/quotes';
}

export const QUOTEAPI = quoteAPI;
