import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

@Pipe({
  name: 'formatter'
})
export class FormatterPipe implements PipeTransform {
  constructor(private sanitizer : DomSanitizer){}

  transform(value: number, code: string, num:number): any {
    if(code === 'India')
    {
      return this.sanitizer.bypassSecurityTrustHtml('<div> (+91) '+num+'</div>' )
    }
    else{
      return this.sanitizer.bypassSecurityTrustHtml('<div> +'+code+' '+num+'</div>' )
    }
  }

}
