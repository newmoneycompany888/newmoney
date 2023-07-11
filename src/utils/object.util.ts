export const jsonToFormData = (obj: Record<string, string | Blob>) => {
  const formData = Object.entries(obj).reduce((formData, [key, value]) => {
    if (value) {
      formData.append(key, value)
    }

    return formData
  }, new FormData())

  return formData
}

export const formDataToJson = <T>(formData: FormData) => {
  const obj = Object.fromEntries(Array.from(formData.keys()).map((key) => [key, formData.getAll(key).length > 1 ? formData.getAll(key) : formData.get(key)]))

  return obj as T
}
