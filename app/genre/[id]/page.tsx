import React from 'react'
type Props ={
    params:{
    id:string;
};
searchParams:{
    genre:string;
}
}
function Genrepage({params:{id},searchParams :{genre}}:Props) {
  return (
    <div>Welcome Genrepage Id:{id} and Gnre :{genre}</div>
    
  )
}

export default Genrepage