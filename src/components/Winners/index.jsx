import {useParams} from "react-router-dom";

export default function Winners()
{
    const prams=useParams();
    console.log(prams.id);
    return(<></>);
}