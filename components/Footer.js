export default function Footer({number}){
    return(
        <footer className="flex justify-between p-6 mt-8 text-2xl font-medium text-gray-800 bg-green-500 ">
        <p>
            {number.length}  Locations Word Wide
        </p>
        &copy; 2023

    
      </footer>
        
    )

}