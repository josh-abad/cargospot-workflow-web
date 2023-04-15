import { useState } from 'react'

interface ConditionPanelProps {
  count: number
  condition: Condition
}

function ConditionPanel({ count }: ConditionPanelProps) {
  const [connection, setConnection] = useState(count === 1 ? 'When' : 'and')

  const toggleConnection = () => {
    if (count > 1) {
      setConnection(connection === 'and' ? 'or' : 'and')
    }
  }

  return (
    <div>
      <button type="button" onClick={toggleConnection}>
        {connection}
      </button>
      <input type="text" />
      <select name="operator" id="operator">
        <option value="is">is</option>
        <option value="is">is not</option>
        <option value="is">is greater than</option>
        <option value="is">is less than</option>
      </select>
      <input type="text" />
      <button type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
        </svg>
      </button>
      <button type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  )
}

export default ConditionPanel
