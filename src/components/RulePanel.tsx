import { useState } from 'react'
import ConditionPanel from './ConditionPanel'
import Field from './Field'

function RulePanel() {
  const [ruleName, setRuleName] = useState('')
  const [conditions, setConditions] = useState<Condition[]>([])

  const renderConditions = () => {
    return conditions.map((condition, index) => {
      return (
        <ConditionPanel key={index} condition={condition} count={index + 1} />
      )
    })
  }

  const addCondition = () => {
    setConditions([...conditions, { id: conditions.length + 1 }])
  }

  return (
    <div>
      <span>Rule Name:</span>
      <input
        type="text"
        value={ruleName}
        onChange={e => setRuleName(e.target.value)}
      />
      <Field id={1} />
      <button type="button" onClick={addCondition}>
        Add Condition
      </button>
      {renderConditions()}
      <button type="button">Add Action</button>
    </div>
  )
}

export default RulePanel
