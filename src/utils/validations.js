// Validation function
export const inputValidator = (label, value, validations) => {

    if (!validations) return;

    const errors = [];
    if (typeof value == 'string')
        value = value?.trim();

    if (validations?.required && !value && value !== 0) {
        errors.push(`${label} is required`)
    }

    if (validations?.minLength && value?.length < validations.minLength) {
        errors.push(`Min length for ${label} should be ${validations.minLength}`)
    }

    if (validations?.maxLength && value?.length > validations.maxLength) {
        errors.push(`Max length for ${label} should be ${validations.maxLength}`)
    }

    if (validations?.min && value < validations.min) {
        errors.push(`${label} should be ${validations.min} or greater`)
    }

    if (validations?.max && value > validations.max) {
        errors.push(`${label} should be ${validations.max} or less`)
    }

    if (validations?.restricted?.length && validations.restricted.includes(value)) {
        errors.push(`${label} cannot have a value of ${value}`)
    }

    return errors;
};