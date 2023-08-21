import Banner from "../components/Banner"
import Containers from "../layouts/Containers"
import bookSvg from "../assets/books-book-svgrepo-com.svg"
import cupcakeSvg from "../assets/cupcake-illustration-svgrepo-com.svg"
import deliverySvg from "../assets/delivery-truck-svgrepo-com.svg"
import cardSubSvg from "../assets/card-svgrepo-com.svg"
import Service from "../components/Service"

const HomePage = () => {
  return (
    <>
        <Banner/>
        <main className="container mx-auto p-5">
        <Containers title="Our services for you">
          <Service img={bookSvg} title="Books" description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form," />
          <Service img={cupcakeSvg} title="Cupcakes" description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form," />
          <Service img={cardSubSvg} title="Promotions" description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form," />
          <Service img={deliverySvg} title="Delivery" description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form," />
        </Containers>

        <Containers title="Customers">
          <Service img={bookSvg} title="Books" description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form," />
          <Service img={cupcakeSvg} title="Cupcakes" description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form," />
          <Service img={cardSubSvg} title="Promotions" description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form," />
        </Containers>

        </main>
    </>
  )
}

export default HomePage