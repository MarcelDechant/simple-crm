import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { User } from '../../models/user.class';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_NATIVE_DATE_FORMATS, MatNativeDateModule, NativeDateAdapter } from '@angular/material/core';
import { Firestore, collection, addDoc, doc, getDoc, setDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  imports: [
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatDialogModule,
    MatInputModule,
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,

  ],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss',
  providers: [
    { provide: DateAdapter, useClass: NativeDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS }
  ]
})
export class DialogEditUserComponent implements OnInit {
  firestore: Firestore = inject(Firestore);
  user!: User;
  loading = false;
  birthDate!: Date;
  userId!: string;
  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>) { }


  ngOnInit(): void {

  }


  async saveUser() {
    this.loading = true;
    try {
      
      console.log('Current User:', this.user);
  
      const usersCollection = collection(this.firestore, 'users');
      const userRef = doc(usersCollection, this.userId); 
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        await setDoc(userRef, { ...this.user }); 
        console.log('User successfully updated!');
      } else {
        console.error('Error: User with ID does not exist in the database.');
        
      }
  
      this.loading = false;
      this.dialogRef.close();
    } catch (error) {
      console.error('Error saving/updating user: ', error);
    }
  }

}
