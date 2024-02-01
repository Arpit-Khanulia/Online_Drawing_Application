
import { useGetDrawingQuery } from "../Redux/Slices/Api"
import { useParams } from "react-router-dom";
import Drawing from "../Components/Drawing";


const GetDrawing = () => {
  const { id } = useParams();


const {data,isSuccess} = useGetDrawingQuery(id);

console.log('data aaa to raha he ',data);



  return (

        <>
            {isSuccess && data ? (
                <Drawing datalines={data} />
            ) : (
                <div>Loading...</div>
            )}
        </>



  )
}

export default GetDrawing