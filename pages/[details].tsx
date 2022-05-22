import { FC } from "react";
import DetailCard from "../components/DetailCard";
import { getDetails } from "../services";
import { IData } from "../types";

const Details: FC<IData[]> = ({ res }: IData[] | any) => {
  const { results } = res;

  return (
    <div className="container content">
      {results.map((item: IData[] | any) => {
        const { id } = item;
        return (
          <div key={id}>
            <DetailCard item={item} />
          </div>
        );
      })}
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const { details } = context.params;
  const res = await getDetails(details);

  return {
    props: {
      res,
    },
  };
}

export default Details;
