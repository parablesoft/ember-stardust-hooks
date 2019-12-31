import Route from '@ember/routing/route'
import { stardustHooksQuery } from "../utils/queries"
import { RouteQueryManager } from "ember-apollo-client"

export default class StardustHooksIndexRoute extends Route.extend(
	RouteQueryManager
){

  model(){
    return this.apollo.watchQuery({
			query: stardustHooksQuery,
      fetchPolicy: "network-only"
    },
    "stardustHooks")
  }
}
