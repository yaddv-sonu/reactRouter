import React, { useEffect, useState } from 'react'

function Github  () {

    const[data, setData] =useState([])


    useEffect(()=>{
        fetch('https://api.github.com/users/yaddv-sonu')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setData(data)
        })

    },[])
  return (
    <div className='text-center m-4 bg-slate-600 text-white p-4 text-3xl'>
      Github followers: {data.followers}
      <img src={data.avatar_url} alt='' width={300} />
    </div>
  )
}

export default Github
