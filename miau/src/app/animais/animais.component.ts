import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

/**
 * @title Basic Inputs
 */
@Component({
  selector: 'app-animais-component',
  styleUrl: 'animais.component.scss',
  templateUrl: 'animais.component.html',
  imports: [
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule
  ],
})
export class InputOverviewExample {}
