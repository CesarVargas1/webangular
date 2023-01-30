import { Component } from '@angular/core';
import { Manipulation } from 'swiper';
import {ScriptjsService} from "../scriptjs.service";
@Component({
  selector: 'app-productoselectricos',
  templateUrl: './productoselectricos.component.html',
  styleUrls: ['./productoselectricos.component.css']
})
export class ProductoselectricosComponent {
  constructor ( private _scriptjs:ScriptjsService )
  {
    _scriptjs.cargajs(["../src/assets/js/"])
  }

   
}
