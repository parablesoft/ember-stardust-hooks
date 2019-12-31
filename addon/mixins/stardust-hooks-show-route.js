import Route from '@ember/routing/route'
import { stardustHooksHookQuery } from "../utils/queries"
import { RouteQueryManager } from "ember-apollo-client"

export default class StardustHooksShowRoute extends Route.extend(
	RouteQueryManager
){

  model(params){
    let variables = {
      id: params.id
    }

    return this.apollo.watchQuery({
			query: stardustHooksHookQuery,
			variables,
      fetchPolicy: "network-only"
    })
  }
}



