import { Pipe, PipeTransform } from '@angular/core';
import { IAlgorithmOutput } from '../../model/Algorithm/IAlgorithmOutput';

@Pipe({
    name: 'convertToText'
})
export class ConvertToTextPipe implements PipeTransform {

    // by convention - for strings, the place in value[0][0] is the result text
    transform(value: IAlgorithmOutput): string {
        if (value === null || typeof value === 'undefined') {
            return '';
        }

        const str = value.Output[0][0];
        return str.toString();
    }
}
