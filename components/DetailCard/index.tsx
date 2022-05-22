import Image from "next/image";
import styled from "./detailCard.module.scss";

const Card = ({ item }: any) => {
  const { name, description, thumbnail, comics } = item;
  const { path = "" } = thumbnail;
  const { items = "" } = comics;

  return (
    <div className={styled.detailCard}>
      <div>
        <Image
          src={`${path}/portrait_xlarge.jpg`}
          alt={name}
          layout={"fixed"}
          width={100}
          height={100}
        />
      </div>

      <div className={styled.infoBox}>
        <span>{name}</span>
        <p>{description || "No description."}</p>
        {items.slice(0, 10).map(({ name }: string | any) => (
          <p key={name}>{name}</p>
        ))}
      </div>
    </div>
  );
};

export default Card;
