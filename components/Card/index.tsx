import Image from "next/image";
import Link from "next/link";
import styled from "./card.module.scss";

const Card = ({ item }: any) => {
  const { name, thumbnail, id } = item;
  const { path = "" } = thumbnail;

  return (
    <Link href={`/${id}/`} className={styled.card}>
      <a>
        <Image
          src={`${path}/portrait_xlarge.jpg`}
          alt={name}
          layout={"responsive"}
          height={100}
          width={100}
        />

        <div className={styled.infoBox}>
          <span>{name}</span>
        </div>
      </a>
    </Link>
  );
};

export default Card;
