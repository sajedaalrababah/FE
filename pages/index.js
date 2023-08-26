import Head from "next/head"
import Footer from "@/components/Footer"
import Form from "@/components/Form"
import Header from "@/components/Header"
import Table from "@/components/Table"
import { useAuth } from "@/context/auth"
import FormToken from "@/components/formtoken"
import React, { useEffect, useState } from 'react';
import useResource from "@/hooks/useresource"


export default function Home() {
  const { user, login ,token} = useAuth()
  // const [addCookies, setQuestion] = useState([])
  // const baseUrl = process.env.NEXT_PUBLIC_URL
  const {response,createResource,deleteResource} = useResource()


  
//   async function getData() {
//     if (token){
//     const url = baseUrl+"/api/v1/cookieStand/"
//     const option = {
//       method: "GET",
//       headers: {
//         "Authorization": `Bearer ${token.access}`
//       }
      
//     }
//     const res = await fetch(url, option)
//     if (res.status === 200) {
//       const data = await res.json();
//       data.forEach((value) => {
//         setQuestion((prevCookieStands) => [...prevCookieStands, value]);
//       });
      
//   } else {
//       console.log("Failed to access protected route.");
//   }
//   }
// }


// async function PostData(cookies) {
//   if (token){
//   const url = baseUrl+"/api/v1/cookieStand/"
//   const option = {
//     method: "POST",
//     body:JSON.stringify(cookies),
//     headers: {
//       "Authorization": `Bearer ${token.access}`,
//       "Content-Type": "application/json"
      
//     }
    
//   }
//   const res = await fetch(url, option)
//   if (res.status === 201) {
//     setQuestion([...addCookies, cookies])
    
// } else {
//     console.log("Failed to access protected route.");
// }
// }
// }
//   useEffect(() => {
//     getData(); 
//   }, [token]);

  
  const submitHandler = (event) => {
    event.preventDefault()
    const cookies = {
      id: event.target.input0.value.length,
      location: event.target.input0.value,
      minimum_customers_per_hour: parseInt(event.target.input1.value),
      maximum_customers_per_hour: parseInt(event.target.input2.value),
      average_cookies_per_sale: parseFloat(event.target.input3.value),
    };
    createResource(cookies)
    
    event.target.reset();


  }
  function FormsubmitHandler(event) {
    event.preventDefault()
    const username = event.target.username.value
    const password = event.target.password.value
    login(username, password)
  }

  // async function deleteHandeler(id){

  //   if (token) {
  //     const url =  baseUrl+"/api/v1/cookieStand/"+id;
  //     const option = {
  //       method: "DELETE",
  //       headers: {
  //         "Authorization": `Bearer ${token.access}`, 
  //       },
  //     };
  //     try {
  //       const res = await fetch(url, option);
  //       if (res.status === 204) {
  //         setQuestion([])
  //         getData()
          
  //       } else {
  //         throw new Error("Failed to post data.");
  //       }
  //     } catch (error) {
  //       throw new Error(`Error: ${error.message}`);
  //     }
  //   } else {
  //     throw new Error("Token is missing.");
  //   }
    
  // }



  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-col items-center flex-grow py-4 space-y-8">
          {!user ? (
            <>
              <FormToken formLogin={FormsubmitHandler} />
            </>
          ) :
            (<>
            
              <Form handler={submitHandler} />
              
              <Table addCookies={response} deleteResource={deleteResource}/>
            </>
            )

          }



        </main>
        <Footer number={response} />


      </div>


    </>
  )
}