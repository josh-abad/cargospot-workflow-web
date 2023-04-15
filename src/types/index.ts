interface Condition {

}

interface Field {
  name: string;
  type: 'text' | 'number'
}

interface CargospotEvent {
  name: string;
  fields: Field[];
}
