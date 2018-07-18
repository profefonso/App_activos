import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the DetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {

  id_activo: String;
  activo: any;
  myForm: FormGroup;

  nombre: String;
  descripcion: String;
  tipo: String;
  serial: String;
  numero_inventario: String;
  peso: String;
  alto: String;
  ancho: String;
  largo: String;
  valor_compra: String;
  fecha_compra: String;
  feha_baja: String;
  estado: String;
  color: String;
  asignacion: any;
  tipo_asignacion: String;
  detalle: String;
  ciudad: String;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, public formBuilder: FormBuilder) {
    this.id_activo = navParams.get('param');
    this.myForm = this.createMyForm();
    this.find();
  }

  find() {
    this.restProvider.getActivoById(this.id_activo)
    .subscribe(
      (data) => { // Success
        this.activo = data;
        console.log(this.activo);
        this.nombre = this.activo['nombre'];
        this.descripcion = this.activo['descripcion'];
        this.tipo = this.activo['tipo'];
        this.serial = this.activo['serial'];
        this.numero_inventario = this.activo['numero_inventario'];
        this.peso = this.activo['peso'];
        this.alto = this.activo['alto'];
        this.ancho = this.activo['ancho'];
        this.largo = this.activo['largo'];
        this.valor_compra = this.activo['valor_compra'];
        this.fecha_compra = this.activo['fecha_compra'];
        this.feha_baja = this.activo['feha_baja'];
        this.estado = this.activo['estado'];
        this.color = this.activo['color'];
        
        if(this.activo['asignacion']){
          this.asignacion = this.activo['asignacion'];
          this.tipo_asignacion = this.asignacion['tipo_asignacion'];
          this.detalle = this.asignacion['detalle'];
          this.ciudad = this.asignacion['ciudad'];
        }else{
          this.asignacion = "";
          this.tipo_asignacion = "";
          this.detalle = "";
          this.ciudad = "";
        }
        

      },
      (error) =>{
        console.error(error);
      }
    )
    console.log('ionViewDidLoad DetallePage');
  }

  saveData(){
    console.log(this.myForm.value);
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
      feha_baja: [''],
      estado: ['', Validators.required],
      color: ['', Validators.required],
      tipo_asignacion: [''],
      detalle: [''],
      ciudad: [''],
    });
  }

  goBack():void{
    this.navCtrl.pop();
  }

}
