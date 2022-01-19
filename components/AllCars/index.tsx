import { GetServerSideProps } from "next";
import { CarItem } from "..";
import { Car} from "../../shared/types";
import * as styles from "./styles";
import { getSession } from "next-auth/react";

interface Props {
  cars: Car[];
  email: string;
}

const AllCars: React.FC<Props> = ({ cars, email}) => {
  console.log(email);
  return (
    <styles.Container>
      <styles.List>
        {cars.map((car) => (
          <CarItem car={car} />
        ))}
      </styles.List>
    </styles.Container>
  );
};

export const getServerSideProps: GetServerSideProps<{email: string}> = async (context) => {
  const session = await getSession({ req: context.req });
  console.log(context);
  if (!session || !session.user) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  const { email, name } = session.user;

  if (!email || !name) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {
      email: email,
    },
  };
};

export default AllCars;
