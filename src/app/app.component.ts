import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AiconnectService } from './aiconnect.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'imagegan';
    searchTerm = "";
  images: any[] = [];
  
   
    constructor(private serv: AiconnectService) {}

    getImages(){
      this.serv.fetchImages(this.searchTerm).subscribe((res) => {
        next: this.images = res.results;
        error:() => {
          alert('Error fetching images:');
        }
      });
    }
  
}
