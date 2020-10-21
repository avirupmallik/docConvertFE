import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FileService } from '../file.service';
import { files } from './FileDetails';
import { saveAs } from 'file-saver';
import {basename} from 'path';
@Component({
  selector: 'app-doc-conversion',
  templateUrl: './doc-conversion.component.html',
  styleUrls: ['./doc-conversion.component.css']
})
export class DocConversionComponent implements OnInit {
  title = 'PDF-Converter';
  private body
  private fileName;
  public formGroup = this.fb.group({
    file: [null, Validators.required]
  });
  constructor(private http: HttpClient,private fb: FormBuilder, private fileService: FileService) { }
   
  //  public onFileChange(event) {
  //   const reader = new FileReader();
 
  //   if (event.target.files && event.target.files.length) {
  //     this.fileName = event.target.files[0].name;
  //     const [file] = event.target.files;
  //     reader.readAsDataURL(file);
     
  //     reader.onload = () => {
  //       this.formGroup.patchValue({
  //         file: reader.result
  //       });
  //     };
  //   }
  // }
 
  public onSubmit(): void {
    
    console.log(this.formGroup.value)
    this.body = new files(this.formGroup.value.fileName,'jhgg');
    this.http.post("http://localhost:8080/attachment/",this.body,{responseType: 'arraybuffer'}).subscribe(data=>{
      console.log("within subscribe")
      console.log(data)
       let blob = new Blob([data],  {type: "application/pdf"});
       let filepath = this.formGroup.value.fileName;

// Use the regular expression to replace the non-matching content with a blank space
let filenameWithExtension = filepath.replace(/^.*[\\\/]/, '');
let str = filenameWithExtension;
  let res = str.split(".");
      saveAs(blob, res[0]+".pdf");
    },
    err=>{
      console.log(err)
    });
  }

  ngOnInit(): void {
    this.formGroup=new FormGroup({
      fileName:new FormControl()
    })
    
  }

}
