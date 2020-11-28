import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'striphtml'
})

export class StripHtmlPipe implements PipeTransform {
    transform(value: string): any {
        value = value.split('&nbsp')[0]
        return value.replace(/<.*?>/g, ''); // replace tags
    }
}