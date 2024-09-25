import { Component, OnInit } from '@angular/core';
import {CurrencyPipe, NgForOf} from "@angular/common";
import {MatButton} from "@angular/material/button";

interface Plan {
  nombre: string;
  descripcion: string;
  precio: number;
  periodo: string;
  caracteristicas: string[];
}

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgForOf,
    MatButton
  ],
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {
  planes: Plan[] = [
    {
      nombre: 'Orbital Access',
      descripcion: 'Plan Básico',
      precio: 3,
      periodo: 'Mensual',
      caracteristicas: ['Recomendaciones personalizadas',  'Descuento en videojuegos (no incluye en lanzamiento)', 'Análisis básico de datos de juegos', 'Soporte básico']
    },
    {
      nombre: 'Stellar Pass',
      descripcion: 'Plan premium para usuarios avanzados',
      precio: 9,
      periodo: 'Mensual',
      caracteristicas: ['Recomendaciones Personalizadas Avanzadas', 'Acceso Anticipados a videojuegos de los desarrolladores dentro de la plataforma',
        'Análisis detallado de juegos', 'Soporte especializado', 'Descuento en videojuegos en Lanzamiento',
      'Perfil de Gamer Reconocido (insignias, trofeos y más)']
    },
    {
      nombre: 'Galactic Core',
      descripcion: 'Plan Desarrollador Básico',
      precio: 15,
      periodo: 'Mensual',
      caracteristicas: ['Capacidad de públicación: 10 videojuegos', 'Herramientas básicas de promoción de videojuegos', 'Análisis simplificado de rendimiento', 'Soporte técnico Estándar',
      'Reparto de ingresos 90% / 10%']
    }
  ];

  seleccionado: Plan | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  seleccionarPlan(plan: Plan): void {
    this.seleccionado = plan;
    console.log(`Plan seleccionado: ${plan.nombre} (${plan.precio})`);
  }

  verMas(plan: Plan): void {
    console.log(`Ver más información sobre el plan ${plan.nombre}`);
  }
}
