import { Button } from "..";
import * as styles from "./styles";
import { useRouter } from "next/router";
const Page: React.FC = () => {
  const router = useRouter();

  const changePageNewCar = () => {
    return router.push('/new-car')
  }

  const changePageCatalog = () => {
    return router.push('/car')
  }
  return (
    <styles.Container>
      <styles.Section>
        <styles.Title>Exotic Cars</styles.Title>
        <styles.Description>
          Here you can have access to the most exotic cars for a fair price
        </styles.Description>
        <Button title="new car" isCompleted={false} onClick={changePageNewCar}/>
        <Button title="catalog car" isCompleted={true} onClick={changePageCatalog} />
      </styles.Section>
      <styles.Aside>
        <styles.ImgBrand
          src="https://i.ibb.co/vJ865Zy/Mask-Group-13-2x.png"
          width={600}
          height={300}
          layout="intrinsic"
        />
      </styles.Aside>
    </styles.Container>
  );
};

export default Page;
