import { Contorller } from "../abstract/Contorller";
import { Route } from "../abstract/Route";
import { ReservationsController } from "../controller/ReservationsController";

export class ReservationsRoute extends Route {
    protected Contorller!: Contorller;
    protected url: string;
    protected controller = new ReservationsController();

    constructor() {
        super();
        this.url = '/Reservations/';
        this.setRoutes();
    }

    protected setRoutes(): void {
        this.router.get(`${this.url}test`, (req, res) => {
            this.controller.getReservations(req, res);
        });

    }
}