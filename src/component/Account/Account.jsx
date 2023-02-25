import {useEffect,useState} from 'react'
import {db} from "../../Database"
import { getDocs,collection } from 'firebase/firestore'
import Navs from '../navbar/Navs'
const Account = () => {
    const dcol='value';
    const refss=collection(db,dcol);
    useEffect(()=>
    {
        const betu=async ()=>
        {
            let kk=await getDocs(refss);
           let c=kk.docs.map((doc)=>({...doc.data()}));
           console.log(c[1])
        }
        betu()
    
      
        
    },[])
  return (
    <>
    <Navs/>
    <div>working</div>
    </>
  )
}

export default Account;