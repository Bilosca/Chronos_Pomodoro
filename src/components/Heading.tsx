import styles from './Heading.module.css';


type HeadingProps = {
    children:React.ReactNode;


}

export function Heading({children}: HeadingProps){
    /*
    tambem poderia ficar:
    const {children} = props;
    */
    return(
        <h1 className={styles.heading}>{children}</h1>
    )
}