import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  images: any[] = [];
  selectedImage: any = null;

  constructor(private http: HttpClient , private router : Router) {}

  ngOnInit() {
    this.fetchImages();
  }

  // Fetch images from the Unsplash API
  fetchImages() {
    const apiUrl = 'https://picsum.photos/v2/list'; 
    // https://api.thecatapi.com/v1/images/search?limit=10 // Replace with your Unsplash API key
    this.http.get(apiUrl).subscribe((data: any) => {
      this.images = data;
    });
  }

  
  openModal(image: any) {
    this.selectedImage = image;
  
    const modalElement = document.getElementById('imageModal');
    const modal = new bootstrap.Modal(modalElement, {
      backdrop: false  // Disables the gray backdrop
    });
    modal.show();  // Show the modal
  }

  logout(){
    localStorage.removeItem('name');

    this.router.navigate(['/login']);
  }
  

}
