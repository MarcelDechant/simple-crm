import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DialogEditAddressComponent } from './dialog-edit-address.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Firestore, FirestoreModule } from '@angular/fire/firestore';

describe('DialogEditAddressComponent', () => {
  let component: DialogEditAddressComponent;
  let fixture: ComponentFixture<DialogEditAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule,DialogEditAddressComponent,AngularFirestoreModule,
      ],
      providers: [FirestoreModule,Firestore,
        { provide: MatDialogRef, useValue: {} } 
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogEditAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
