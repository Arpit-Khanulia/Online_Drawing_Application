
import { useGetDrawingQuery } from "../Redux/Slices/Api"
import { useParams } from "react-router-dom";
import Drawing from "../Components/Drawing";
import { useAppDispatch } from "../Redux/Hooks";
import { myid } from "../Redux/Slices/data";


const GetDrawing = () => {

  const dispatch = useAppDispatch();
  const { id } = useParams();


const {data,isSuccess} = useGetDrawingQuery(id);

if(isSuccess){
    dispatch(myid(id));
}

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