import {settings} from '../settings'

import mongoose, {Schema, Types} from 'mongoose'
import {AnswerDBType, GamePairDBType, QuestionDBType, UserDBType} from './types'
import {ObjectId} from 'mongodb'

const QuestionScheme = new mongoose.Schema<QuestionDBType>({
    title: { type: String, required: true  },
    answer: { type: String, required: true  }
});
const UserScheme = new mongoose.Schema<UserDBType>({
    name: { type: String, required: true  }
});
const AnswerScheme = new mongoose.Schema<AnswerDBType>({
    value: { type: String, required: true  },
    isCorrect: { type: Boolean, required: true  },
    createdAt: { type: Date, required: true  }
});
const GamePairScheme = new mongoose.Schema<GamePairDBType>({
    player1Id: { type: ObjectId, default: null },
    player2Id: { type: ObjectId, default: null },
    questionsIds: [ObjectId],
    player1Answers: [AnswerScheme],
    player2Answers: [AnswerScheme],
    closed: Boolean
});

export const QuestionModel = mongoose.model('Question', QuestionScheme);
export const UserModel = mongoose.model('User', UserScheme);
export const GamePairModel = mongoose.model('GamePair', GamePairScheme);


export async function runDb() {
    try {
        // Connect the client to the server
        await mongoose.connect(settings.MONGO_URI);
        // Establish and verify connection
        console.log("Connected successfully to mongo server");
    } catch {
        console.error("Can't connect to DB");
        // Ensures that the client will close when you finish/error
        await mongoose.disconnect();
    }
}
