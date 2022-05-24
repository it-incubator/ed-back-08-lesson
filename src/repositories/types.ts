import {ObjectId, WithId} from 'mongodb'

export type UserDBType = WithId<{
    name: string
}>

export type GamePairDBType = WithId<{
    player1Id: ObjectId | null
    player2Id: ObjectId | null
    questionsIds: ObjectId[]
    player1Answers: AnswerDBType[]
    player2Answers: AnswerDBType[]
    closed: boolean
}>

export type AnswerDBType = WithId<{
    value: string
    isCorrect: boolean
    createdAt: Date
}>
export type QuestionDBType = WithId<{
    title: string
    answer: string
}>

