import { async, TestBed } from '@angular/core/testing';
import {IonicModule, NavController, ToastController} from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { AppModule } from '../../../src/app/app.module';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { RegisterPage } from './register';


describe('MyHome Component', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterPage],
      imports: [
        IonicModule.forRoot(RegisterPage)
      ],
      providers: [
        { provide: NavController,  useValue: {} as NavController },
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;
  });

  it('should create component', () => expect(RegisterPage).toBeDefined())

  /*it('should have pages', () => {
    expect(component.pages).not.toBeNull();
  });*/

});

