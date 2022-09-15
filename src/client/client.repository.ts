import { EntityRepository, Repository } from "typeorm";
import { Client } from "./entities/client.entity";

@EntityRepository(Client)
export class userRepository extends Repository<Client>{ };
