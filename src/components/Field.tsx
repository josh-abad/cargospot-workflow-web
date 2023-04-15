import { ChangeEvent, useEffect, useState } from 'react'
import useFields from '../hooks/useFields'

interface FieldProps {
  id: number
}

function Field({ id }: FieldProps) {
  const { setFieldById } = useFields()
  const [name, setName] = useState('')
  const [value, setValue] = useState('')

  useEffect(() => {
    setFieldById(id, name, value)
  }, [name, value])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === '_key') {
      setName(e.target.value)
    } else if (e.target.name === '_value') {
      setValue(e.target.value)
    }
  }

  return (
    <div>
      <span>Let</span>
      <input type="text" value={name} name="_key" onChange={handleChange} />
      <span>=</span>
      <input type="text" name="_value" value={value} onChange={handleChange} />
    </div>
  )
}

export default Field
