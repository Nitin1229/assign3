import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators} from '@angular/forms';
import { EntryService } from './entry.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count:number=1;

  get name(){
    return this.registrationForm.get('name');
  }

  get familyMembers() {
    return this.registrationForm.get('familyMembers') as FormArray;
  }

  addFamilyMembers(){
    this.count++;
    this.familyMembers.push(this.fb.group({
      relation: ['', Validators.required],
      name: ['', Validators.required]
    }));
  }

  deleteFamilyMembers() {
    this.familyMembers.removeAt(this.familyMembers.length - 1);
  }

  constructor(private fb:FormBuilder,private entry: EntryService){}
  
  registrationForm =this.fb.group({
    name: ['',Validators.required],
    email: ['',[Validators.required,Validators.email]],
    password: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
    mob: ['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    city: ['',Validators.required],
    familyMembers: this.fb.array([this.fb.group({
      relation: ['', Validators.required],
      name: ['', Validators.required]
    })])
  })
  onClick()
  {
    if(this.registrationForm.valid)
    {
    this.entry.details.name= this.registrationForm.value.name;
    this.entry.details.email=this.registrationForm.value.email;
    this.entry.details.password=this.registrationForm.value.password;
    this.entry.details.mob=this.registrationForm.value.mob;
    this.entry.details.city=this.registrationForm.value.city;
    for(let i=0; i<this.count;i++){
      this.entry.details.familyMembers.push(this.registrationForm.value.familyMembers.at(i));
      }
    console.log(this.entry.details);
    }
    else
    {
      alert("error");
    }
  }
}
