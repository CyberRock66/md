export const getFirstErrorMessageClientValidation = (errors: any): string => {
  const getKey = errors && Object.entries(errors)[0][1];

  return Object.values(getKey)[0] as string;
};
