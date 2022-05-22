import ClassService from '../class.service'
import { SECTION } from '../../models/classMaster.model'

const CLASSES = [
  {
    name: "LKG",
    order: 1,
    section: SECTION.KINDER_GARTEN,
  },
  {
    name: "UKG",
    order: 2,
    section: SECTION.KINDER_GARTEN,
  },
  {
    name: "1",
    order: 3,
    section: SECTION.PRIMARY
  },
  {
    name: "2",
    order: 4,
    section: SECTION.PRIMARY
  },
  {
    name: "3",
    order: 5,
    section: SECTION.PRIMARY
  },
  {
    name: "4",
    order: 6,
    section: SECTION.PRIMARY
  },
  {
    name: "5",
    order: 7,
    section: SECTION.UPPER_PRIMARY
  },
  {
    name: "6",
    order: 8,
    section: SECTION.UPPER_PRIMARY
  },
  {
    name: "7",
    order: 9,
    section: SECTION.UPPER_PRIMARY
  },
  {
    name: "8",
    order: 10,
    section: SECTION.SECONDARY
  },
  {
    name: "9",
    order: 11,
    section: SECTION.SECONDARY
  },
  {
    name: "10",
    order: 12,
    section: SECTION.SECONDARY
  },
  {
    name: "Plus One",
    order: 13,
    section: SECTION.HIGHER_SECONDARY
  },
  {
    name: "Plus Two",
    order: 14,
    section: SECTION.HIGHER_SECONDARY
  }
]

describe('ClassService', () => {
  test('should create classes bases on lower and higher sections provided', async () => {
    const service = new ClassService()
    expect(service.generateClasses(CLASSES, 'PRIMARY', 'PRIMARY', '12')).toEqual([
      { name: '1', division: 'A', school: '12', section: "PRIMARY", },
      { name: '2', division: 'A', school: '12', section: "PRIMARY", },
      { name: '3', division: 'A', school: '12', section: "PRIMARY", },
      { name: '4', division: 'A', school: '12', section: "PRIMARY", },
      { name: '1', division: 'B', school: '12', section: "PRIMARY", },
      { name: '2', division: 'B', school: '12', section: "PRIMARY", },
      { name: '3', division: 'B', school: '12', section: "PRIMARY", },
      { name: '4', division: 'B', school: '12', section: "PRIMARY", },
      { name: '1', division: 'C', school: '12', section: "PRIMARY", },
      { name: '2', division: 'C', school: '12', section: "PRIMARY", },
      { name: '3', division: 'C', school: '12', section: "PRIMARY", },
      { name: '4', division: 'C', school: '12', section: "PRIMARY", },
      { name: '1', division: 'D', school: '12', section: "PRIMARY", },
      { name: '2', division: 'D', school: '12', section: "PRIMARY", },
      { name: '3', division: 'D', school: '12', section: "PRIMARY", },
      { name: '4', division: 'D', school: '12', section: "PRIMARY", },
      { name: '1', division: 'E', school: '12', section: "PRIMARY", },
      { name: '2', division: 'E', school: '12', section: "PRIMARY", },
      { name: '3', division: 'E', school: '12', section: "PRIMARY", },
      { name: '4', division: 'E', school: '12', section: "PRIMARY", },
      { name: '1', division: 'F', school: '12', section: "PRIMARY", },
      { name: '2', division: 'F', school: '12', section: "PRIMARY", },
      { name: '3', division: 'F', school: '12', section: "PRIMARY", },
      { name: '4', division: 'F', school: '12', section: "PRIMARY", }
    ])

    expect(service.generateClasses(CLASSES, 'KINDER_GARTEN', 'KINDER_GARTEN', '12')).toEqual([
      { name: 'LKG', division: 'A', school: '12', section: "KINDER_GARTEN", },
      { name: 'UKG', division: 'A', school: '12', section: "KINDER_GARTEN", },
      { name: 'LKG', division: 'B', school: '12', section: "KINDER_GARTEN", },
      { name: 'UKG', division: 'B', school: '12', section: "KINDER_GARTEN", },
      { name: 'LKG', division: 'C', school: '12', section: "KINDER_GARTEN", },
      { name: 'UKG', division: 'C', school: '12', section: "KINDER_GARTEN", },
      { name: 'LKG', division: 'D', school: '12', section: "KINDER_GARTEN", },
      { name: 'UKG', division: 'D', school: '12', section: "KINDER_GARTEN", },
      { name: 'LKG', division: 'E', school: '12', section: "KINDER_GARTEN", },
      { name: 'UKG', division: 'E', school: '12', section: "KINDER_GARTEN", },
      { name: 'LKG', division: 'F', school: '12', section: "KINDER_GARTEN", },
      { name: 'UKG', division: 'F', school: '12', section: "KINDER_GARTEN", }
    ])
  })
})