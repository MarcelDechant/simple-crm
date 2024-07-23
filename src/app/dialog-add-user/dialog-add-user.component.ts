import { Component, inject, OnInit } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { User } from '../../models/user.class';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    CommonModule,
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent implements OnInit {

  user = new User();
  birthDate!: Date;
  firestore: Firestore = inject(Firestore);
  loading = false;
  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) { }

  ngOnInit(): void {

  }

  async saveUser() {
    this.loading = true;
    try {
      this.user.birthDate = this.birthDate.getTime();
      console.log('current User ', this.user);

      const usersCollection = collection(this.firestore, 'users');
      const result = await addDoc(usersCollection, { ...this.user });
      this.loading = false;
      console.log('User successfully added!', result);
      this.dialogRef.close();
    } catch (error) {
      console.error('Error adding user: ', error);
    }
  }
}
