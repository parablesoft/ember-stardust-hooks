import Controller from '@ember/controller';
import { inject as service } from '@ember/service'
import { stardustHooksCreateMutation } from "../utils/queries"
import { action } from "@ember/object"


export default class StardustHooksIndexController extends Controller{

	@service apollo

	@action
	async createNewHook(){
		let variables = {
			attributes: {
				name: "New Hook"
			}
		}

		let result = await this.apollo.mutate(
			{
				mutation: stardustHooksCreateMutation,
				variables
			},
			"stardustHooksCreate"
		)


		this.transitionToRoute(this.stardustHooksShowRoute, result.hook.id)
	}

}
