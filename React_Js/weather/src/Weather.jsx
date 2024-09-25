import React, { useEffect, useState } from 'react'

const Weather = () => {
  const [cityName,setCityName]=useState('Jaipur')
  const [weather,setWeather] = useState({})
  useState()
  const api_Key = "125ac2632dbe70484ed9c10eb074281e";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_Key}&units=metric}`;
  
  useEffect(()=>{
    if(cityName){
      fetch(url).then((res)=>{return res.json()}).then((data)=>{
        console.log(data);
        setWeather(data)
      })
    }
  },[cityName])

  const handleSubmit =(e)=>{
    e.preventDefault();
  }

  return (
    <>
    <div className="bg-mainImg h-screen bg-cover flex justify-center items-center rounded-md">
      {/* inner */}
      <div className="bg-transparent w-3/5 h-4/5 flex">
      {/* left */}
      <div className="bg-leftImg h-full w-1/2 relative bg-cover  rounded-l-lg ">
      <div className="text-3xl flex justify-end font-bold ">{weather.name} , {weather.sys && weather.sys.country}</div>
      <div className="flex justify-between absolute bottom-0 text-3xl text-white font-bold w-full ">
        <div className='ms-2 mb-2'>
          <p>{weather.coord && weather.coord.lat}</p>
          <p>{weather.coord && weather.coord.lon}</p>
        </div>
        <p className='relative right-0 mr-2'>{weather.main && weather.main.temp}K</p>
      </div>
      </div>
      {/* right */}
      <div className="w-1/2 ">
        <div className="flex justify-between px-2 mt-32 ">
          <form onSubmit={handleSubmit} action="">
          <input type="text" value={cityName} onChange={(e)=>{setCityName(e.target.value)}} className='bg-transparent font-bold text-black px-5 py-3' />
          <button className='text-2xl text-white font-bold'>Search</button>
          </form>
        </div>
        <div className="">
          <p className='flex justify-center text-xl text-white'>{weather.name}</p>
          <p className='flex justify-center text-xl text-white'>Mist</p>
        </div>
        <div className="flex justify-around text-2xl text-white mt-16 py-4">
          <p>Visibility</p>
          <p>{weather.visibility}</p>
        </div>
        <hr className='mx-3'/>
        <div className="flex justify-around text-2xl text-white mt-2 py-4">
          <p>Temp</p>
          <p>{weather.main && weather.main.temp}K</p>
        </div>
        <hr className='mx-3'/>
        <div className="flex justify-around text-2xl text-white mt-2 py-4">
          <p>Humidity</p>
          <p>{weather.main && weather.main.humidity}</p>
        </div>
        <hr className='mx-3'/>
      </div>
      </div>
    </div>
    </>
  )
}

export default Weather
