import CupcaKe from "../components/CupcaKe"
import Containers from "../layouts/Containers"
import useData from "../hooks/useData"

const CupcakePage = () => {
  const {data:cupcakes,error,load} = useData("/cupcakes")
  return (
    <>
    <div>
        <main className="container mx-auto p-5">        
            <Containers title="Cupcakes">
              {
                error ? error : load ? "Loading...." : (
                  cupcakes?.length ? cupcakes.map(cupcake =>(
                    <CupcaKe key={cupcake.id} 
                            color={cupcake.color} 
                            flavor={cupcake.flavor} 
                            photo={cupcake.photo} 
                            price={cupcake.price}
                            description={cupcake.description}/>
                    )):"No books available"
                )
              }
            </Containers>
        </main>
    </div>
    </>
  )
}

export default CupcakePage