import styles from "./Banner.module.css";

//aqui estou tipando o componente banner, dessa forma posso utilizalo em outros lugares
// e passar as props que eu quiser, nesse caso src e alt
type BannerProps = {
  src: string;
  alt: string;
};

const Banner = ({ src, alt }: BannerProps) => {
  return <img src={src} alt={alt} className={styles.banner} />;
};

export default Banner;
