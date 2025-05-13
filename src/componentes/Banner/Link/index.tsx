import React from "react";
import styles from "./Link.module.css";

export const Link = ({
  children,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  // aqui estou tipando o componente link, dessa forma posso utilizalo em outros lugares
  // e passar as props que eu quiser, nesse caso children

  //rest é o resto das props que não foram passadas, ou seja, todas as props que um link pode ter
  //atributos intrínsecos
  return (
    <a className={styles.link} {...rest}>
      {children}
    </a>
  );
};
