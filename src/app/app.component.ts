import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "../../Club-futbol/src/app/components/home/home.component";
import { EquiposComponent } from "../../Club-futbol/src/app/components/equipos/equipos.component";
import { LoginComponent } from "../../Club-futbol/src/app/components/login/login.component";
import { LugarJogoComponent } from "../../Club-futbol/src/app/components/lugar-jogo/lugar-jogo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, EquiposComponent, LoginComponent, LugarJogoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Club-futbol';
  
  
}

