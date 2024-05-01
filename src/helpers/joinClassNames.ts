export const joinClassNames = (classNames: (string | undefined | null | boolean)[], separator = ' ') => {
    return classNames.filter(Boolean).join(separator);
};
