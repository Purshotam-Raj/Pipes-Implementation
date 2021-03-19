import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
  constructor(private sanitizer:DomSanitizer){}

  transform(value: string, city:string): any {
    if(city === 'Patna' || city === 'New Delhi'){
      return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color: yellow;">'+city+'</div>');
    }
    else{
      return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color: green;">'+city+'</div>');
  
    }
}

}
