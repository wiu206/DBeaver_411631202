import { type Seat } from "./Seat";
import { type Student } from "./Student";
import { type Timeslot } from "./Timeslots";

export interface Reservations {
    reservation_id: number;
    student: Student;
    seat: Seat;
    timeslot: Timeslot;
    create_time: string;
}