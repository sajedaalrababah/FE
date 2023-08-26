
import Link from 'next/link';
import { useAuth } from "@/context/auth"

export default function Header({ Overview }) {
  const { user, login ,token,logout} = useAuth()

  return (

    <header className="flex items-center justify-between p-5 bg-green-600 text-black-50">
      <div>
        <h1 className="text-5xl font-medium">Cookie Stand Admin</h1>
      </div>
      {user ? (
              <div className="flex gap-4">
              {/* <button className="p-1 bg-gray-300 text-black-50">Rudy</button> */}
              <Link className="p-1 text-black bg-gray-200" href={'/..'}>
              Rudy
                </Link>
                
              <button className="p-1 bg-green-500 text-black-50 " onClick={logout}>Sign out</button>
                <Link className="p-1 text-black bg-gray-200" href={'/overview'}>
                  Overview
                </Link>
                
              </div>
):(
  <></>
)}
      
    


    </header>

  )
}