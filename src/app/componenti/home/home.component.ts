import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NewsService } from 'src/app/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  items = [
    { id: 1, imageUrl: 'path-to-image-1.jpg', title: 'Title 1', description: 'Description 1' },
    { id: 2, imageUrl: 'path-to-image-2.jpg', title: 'Title 2', description: 'Description 2' },
    // Add more items as needed
  ];
  @ViewChild('carousel') carousel!: ElementRef;
  currentIndex = 0;
  interval: any;
  @ViewChild('cardContainer') cardContainer!: ElementRef; // Riferimento al container delle card
  cards = [
    { imageUrl: 'path-to-image1.jpg', alt: 'Image 1', title: 'Titolo 1', description: 'Descrizione breve 1' },
    { imageUrl: 'path-to-image2.jpg', alt: 'Image 2', title: 'Titolo 2', description: 'Descrizione breve 2' },
    { imageUrl: 'path-to-image1.jpg', alt: 'Image 1', title: 'Titolo 1', description: 'Descrizione breve 1' },
    { imageUrl: 'path-to-image2.jpg', alt: 'Image 2', title: 'Titolo 2', description: 'Descrizione breve 2' },
    { imageUrl: 'path-to-image1.jpg', alt: 'Image 1', title: 'Titolo 1', description: 'Descrizione breve 1' },
    { imageUrl: 'path-to-image2.jpg', alt: 'Image 2', title: 'Titolo 2', description: 'Descrizione breve 2' },
    // Aggiungi altre card...
    
  ];

  @ViewChild('cardContainer2') cardContainer2!: ElementRef; // Riferimento al container delle card
  cards2 = [
    { imageUrl: 'path-to-image1.jpg', alt: 'Image 1', title: 'Titolo 1', description: 'Descrizione breve 1' },
    { imageUrl: 'path-to-image2.jpg', alt: 'Image 2', title: 'Titolo 2', description: 'Descrizione breve 2' },
    { imageUrl: 'path-to-image1.jpg', alt: 'Image 1', title: 'Titolo 1', description: 'Descrizione breve 1' },
    { imageUrl: 'path-to-image2.jpg', alt: 'Image 4', title: 'Titolo 2', description: 'Descrizione breve 2' },
    { imageUrl: 'path-to-image1.jpg', alt: 'Image 5', title: 'Titolo 1', description: 'Descrizione breve 1' },
    { imageUrl: 'path-to-image2.jpg', alt: 'Image 6', title: 'Titolo 2', description: 'Descrizione breve 2' },
    // Aggiungi altre card...
    
  ];
  news!: any[];

  ngOnInit() {
    this.getNews();
    this.startInterval();
  }


  constructor(private newsService: NewsService) { }
  
  getNews(): void {
    this.newsService.getNews()
      .subscribe(data => {
        this.news = data.articles; // Supponendo che i dati dell'API siano strutturati in modo simile a un array di articoli
      });
  }

  startInterval() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Cambia slide ogni secondo
  }

  nextSlide() {
    const carousel = this.carousel.nativeElement;
    const slides = carousel.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    slides[this.currentIndex].classList.remove('active');
    this.currentIndex = (this.currentIndex + 1) % totalSlides;
    slides[this.currentIndex].classList.add('active');
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
  

  scrollCards(direction: 'left' | 'right'): void {
    const container = this.cardContainer.nativeElement;
    const scrollStep = 200; // Regola la quantità di scorrimento

    if (direction === 'left') {
      container.scrollLeft -= scrollStep; // Scorri a sinistra
    } else {
      container.scrollLeft += scrollStep; // Scorri a destra
    }
  }

  scrollCards2(direction: 'left' | 'right'): void {
    const container2 = this.cardContainer2.nativeElement;
    const scrollStep2 = 200; // Regola la quantità di scorrimento

    if (direction === 'left') {
      container2.scrollLeft -= scrollStep2; // Scorri a sinistra
    } else {
      container2.scrollLeft += scrollStep2; // Scorri a destra
    }
  }


  

}
