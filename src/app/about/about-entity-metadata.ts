import { EntityMetadataMap } from "@ngrx/data";
import { IAbout } from "../interface/about.interface";

export const aboutEntityMetaData: EntityMetadataMap = {
  About: {
    selectId: (about: IAbout) => about.id
  }
}