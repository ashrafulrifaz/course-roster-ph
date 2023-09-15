import Holder from "../Holder/Holder"

function Holders({datas, creditTime, remainingTime, totalPrice}){
   return (
      <div className="w-1/4">    
         <div className="p-4 rounded-xl bg-white space-y-3">
            <div>
               <p className="text-blue-500 font-semibold">Credit Hour Remaining: {remainingTime} hr</p>
            </div>   
            <hr />  
            <h3 className="text-lg font-semibold">Course Name</h3>
            <div>
               {
                  datas.map((data, idx) => <Holder key={idx} id={idx} data={data}></Holder>)
               }
            </div>
            <hr />
            <div>
               <p>Total Credit Hour: {creditTime}</p>
            </div>
            <hr className="text-[#1C1B1B33]"/>
            <div>
               <p>Total Price: {totalPrice} USD</p>
            </div>
         </div>
      </div>
   )
}

export default Holders