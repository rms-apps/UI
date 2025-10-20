// @ts-check

/**
 * @param {string} componentName
 */
export const createComponentFile = (componentName) => `

export type ${componentName}Props = { text: string };

export const ${componentName} = ({ text }: ${componentName}Props) => {
  return <></>
};
`;
