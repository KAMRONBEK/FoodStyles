import {useLazyQuery, useMutation} from '@apollo/client';
import BottomContainer from '@technicalchallenge/components/bottom-container';
import GradientHeader from '@technicalchallenge/components/gradient-header';
import SelectedItem from '@technicalchallenge/components/selected-item';
import {
  CREATE_CARD,
  DELETE_CARD,
  DUPLICATE_CARD,
  GET_CARDS,
  SHARE_CARD,
} from '@technicalchallenge/graph-ql/requests';
import React, {useEffect, useState} from 'react';
import {Image, Pressable, ScrollView, Share, Text, View} from 'react-native';
import {styles} from './styles';

const CardsView = () => {
  const [getCards, {data}] = useLazyQuery(GET_CARDS);
  const [shareCard, {error: shareError, data: shareData}] =
    useMutation(SHARE_CARD);
  const [duplicateCard, {error: duplicateError}] = useMutation(DUPLICATE_CARD, {
    refetchQueries: [{query: GET_CARDS}, 'Get Cards'],
  });
  const [deleteCard, {error: errorDelete}] = useMutation(DELETE_CARD, {
    refetchQueries: [
      {query: GET_CARDS}, // DocumentNode object parsed with gql
      'Get Cardds', // Query name
    ],
  });
  const [createCard] = useMutation(CREATE_CARD, {
    refetchQueries: [{query: GET_CARDS}, 'Get Cards'],
  });

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const onDeleteCard = () => {
    deleteCard({variables: {id: selectedItem}}).then(() => toggleModal());
    if (errorDelete) {
      console.log(errorDelete);
    }
  };

  const onCreateCard = () => {
    createCard();
  };

  const onDuplicateCard = () => {
    duplicateCard({variables: {id: selectedItem}}).then(() => toggleModal());
    if (duplicateError) {
      console.log(duplicateError);
    }
  };

  const onShareCard = () => {
    shareCard({variables: {id: selectedItem}}).then(() => {
      Share.share({
        url: `https://cards.foodstyles.com/${shareData?.shareCard}`,
      });
    });
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
      <BottomContainer createCard={onCreateCard} />
      <SelectedItem
        isModalVisible={isModalVisible}
        shareItem={onShareCard}
        toggleModal={toggleModal}
        deleteItem={onDeleteCard}
        duplicateItem={onDuplicateCard}
      />
    </>
  );
};

export default CardsView;
