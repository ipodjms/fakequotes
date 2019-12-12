import { environment } from 'src/environments/environment';

let quoteAPI: string;

if (environment.production) {
  quoteAPI = 'ws:0.0.0.0:8080';
} else {
  quoteAPI = 'ws:0.0.0.0:8080';
}

export const QUOTEAPI = quoteAPI;
