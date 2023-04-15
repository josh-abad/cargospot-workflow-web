import { AddIcon, DeleteIcon } from '@chakra-ui/icons'
import {
  ButtonGroup,
  Checkbox,
  Flex,
  IconButton,
  Input,
  Select
} from '@chakra-ui/react'
import { useState } from 'react'

interface ConditionPanelProps {
  count: number
  condition: Condition
  fields: Field[]
}

function ConditionPanel({ count, condition, fields }: ConditionPanelProps) {
  const [connection, setConnection] = useState('and')

  const toggleConnection = () => {
    if (count > 1) {
      setConnection(connection === 'and' ? 'or' : 'and')
    }
  }

  const renderFields = () => {
    return fields.map((field, index) => {
      return (
        <option key={index} value={field.name}>
          {field.name}
        </option>
      )
    })
  }

  return (
    <Flex>
      <Checkbox m={2} />
      <button type="button" onClick={toggleConnection}>
        {connection}
      </button>
      <Select placeholder="a field" m={2} variant="flushed" width="40">
        {renderFields()}
      </Select>
      <Select m={2} variant="flushed" width="40">
        <option value="=">is</option>
        <option value="!=">is not</option>
        <option value=">">is greater than</option>
        <option value="<">is less than</option>
      </Select>
      <Input
        m={2}
        variant="flushed"
        placeholder="some value"
        htmlSize={8}
        width="auto"
      />
      <ButtonGroup m={2}>
        <IconButton
          variant="ghost"
          aria-label="Add condition"
          icon={<AddIcon />}
        />
        <IconButton
          variant="ghost"
          aria-label="Remove condition"
          icon={<DeleteIcon />}
        />
      </ButtonGroup>
    </Flex>
  )
}

export default ConditionPanel
