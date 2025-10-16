// @ts-check

/**
 * @param {string} componentName
 */
export const createComponentFile = (componentName) => `

type ${componentName}Props = { text: string };

export const ${componentName} = ({ text }: ${componentName}Props) => {
  return <></>
};
`;
