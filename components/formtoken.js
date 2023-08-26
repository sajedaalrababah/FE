import { useAuth } from "@/context/auth"


export default function FormToken({formLogin}) {

    

    return (
        <form className="flex flex-col w-3/4 p-8 mx-auto my-4 bg-green-300 rounded-md h-200" onSubmit={formLogin}>

            <label className="px-2 py-2 text-2xl text-center text-black-50">USER NAME</label>
            <input name='username' className="flex-auto py-4"placeholder="User Name" />
            <label className="px-2 py-2 text-2xl text-center text-black-50">PASSOWRD</label>
            <input name='password' className="flex-auto py-4" placeholder="password"/>
            <div className="flex items-center justify-center mt-4" >
            <button className="w-full px-6 py-5 text-2xl bg-green-500 text-black-50" >SIGN IN</button>

            </div>

        </form >
    )

    
}