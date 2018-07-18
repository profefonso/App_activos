import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';

import { ListPage } from '../list/list';

/**
 * Generated class for the CreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {

  activo: any;
  myForm: FormGroup;
  data: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public restProvider: RestProvider, 
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController
  ) {
    this.myForm = this.createMyForm();
  }

  saveData(){
    console.log (this.myForm.value['nombre']);
    let data = {
        "nombre": this.myForm.value['nombre'],
        "descripcion": this.myForm.value['descripcion'],
        "tipo": this.myForm.value['tipo'],
        "serial": this.myForm.value['serial'],
        "numero_inventario": this.myForm.value['numero_inventario'],
        "peso": this.myForm.value['peso'],
        "alto": this.myForm.value['alto'],
        "ancho": this.myForm.value['ancho'],
        "largo": this.myForm.value['largo'],
        "valor_compra": this.myForm.value['valor_compra'],
        "fecha_compra": this.myForm.value['fecha_compra']+"T00:00:00.000+0000",
        "feha_baja": this.myForm.value['feha_baja']+"T00:00:00.000+0000",
        "estado": this.myForm.value['estado'],
        "color": this.myForm.value['color']
  };
    this.restProvider.addActivo(data)
    .then(data => {
      this.showAlert();
      console.log("Insertado - ok");
      console.log(data);
    });
  }
  
  public createMyForm(){
    return this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      tipo: ['', Validators.required],
      serial: ['', Validators.required],
      numero_inventario: ['', Validators.required],
      peso: ['', Validators.required],
      alto: ['', Validators.required],
      ancho: ['', Validators.required],
      largo: ['', Validators.required],
      valor_compra: ['', Validators.required],
      fecha_compra: ['', Validators.required],
      feha_baja: ['',Validators.required],
      estado: ['', Validators.required],
      color: ['', Validators.required],
      tipo_asignacion: [''],
      detalle: [''],
      ciudad: [''],
    });
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Exito!',
      subTitle: 'Activo Creado con exitosamente!',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.navCtrl.push(ListPage);
          console.log('Disagree clicked');
        }
      }]
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }

}
