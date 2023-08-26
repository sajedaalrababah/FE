import { useAuth } from "@/context/auth"
import useSWR from 'swr'

export default function useResource() {
    const url = process.env.NEXT_PUBLIC_URL
    const { user, login ,token} = useAuth()
    const {data,error,mutate} = useSWR([url,token],fetchResource)


    function config() {
        return {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token.access
            },


        }
    }

    async function fetchResource() {
        const urlget = url+"/api/v1/cookie_stands/"
        if (!token) {
            return
        }
        try {
            const response = await fetch(urlget, config())
            const jsonResponse  = await response.json()
            return jsonResponse


        } catch (error) {
            console.log("hi")
        }

    }
    async function createResource(newLocation){
        const urlpost = url+"/api/v1/cookie_stands/"
        if (!token) {
            return
        }try{

            const options =config()
            options.method ="POST"
            options.body  = JSON.stringify(newLocation)
    
            await fetch(urlpost, options )
            mutate()

        }catch (error) {
            errorHandler(error)
        }


    }
    async function deleteResource(id){
        const urldelete =  url+"/api/v1/cookie_stands/";
        const deleteUrl =urldelete+id
        if (!token) {
            return
        }try{

            const options =config()
            options.method ="DELETE"
    
            await fetch(deleteUrl, options )
            mutate()

        }catch (error) {
            errorHandler(error)
        }


    }

    return {
        response : data || [],
        createResource,
        deleteResource,
    }
}