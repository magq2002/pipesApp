import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {

    transform(value: boolean, ...arg:any[] ): 'vuela' | 'no vuela' {
        return value ? 'vuela' : 'no vuela'
    }

}