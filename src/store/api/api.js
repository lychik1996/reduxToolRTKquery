import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const API_URL= 'http://localhost:3001/recipes'

export const api = createApi({
    reducerPath: 'api',//pytb reducera
    tagTypes: ['Recipe'],//dlya revalidatcii
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),//base zapros
    endpoints: builder =>({
        getRecipes: builder.query({
            query:()=>'/?_sort=id&_order=desc',//polyschenie recipe + sortirovka spervanovie
            providesTags:()=>[{//update vesb spisok pri dobavlenii
                type:'Recipe'
            }]
        }),
    })
    
})

export const {useGetRecipesQuery}=api