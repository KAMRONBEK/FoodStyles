import {useLazyQuery, useMutation} from '@apollo/client';
import BottomContainer from '@technicalchallenge/components/bottom-container';
import GradientHeader from '@technicalchallenge/components/gradient-header';
import SelectedItem from '@technicalchallenge/components/selected-item';
import {DELETE_CARD, GET_CARDS} from '@technicalchallenge/graph-ql/requests';
import React, {useEffect, useState} from 'react';
import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';

const CardsView = () => {
  const [getCards, {loading, data, error}] = useLazyQuery(GET_CARDS);
  const [deleteCard, {error: errorDelete}] = useMutation(DELETE_CARD, {
    refetchQueries: [
      {query: GET_CARDS}, // DocumentNode object parsed with gql
      'Get Cardds', // Query name
    ],
  });

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  console.log(selectedItem);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const onDeleteCard = () => {
    deleteCard({variables: {id: selectedItem}}).then(() => toggleModal());
    if (errorDelete) {
      console.log(errorDelete);
    }
  };

  useEffect(() => {
    getCards();
  }, []);

  // console.log('______', data?.cards);

  return (
    <>
      <GradientHeader />
      <View style={styles.container}>
        <ScrollView
          style={{marginBottom: 105}}
          showsVerticalScrollIndicator={false}>
          {data?.cards?.map(e => {
            return (
              <View style={styles.item}>
                <Text style={styles.itemName}>
                  {e?.name.length > 20 ? e?.name.substring(0, 10) : e?.name}
                </Text>
                <Pressable
                  onPress={() => {
                    setSelectedItem(e?.id);
                    setIsModalVisible(!isModalVisible);
                  }}>
                  <Image
                    source={
                      isModalVisible === false
                        ? require('@technicalchallenge/assets/images/options.png')
                        : require('@technicalchallenge/assets/images/close.png')
                    }
                    style={styles.optionsImg}
                  />
                </Pressable>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <BottomContainer />
      <SelectedItem
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
        deleteItem={onDeleteCard}
        duplicateItem={() => {
          console.log('duplicated');
        }}
        shareItem={() => {
          console.log('shared');
        }}
      />
    </>
  );
};

export default CardsView;
