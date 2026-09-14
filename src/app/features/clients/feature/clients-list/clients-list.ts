import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-list',
  standalone: true,
  templateUrl: './clients-list.html',
  styleUrl: './clients-list.scss'
})
export class ClientsList implements OnInit {

  loading = false;
  error = '';

  ngOnInit(): void {
    // para el backenedddd
  }
}