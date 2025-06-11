import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

declare var bootstrap: any;

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.css'
})
export class ActivitiesComponent {
  activity1Images = [
    'activity1-1.jpg',
    'activity1-2.jpg',
    'activity1-3.jpg'
  ];

  activity2Images = [
    'activity2-1.jpg',
    'activity2-2.jpg',
    'activity2-3.jpg'
  ];

  activity1Index = 0;
  activity2Index = 0;

  getLoopedImages(images: string[], index: number): string[] {
    const len = images.length;
    return [
      images[(index - 1 + len) % len],
      images[index % len],
      images[(index + 1) % len]
    ];
  }

  nextActivity(activity: number) {
    if (activity === 1) {
      this.activity1Index = (this.activity1Index + 1) % this.activity1Images.length;
    } else {
      this.activity2Index = (this.activity2Index + 1) % this.activity2Images.length;
    }
  }

  prevActivity(activity: number) {
    if (activity === 1) {
      this.activity1Index = (this.activity1Index - 1 + this.activity1Images.length) % this.activity1Images.length;
    } else {
      this.activity2Index = (this.activity2Index - 1 + this.activity2Images.length) % this.activity2Images.length;
    }
  }
}