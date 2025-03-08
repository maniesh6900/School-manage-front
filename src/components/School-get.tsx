import axios from "axios";
import { useEffect, useState } from "react";


interface DataType {
  name : string,
  id : string,
  address : string,
  latitude : number,
 longitude : number 
}

function SchoolGet() {

  const [data, setData] = useState<DataType[]>();
  async function handleAxios(){
    const res =  await axios.get("http://localhost:4000/api/v1/school/get");
    setData(res.data.data);
    console.log(res.data.data);
  }

  useEffect(()=>{
    handleAxios();
  },[]);

  

  return (
    <div className="m-4 w-1/5">
      { data &&
        data.map((item : DataType)=> {

          return <div key={item.id}
            className="m-4 bg-gray-500 text-amber-50 h-full p-4 *:*:my-2 rounded-md border-2 border-black-500/100"
          >
            <p>Name : {item.name}</p>
            <p>Addresse: {item.address}</p>
          </div>;
        })
      }
      </div>
  );
}

export default SchoolGet;