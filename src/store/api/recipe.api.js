import { api } from "./api";

export const recipeApi = api.injectEndpoints({
    endpoints: builder =>({
        createRecipe: builder.mutation({
            query: (recipe)=>({
                body: recipe,
                url: '/',
                method: 'POST'
            }),
            invalidatesTags: ()=>[{
                type: 'Recipe',//update all spisok
            }]
        })//mutation for add
    })
})

export const {useCreateRecipeMutation} = recipeApi
