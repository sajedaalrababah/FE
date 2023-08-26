export default function Form(props) {
  return (
    <form className="flex flex-col w-3/4 p-8 mx-auto my-4 bg-green-300 rounded-md h-200" onSubmit={props.handler}>
        <div className="flex w-full gap-5">
            <div className="flex flex-col w-3/4">
                <label className="px-2 py-1 text-2xl text-center text-black-50">Location</label>
                <input name='input0' className="flex-auto h-16 pl-1" />
            </div>
            <div className="flex w-1/2">
                <button className="w-full h-full bg-green-500 text-black-50">Create</button>
            </div>
        </div>


      <div className="flex w-full grid-cols-4 gap-4 p-2 mx-auto my-4 space-x-4">
        <div className="flex flex-col">
          <label className="px-2 py-1 text-2xl text-center text-black-50">Minimum Customers Per Hour</label>
          <input name='input1' className="flex-auto h-8 pl-1" />
        </div>
        <div className="flex flex-col">
          <label className="px-2 py-1 text-2xl text-center text-black-50">Maxmum Customers Per Hour</label>
          <input name='input2' className="flex-auto h-8 pl-1" />
        </div>
        <div className="flex flex-col">
          <label className="px-2 py-1 text-2xl text-center text-black-50"> Average Cookies Per Sale                                                                              .</label>
          <input name='input3' className="flex-auto h-8 pl-1" />
        </div>

      </div>



    </form >
  )
}