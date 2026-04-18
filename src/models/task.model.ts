export interface Task {
    id: string
    titre: string
    description: string
    statut: boolean
    priorite: string
    dateCreation: string
    dateEcheance: string
    categorie: string
}

export enum Priority{
    HAUTE= "Haute",
    MOYEN= "Moyen",
    BASSE= "Basse"
}