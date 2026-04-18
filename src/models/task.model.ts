export interface Task {
    id: string
    titre: string
    description: string
    statut: boolean
    Priorite: Priority
    dateCréation: Date
    dateEchéance: Date
    categorie: string
}

export enum Priority{
    HAUTE= "Haute",
    MOYEN= "Moyen",
    BASSE= "Basse"
}