import { EntityRepository, Repository } from "typeorm";
import { Theme } from "./entities/theme.entity";

@EntityRepository(Theme)
export class themeRepository extends Repository<Theme>{ };
