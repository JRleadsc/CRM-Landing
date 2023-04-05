import { fa } from '@formkit/i18n'
import { DefaultConfigOptions } from '@formkit/vue'
import { passValidator } from '@/composables/passValidator'
import { mobileNumber } from '@/formKitCustomRules/mobileNumber'

const config: DefaultConfigOptions = {
  locales: { fa },
  locale: 'fa',
  rules: {
    passValidator,
    mobileNumber
  }
}
  
export default config
