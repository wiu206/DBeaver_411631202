import { Contorller } from "../abstract/Contorller";
import { Request, Response } from "express";
import { logger } from "../middlewares/log";
import { ReservationsService } from "../Service/ReservationsService";
require('dotenv').config();

export class ReservationsController extends Contorller {
    protected service: ReservationsService;

    constructor() {
        super();
        this.service = new ReservationsService();
    }

    public async getReservations(req: Request, res: Response) {
        try {
            const reservations = await this.service.getReservations();
            res.send(reservations);
        } catch (error) {
            logger.error("Error fetching data: ", error);
            res.status(500).send("Error fetching data");
        }
    }

}