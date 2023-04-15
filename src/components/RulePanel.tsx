import { Box, Button, Container, Flex, Input, Text } from '@chakra-ui/react'
import { useState } from 'react'
import ConditionPanel from './ConditionPanel'
import EventInput from './EventInput'

function RulePanel() {
  const [ruleName, setRuleName] = useState('')
  const [conditions, setConditions] = useState<Condition[]>([{ id: 1 }])
  const [selectedEvent, setSelectedEvent] = useState<CargospotEvent | null>(
    null
  )
  const [events, setEvents] = useState<CargospotEvent[]>(() => {
    return [
      {
        name: 'A Booking is created',
        fields: [
          {
            name: 'AWB serial',
            type: 'text'
          },
          {
            name: 'AWB weight',
            type: 'number'
          },
          {
            name: 'AWB pieces',
            type: 'number'
          },
          {
            name: 'Storage Location',
            type: 'text'
          }
        ]
      }
    ]
  })

  const renderConditions = () => {
    return conditions.map((condition, index) => {
      return (
        <ConditionPanel
          fields={selectedEvent?.fields ?? []}
          key={index}
          condition={condition}
          count={index + 1}
        />
      )
    })
  }

  const addCondition = () => {
    setConditions([...conditions, { id: conditions.length + 1 }])
  }

  return (
    <Box>
      <Flex>
        <Text m={2}>Rule Name</Text>
        <Input
          m={2}
          htmlSize={52}
          width="auto"
          variant="flushed"
          value={ruleName}
          onChange={e => setRuleName(e.target.value)}
        />
      </Flex>
      <Button onClick={addCondition}>Add Condition</Button>
      <EventInput events={events} onEventSelect={setSelectedEvent} />
      <Box>{renderConditions()}</Box>
    </Box>
  )
}

export default RulePanel
