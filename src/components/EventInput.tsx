import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Input,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import { useState } from 'react'

interface EventInputProps {
  events: CargospotEvent[]
  onEventSelect: (event: CargospotEvent) => void
}

function EventInput({ events, onEventSelect }: EventInputProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedEvent, setSelectedEvent] = useState<CargospotEvent | null>(
    null
  )

  const handleEventSelect = (event: CargospotEvent) => {
    setSelectedEvent(event)
    onEventSelect(event)
    onClose()
  }

  const renderEvents = () => {
    return events.map((event, i) => {
      return (
        <button key={i} onClick={() => handleEventSelect(event)}>
          {event.name}
        </button>
      )
    })
  }

  return (
    <Flex>
      <Text m={2} fontSize="xl">
        When
      </Text>
      <Input
        m={2}
        htmlSize={60}
        width="auto"
        placeholder="an event occurs"
        value={selectedEvent?.name ?? ''}
        onClick={onOpen}
      />
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Events</DrawerHeader>
          <DrawerBody>{renderEvents()}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}

export default EventInput
