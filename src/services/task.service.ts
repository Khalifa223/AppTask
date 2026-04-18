import { Injectable } from '@angular/core';
import { Task } from 'src/models/task.model'

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Task[] = [
    {
      id: "1",
      titre: "Créer maquette UI",
      description: "Concevoir la maquette de l'application",
      statut: true,
      priorite: "HIGH",
      dateCreation: "2026-04-01",
      dateEcheance: "2026-04-05",
      categorie: "Design"
    },
    {
      id: "2",
      titre: "Configurer backend",
      description: "Initialiser le projet Spring Boot",
      statut: false,
      priorite: "HIGH",
      dateCreation: "2026-04-02",
      dateEcheance: "2026-04-10",
      categorie: "Backend"
    },
    {
      id: "3",
      titre: "Créer API tâches",
      description: "Développer CRUD pour les tâches",
      statut: false,
      priorite: "MEDIUM",
      dateCreation: "2026-04-03",
      dateEcheance: "2026-04-12",
      categorie: "Backend"
    },
    {
      id: "4",
      titre: "Intégrer Angular",
      description: "Connecter frontend au backend",
      statut: false,
      priorite: "HIGH",
      dateCreation: "2026-04-04",
      dateEcheance: "2026-04-15",
      categorie: "Frontend"
    },
    {
      id: "5",
      titre: "Créer formulaire tâche",
      description: "Formulaire d'ajout de tâche",
      statut: true,
      priorite: "MEDIUM",
      dateCreation: "2026-04-05",
      dateEcheance: "2026-04-08",
      categorie: "Frontend"
    },
    {
      id: "6",
      titre: "Gestion des rôles",
      description: "Ajouter admin et user",
      statut: false,
      priorite: "HIGH",
      dateCreation: "2026-04-06",
      dateEcheance: "2026-04-18",
      categorie: "Sécurité"
    },
    {
      id: "7",
      titre: "Tester API",
      description: "Tester endpoints avec Postman",
      statut: false,
      priorite: "LOW",
      dateCreation: "2026-04-07",
      dateEcheance: "2026-04-20",
      categorie: "Test"
    },
    {
      id: "8",
      titre: "Optimiser UI",
      description: "Améliorer expérience utilisateur",
      statut: false,
      priorite: "MEDIUM",
      dateCreation: "2026-04-08",
      dateEcheance: "2026-04-22",
      categorie: "Design"
    },
    {
      id: "9",
      titre: "Déploiement",
      description: "Mettre en ligne l'application",
      statut: false,
      priorite: "HIGH",
      dateCreation: "2026-04-09",
      dateEcheance: "2026-04-25",
      categorie: "DevOps"
    },
    {
      id: "10",
      titre: "Documentation",
      description: "Rédiger la documentation du projet",
      statut: false,
      priorite: "LOW",
      dateCreation: "2026-04-10",
      dateEcheance: "2026-04-30",
      categorie: "Documentation"
    }
  ];

  getTasks() {
    return this.tasks;
  }

  getTaskById(id: string): Task | undefined {
    return this.tasks.find(t => t.id === id);
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }

}
