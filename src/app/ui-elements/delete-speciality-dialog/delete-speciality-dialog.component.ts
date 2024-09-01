import { Component, Inject } from '@angular/core';
import {  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MatDialogActions, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Specialty } from '../../models/speciality';
import { NgIf } from '@angular/common';
import { SpecialtyService } from '../../Users/services/speciality.service';

@Component({
  selector: 'app-delete-speciality-dialog',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatDialogTitle,
    MatError,
    MatDialogActions,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    NgIf,
    MatIcon,
    MatDialogContent,
    MatSnackBarModule, // Import MatSnackBarModule here
  ],  templateUrl: './delete-speciality-dialog.component.html',
  styleUrls: ['./delete-speciality-dialog.component.scss']
})
export class DeleteSpecialityDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteSpecialityDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { specialtyId: string },
    private specialtyService: SpecialtyService,
    private snackBar: MatSnackBar  

  ) {}

  onCancel(): void {
    this.dialogRef.close(); 
  }


  ngOnInit(){
    console.log(this.data.specialtyId);
  }

  onDelete(): void {

   this.specialtyService.deleteSpecialty(this.data.specialtyId).subscribe(() => {
      console.log('Speciality deleted');
      this.snackBar.open('✔ Speciality Deleted successfully!', '', {
        duration: 1000,  
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['snack-bar-success']  
      });
      this.dialogRef.close();
   })
  }
}
