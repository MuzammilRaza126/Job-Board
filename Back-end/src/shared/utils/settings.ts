import validatedEnv from "./getValidationSettings"

const Settings = {
  ...validatedEnv(),
}

export default Settings
