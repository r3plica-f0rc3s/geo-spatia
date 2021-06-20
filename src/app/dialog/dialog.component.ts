import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  constructor(private snackBar: MatSnackBar) {}
  ngOnInit(): void {}
  openSnackBar() {
    this.snackBar.open('Address copied', 'Dismiss', {
        duration: 3000
    });
  }
}
