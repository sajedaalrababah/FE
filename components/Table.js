import hourlySalesData from '@/data'

export default function Table({ addCookies ,deleteResource}) {
  const timeSlots = [
    "6am", "7am", "8am", "9am", "10am", "11am", "12pm",
    "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "Total"
  ];

  return (
    <>

      {addCookies.length>0 ? (
        <table className='w-1/2 p-8 mx-auto my-8 text-xl center'>
          <thead>
            <tr>
              <th className='bg-green-600 border border-black'>Location</th>
              {timeSlots.map((slot, index) => (
                <th key={index} className='bg-green-600 border border-black'>{slot}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {addCookies.map((obj, index) => (

              <tr key={obj.id}>


<td className='bg-green-600 border border-black'>
                  <span style={{ marginRight: '5px' }}>{obj.location}</span>
                  <svg onClick={() => deleteResource(obj.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" style={{ verticalAlign: 'middle', cursor: 'pointer' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                  </svg>
                </td>
                {hourlySalesData.map((sales, index) => (
                  <td key={index} className='bg-green-600 border border-black'>{sales}</td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className='font-bold bg-green-600 border border-black'>Total</td>
              {hourlySalesData.map((sales, index) => (
                <td key={index} className='bg-green-600 border border-black'>{sales * addCookies.length}</td>
              ))}
            </tr>
          </tfoot>
        </table>
      ) : "No Cookie Stands Available"}
    </>
  );
}