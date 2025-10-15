// @ts-check

/**
 * @param {string} componentName
 */
export const createComponentFile = (componentName) => `
import styles from './${componentName}.module.scss';

type ${componentName}Props = { text: string };

export const ${componentName} = ({ text }: ${componentName}Props) => (
  <div className={styles.container}>{text}</div>
);
`;
