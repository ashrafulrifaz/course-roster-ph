function Holder({data, id}){
   let {title, credit} = data
   return (
      <div>
         <p className="text-[#1C1B1B99] leading-relaxed">{id + 1} {title}</p>
      </div>
   )
}

export default Holder