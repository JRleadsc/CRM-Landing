import { fa } from '@formkit/i18n'
import { DefaultConfigOptions } from '@formkit/vue'
import { mobileNumber } from '@/formKitCustomRules/mobileNumber'

const config: DefaultConfigOptions = {
  locales: { fa },
  locale: 'fa',
  rules: {
    mobileNumber
  }
}
  
export default config
