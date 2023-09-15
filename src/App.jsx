import { useState } from 'react'
import './App.css'
import Modules from './Modules/Modules'
import Holders from './Holders/Holders'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  let [datas, setDatas] = useState([])
  let [remainingTime, setRemainingTime] = useState(20)
  let [creditTime, setCreditTime] = useState(0)
  let [totalPrice, setTotalPrice] = useState(0)

  let handleDatas = data => {
    let {credit, price, id} = data;

    let isInclude = datas.find(item => item.id == id)

    if(isInclude){
      toast('Course Already Exist');
    } else {
      if((creditTime + credit) <= 20){
        if(creditTime < 20){
          let newDatas = [...datas, data]
          setDatas(newDatas)
        }
  
        if(creditTime < 20 && remainingTime > 0){
          setCreditTime(creditTime + credit)
        } else {
          toast('Credit Limit Exceeded');
        }
  
        if(remainingTime > 0){
          setRemainingTime(remainingTime - credit)
        } else {
          toast('Credit Limit Exceeded');
        }
  
        if(creditTime < 20){
          setTotalPrice(totalPrice + price)
        }
      } else {
          if(remainingTime > 0){
            toast(`you have ${remainingTime} remaining credit`)
          } else {
            toast(`you don't have any credit`)
          }
      }
    }    
  }

  return (
    <div className='max-w-[90%] mx-auto'>
      <div className='py-8'>
        <h1 className='text-center text-3xl font-bold'>Course Registration</h1>
      </div>      
      <div className='flex gap-4 pb-10'>
        <Modules handleDatas={handleDatas}></Modules>
        <Holders datas={datas} creditTime={creditTime} remainingTime={remainingTime} totalPrice={totalPrice}></Holders>        
      </div>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
