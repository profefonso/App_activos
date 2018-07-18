import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DetallePage } from '../detalle/detalle';

import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  
  activos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {

  }

  ionViewDidLoad() {
    this.restProvider.getActivos()
    .then(data => {
      this.activos = data;
      console.log(this.activos);
    });
  }

  clik_detalle(id){
    console.log("DETALLE: "+id);
    this.navCtrl.push(DetallePage, {param: id});
  }


}
