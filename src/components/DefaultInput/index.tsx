import type React from "react";
import styles from "./style.module.css";

{/*declara as propriedades para o input*/}
type InputProps = {
  id: string;
  labelText?: string;
} & React.ComponentProps<"input">;

{/*exporta a funcao default input com seus parametros, id, type, labeltext e o restante possivel
  assim ele aceita qualquer outro parametro passado */}
export function DefaultInput({ id, type, labelText,...rest }: InputProps) {
  return (
    <>
      {/*essa condicao ela confere se o label text tem algum conteudo */}
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input 
      className={styles.input}
      id={id}
      type={type}
      {...rest}
      />
    </>
  );
}
