//Async-await
function api (getData){
  return new Promise((resolve,reject) => {
    setTimeout(()=>{
      console.log("weather data = ",getData);
      resolve("succes");
    },1500);
  });
}


async function hello(){
  await api(1);
  await api(2);
  await api(3);
  await api(4);
  await api(5);
  await api(6);
}