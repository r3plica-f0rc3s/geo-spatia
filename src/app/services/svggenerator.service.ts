import { Injectable } from '@angular/core';
import { generateFromString } from 'generate-avatar';

@Injectable({
  providedIn: 'root',
})
export class SVGGeneratorService {
  constructor() {}

  generateAvatar(str: string): string {
    return generateFromString(str);
  }
}
