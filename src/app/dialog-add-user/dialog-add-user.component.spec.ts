import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DialogAddUserComponent } from './dialog-add-user.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Firestore, FirestoreModule } from '@angular/fire/firestore';

describe('DialogAddUserComponent', () => {
  let component: DialogAddUserComponent;
  let fixture: ComponentFixture<DialogAddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule,DialogAddUserComponent,AngularFirestoreModule,
      ],
      providers: [FirestoreModule,Firestore,
        { provide: MatDialogRef, useValue: {} } 
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
