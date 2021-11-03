import { EntityMetadataMap } from "@ngrx/data";
import { IUsers } from "../interface/users.interface";

export const userEntityMetaData: EntityMetadataMap = {
  User: {
    selectId: (usr: IUsers) => usr.id
  }
}