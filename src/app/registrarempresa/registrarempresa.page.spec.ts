import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarempresaPage } from './registrarempresa.page';

describe('RegistrarempresaPage', () => {
  let component: RegistrarempresaPage;
  let fixture: ComponentFixture<RegistrarempresaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistrarempresaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
