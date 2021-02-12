import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public form!: FormGroup;

  ngOnInit(): void {
    this.createForm();
  }

  public onSubmit(): void {
    console.log(this.form);
  }

  private createForm(): void {
    this.form = new FormGroup({
      searchField: new FormControl('', Validators.required),
    });
  }
}
