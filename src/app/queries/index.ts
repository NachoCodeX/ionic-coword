import gql from 'graphql-tag';


export const SEARCH_BY_TEXT = gql`
    query searchByText($text:String!){
        words:find(text:$text){
            _id
            word
            source
        }

    }
`;

export const GET_WORD_BY_ID = gql`
    query findWord($id:ID!){
        word:findByID(_id:$id){
            word
            definition
            source
        }

    }
`