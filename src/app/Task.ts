export interface Task {
    id?: number // cuando cramos podría no venir el id
    text: string;
    day: string;
    reminder: boolean;
}