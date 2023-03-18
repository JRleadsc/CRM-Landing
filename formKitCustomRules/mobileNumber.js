import { phoneNumberValidator, digitsFaToEn, digitsArToEn } from '@persian-tools/persian-tools'

export const mobileNumber = (node) => {
  return phoneNumberValidator(digitsArToEn(digitsFaToEn(node.value)))
}
