import { useState } from "react";

function useFields() {
  const [fields, setFields] = useState<Field[]>([])

  const getField = (name: string): string => fields.find(field => field.name === name)?.value ?? '';

  const getFieldNames = (): string[] => {
    return fields.map(field => field.name)
  }

  const setField = (name: string, value: string) => {
    setFields(fields.map(field => field.name === name ? { ...field, value } : field))
  }

  const setFieldById = (id: number, name: string, value: string) => {
    if (fields.find(field => field.id === id) === undefined) {
      setFields([...fields, { id, name, value }])
    } else {
      setFields(fields.map(field => field.id === id ? { ...field, name, value } : field))
    }
  }

  return {
    fields,
    getField,
    setField,
    setFieldById
  }
}

export default useFields;
