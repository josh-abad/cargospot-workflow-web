import { useState } from 'react'
import Rule from './components/RulePanel'
import useFields from './hooks/useFields'

function App() {
  const { fields } = useFields()

  const renderFields = () => {
    return fields.map((field, index) => {
      return field.value
    })
  }

  return (
    <div>
      <Rule />
      {renderFields()}
      <div>
        <button type="button">Save</button>
        <button type="button">Cancel</button>
      </div>
    </div>
  )
}

export default App
