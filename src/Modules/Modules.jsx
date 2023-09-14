import { useEffect, useState } from "react"
import Module from "../Module/Module"

function Modules(){
   let [courses, setCourses] = useState([])

   useEffect(course => {
      fetch('data.json')
         .then(res => res.json())
         .then(data => setCourses(data))
   }, [])

   return (
      <div className="w-3/4 gap-4 grid grid-cols-3">
         {
            courses.map(course => <Module course={course}></Module>)
         }
      </div>
   )
}

export default Modules