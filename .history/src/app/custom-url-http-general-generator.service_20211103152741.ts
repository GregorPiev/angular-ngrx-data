import { Injectable } from "@angular/core";
import { DefaultHttpUrlGenerator, HttpResourceUrls, Pluralizer } from "@ngrx/data";

@Injectable({
  providedIn: 'root'
})
export class CustomUrlHttpGeneralGeneratorService extends DefaultHttpUrlGenerator {

  constructor(private myPluralizer: Pluralizer) {
    super(myPluralizer)
  }

  protected getResourceUrls(
    entityName: string,
    root: string
  ): HttpResourceUrls {

    console.info('%cGenerator URL => Entity Name:' + entityName, 'color: green; font-size: 18px;');

    let resourceUrls = this.knownHttpResourceUrls[entityName];
    if (entityName == 'About') {
      const url = 'http://localhost:3000/Abouts/';
      resourceUrls = {
        entityResourceUrl: url,
        collectionResourceUrl: url
      };
      this.registerHttpResourceUrls({ [entityName]: resourceUrls });
    } else if (entityName == 'User') {
      const url = 'http://localhost:3000/Users/';
      resourceUrls = {
        entityResourceUrl: url,
        collectionResourceUrl: url
      };
      this.registerHttpResourceUrls({ [entityName]: resourceUrls });
    } else if (entityName == 'Message') {
      const url = 'http://localhost:3000/Messages/';
      resourceUrls = {
        entityResourceUrl: url,
        collectionResourceUrl: url
      };
      this.registerHttpResourceUrls({ [entityName]: resourceUrls });
    }
    return resourceUrls;
  }
}
