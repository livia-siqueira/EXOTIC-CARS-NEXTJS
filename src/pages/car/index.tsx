import { useRouter } from "next/router";
import { AllCars, Button } from "@components/index";
import { Car, RootObject } from "@shared/index";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import { allCars } from "@shared/index";

const PageCars = ({ cars }: RootObject) => {
  const router = useRouter();

  const changePagePrincipal = () => {
    return router.push('/');
  }
  if (cars.length === 0) {
    return (
      <div style={{display:'flex', flexDirection: 'column', gap: '20px', alignItems: 'center'}}>
        <p style={{ textAlign: "center", fontSize: "2rem", marginTop: "90px" }}>
          No car registered
        </p>
        <Button isCompleted={false} onClick={changePagePrincipal}>Back</Button>
      </div>
    );
  }
  return <AllCars cars={cars} />;
};


export const getServerSideProps: GetServerSideProps = async(context) => {
  const cars: Car[] = allCars();
  const session = await getSession({req: context.req})
  if(!session){
      return{
          redirect: {
              destination: '/',
              permanent: false
          }
      }
  }

  return {
      props: {session: session, cars: cars}
  }
}


export default PageCars;
