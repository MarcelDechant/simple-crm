import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { User } from '../../models/user.class';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { Firestore, collection, addDoc, doc, getDoc, setDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-address',
  standalone: true,
  imports: [MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatDialogModule,
    MatInputModule,
    CommonModule],
  templateUrl: './dialog-edit-address.component.html',
  styleUrl: './dialog-edit-address.component.scss'
})
export class DialogEditAddressComponent implements OnInit {
  firestore: Firestore = inject(Firestore);
  userId!: string;
  user!: User;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>,) { }


  ngOnInit(): void {

  }


  async saveUser() {
    this.loading = true;
    try {
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

