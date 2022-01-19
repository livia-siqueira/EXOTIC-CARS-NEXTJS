import { useRouter } from "next/router";
import useSWR from "swr";
import { AllCars, Button } from "../../components";
import api from "../../services/api";
import { Car, RootObject } from "../../shared/types";

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

export async function getStaticProps() {
  const data = await api.get("/cars");
  const cars: RootObject = data.data.cars;

  return {
    props: {
      cars: cars,
    },
  };
}

export default PageCars;
