import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

declare var bootstrap: any;

@Component({
  selector: 'app-myths',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './myths.component.html',
  styleUrl: './myths.component.css'
})
export class MythsComponent implements OnInit {
  private modal: any;
  selectedMyth: string = '';

  constructor() { }

  ngOnInit() {
    this.modal = new bootstrap.Modal(document.getElementById('mythModal'));
  }

  openMythModal(mythType: string) {
    this.selectedMyth = mythType;
    this.modal.show();
  }
}
