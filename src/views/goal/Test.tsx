import React from 'react';
import {View, Text} from 'react-native';
import { useQuery} from 'react-query';
import getRecommendWordsApi from '../../helper/api/recommendWordsAPI';


const Test = () => {

    const resultQuery = useQuery('id', getRecommendWordsApi);
    console.log("data log {} : ", resultQuery.data);

    if (!resultQuery.data)
        return (<Text style={{ }}>데이터가 없습니다.</Text>)
    
    return (
        <View>
            <Text>{JSON.stringify(resultQuery.data.response)}</Text>
        </View>
    );
};

export default Test;