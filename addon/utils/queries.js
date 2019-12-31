import gql from "graphql-tag"

const stardustHooksQuery = gql`
query fetchStardustHooks{
	stardustHooks{
		id
		name
		events
		referenceable{
			id
			name
		}
		configuration
	}
}`

const stardustHooksCreateMutation = gql`
mutation createHook(
		$attributes: HookCreateAttributes!,
		) {
	stardustHooksCreate(
			attributes: $attributes
			) {
		hook{
			id
		}
		error
	}
}
`


const stardustHooksHookQuery = gql`
query fetchHook($id: ID!){
  stardustHook(id:$id){
    id
      name
      events
      configuration
      referenceable{
        id
        name
      }
  }
}
`

const stardustHooksUpdateMutation = gql`
mutation updateHook(
		$id: ID!,
		$attributes: HookUpdateAttributes!
		) {
	stardustHooksUpdate(
			id: $id,
			attributes: $attributes,
			) {
		hook{
			id
			name
			configuration
			events
			referenceable{
				id
				name
			}
		}
		error
	}
}
`
const stardustHooksDestroyMutation = gql`
mutation destroyHook(
    $id: ID!,
    ) {
  stardustHooksDestroy(
      id: $id,
      ) {
    message
    error
  }
}
`



export { 
	stardustHooksQuery,
	stardustHooksHookQuery,
	stardustHooksCreateMutation,
	stardustHooksUpdateMutation,
	stardustHooksDestroyMutation
} 
