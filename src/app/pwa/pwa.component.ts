import {Component} from '@angular/core';
import {PwaService} from './pwa.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'rerun-pwa',
  templateUrl: './pwa.component.html'
})
export class PwaComponent {

  constructor(public pwaService: PwaService, private snackbar: MatSnackBar) {
    pwaService.updateAvailable.subscribe(() => {
      this.askUserToUpdate().subscribe(() => {
        this.pwaService.updateApp();
      });
    });
  }

  private askUserToUpdate() {
    const snack = this.snackbar.open('Update Available', 'Reload');
    return snack.onAction();
  }

}
