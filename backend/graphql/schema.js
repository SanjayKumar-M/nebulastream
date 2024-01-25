import {buildSchema} from 'graphql'

const schema = buildSchema(`
        type Query{
            hello:String
        }

`)

const root = {
    hello: () => 'Hello, World!',
  };
  

export default {schema;