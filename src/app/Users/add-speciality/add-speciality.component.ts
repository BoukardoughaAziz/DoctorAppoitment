import { SpecialtyService } from '../services/speciality.service';
import { Specialty } from '../../models/speciality';
import { NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { PeriodicElement } from '../../tables/t-recent-orders/t-recent-orders.component';
import { RouterLink } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EditSpecialityDialogComponent } from '../../ui-elements/edit-speciality-dialog/edit-speciality-dialog.component';
import { DeleteSpecialityDialogComponent } from '../../ui-elements/delete-speciality-dialog/delete-speciality-dialog.component';
import { MatIcon } from '@angular/material/icon';
import { AddSpecialityDialogComponent } from '../../ui-elements/add-speciality-dialog/add-speciality-dialog.component';

@Component({
  selector: 'app-add-speciality',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, MatPaginatorModule, MatTableModule, NgIf,MatDialogModule,MatIcon],
  templateUrl: './add-speciality.component.html',
  styleUrl: './add-speciality.component.scss'
})
export class AddSpecialityComponent {
  Specialities : Specialty[]= [];
  displayedColumns: string[] = ['#','Speciality Name', 'Total Practitioners', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
  }

  action: {
    edit: 'ri-edit-line',
    delete : 'ri-delete-bin-line'
}


  constructor(private SpecialityServices : SpecialtyService ,public dialog: MatDialog ){}

  ngOnInit(): void {
    this.SpecialityServices.getAllSpecialties().subscribe((data)=>{
      this.Specialities = data;
      console.log(this.Specialities)
      console.log(data)
    })
  }

  openEditDialog(id: string): void {
    const dialogRef = this.dialog.open(EditSpecialityDialogComponent, {
      width: '500px',
      height: '400px',
      data: { specialtyId: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The edit dialog was closed');
    });
  }

  openDeleteDialog(id: string): void {
    const dialogRef = this.dialog.open(DeleteSpecialityDialogComponent, {
      width: '500px',
      height: '200px',      
      data: { specialtyId: id }
    });
  }
    openAddDialog(){
      const dialogRef = this.dialog.open(AddSpecialityDialogComponent, {
        width: '500px',
        height: '400px',
        
      });
  }
  

}




  






