import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Firestore, FirestoreModule } from '@angular/fire/firestore';
import { UserComponent } from './user.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule,UserComponent,AngularFirestoreModule,
      ],
      providers: [FirestoreModule,Firestore,
        { provide: MatDialogRef, useValue: {} } 
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
