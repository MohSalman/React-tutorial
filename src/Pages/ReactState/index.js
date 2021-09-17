import { useEffect, useState } from "react";
import ProductCard from "../../Components/Cards/ProductCard";
import { CardOne, CardTwo} from "../../Components/Cards/CommonCard/CommonCard";
import { SpinnerLoader } from "../../Components/Loaders/SpinnerLoader";
import { sampleData } from "../../JsonData/ProductSampleData";

function ReactState(props) {

  const [count, setCount] = useState();
  const [parentCount, setParentCount] = useState(0);
  const [Data, setDate] = useState([]);
  const [loader, setLoader] = useState(false);
   const Increment = () =>{
    let counting = count + 1
    setCount(counting)
   }

  const callAPI =()=>{
    setDate(sampleData);
  }

  useEffect(() => {
    setLoader(true);
    setTimeout(()=>{
      callAPI();
      setLoader(false)
    }, 2000)
  }, [])


  // parent count
  const parentCall = () =>{
    let counting = parentCount + 1
    setParentCount(counting)
   }

  return (
    <div className="container">
      <div className="row">
        <div className="col col-xxl-3 col-xl-4 col-lg-6 col-md-4">
          <CardOne 
              countState={count}
              IncrementFun={Increment}
          />

          <CardTwo
            parentState={parentCount}
            parentFun={parentCall}
          />
        </div>
        <div className="row">
          {
            loader? <SpinnerLoader/>:""
          }
          <ProductCard customClass="bg-primary"  productData={Data.length <= 0? [] :Data} />
        </div>
      </div>
    </div>
  );
}

export default ReactState;
