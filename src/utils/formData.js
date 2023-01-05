/**
 * Get all inputs values from a `<form>`
 *
 * @param {HTMLFormElement} $form
 * @returns {Object<string,string>}
 */
export const getFormData = $form => Object.fromEntries(new FormData($form).entries())
