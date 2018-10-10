import { Pipe, PipeTransform } from '@angular/core';
import { StateManagerService } from './state-manager.service';

@Pipe({
  name: 'getNameFromUid'
})
export class GetNameFromUidPipe implements PipeTransform {
  constructor(private stateManager: StateManagerService) {}

  transform(value: any, args?: any): any {

    return this.stateManager.getNameFromUid(value) || 'Anonimous';
  }

}
