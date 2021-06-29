import { Injectable } from "@angular/core";

@Injectable()
export class DeviceDetectorService {
  userAgent: string;
  THRESHOLD = 1000;

  isDesktop(): boolean {
   if (window) {
      if (window.innerWidth > this.THRESHOLD) {
        return true;
      } else {
        return false;
      }
    }
  }
}
