import { Injectable } from "@angular/core";
import { DefaultHttpUrlGenerator, HttpResourceUrls, Pluralizer } from "@ngrx/data";

@Injectable({
  providedIn: 'root'
})
export class UserUrlHttpGeneralGeneratorService extends DefaultHttpUrlGenerator {

  constructor(private myPluralizer: Pluralizer) {
    super(myPluralizer);
  }

  protected getResourceUrls(
    entityName: string,
    root: string): HttpResourceUrls {

    console.info("%cUser => Entity Name" + entityName, "color: fiolet; font-size: 18px;");

    let resourceUrls = this.knownHttpResourceUrls[entityName];
    if (entityName == 'User') {
      const url = 'http://localhost:3000/Users/';
      resourceUrls = {
        entityResourceUrl: url,
        collectionResourceUrl: url
      };
      this.registerHttpResourceUrls({ [entityName]: resourceUrls });
    }
    return resourceUrls;
  }
}
