import { Box, Button, Container, Flex, Input, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import ConditionPanel from './ConditionPanel'
import EventInput from './EventInput'
import eventsService from '../services/events'

function RulePanel() {
  const [ruleName, setRuleName] = useState('')
  const [conditions, setConditions] = useState<Condition[]>([{ id: 1 }])
  const [selectedEvent, setSelectedEvent] = useState<CargospotEvent | null>(
    null
  )
  const [events, setEvents] = useState<CargospotEvent[]>([])

  useEffect(() => {
    ;(async () => {
      const events = await eventsService.getEvents()
      setEvents(events)
    })()
  }, [])

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
