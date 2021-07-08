import React from 'react';
import {StyleSheet, View, FlatList, ScrollView} from 'react-native';
import {NavBar, Container} from '../components';
import {Text, Chip, List, Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import color from '../utils/color';

const Faq = ({navigation}) => {
  const tags = [
    {
      topic: 'Payment',
      selected: true,
    },
    {
      topic: 'Hostel',
      selected: false,
    },
    {
      topic: 'Hostel',
      selected: false,
    },
    {
      topic: 'Hostel',
      selected: false,
    },
    {
      topic: 'Course Form',
      selected: false,
    },
    {
      topic: 'Transcript',
      selected: false,
    },
  ];

  const questions = [
    'how to pay school fee ?',
    'how to generate RRR number ?',
    'how to print school fee receipt',
    'how to validate payment',
    'how to print payment receipt',
  ];
  return (
    <>
      <NavBar
        center={null}
        left={
          <Icon
            name="arrow-left"
            color="white"
            size={30}
            onPress={() => navigation.goBack()}
          />
        }
      />
      <Container pad={false} style={{backgroundColor: color.primary}}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>How Can We Help You?</Text>
        </View>
        <View style={styles.faqTop}>
          <View style={styles.faqHeader}>
            <Text style={{fontSize: hp(3), fontFamily: 'Raleway-Bold'}}>
              Top Questions
            </Text>
            <Icon name="search" color="black" size={30} />
          </View>
          <FlatList
            data={tags}
            keyExtractor={(i, index) => index.toString()}
            renderItem={({item: tag, key}) => (
              <Chip
                key={key}
                style={tag.selected ? styles.topicSelected : styles.topic}
                selected={tag.selected}
                selectedColor="#fff"
                textStyle={{color: tag.selected ? 'white' : color.primary}}>
                {tag.topic}
              </Chip>
            )}
            horizontal={true}
            contentContainerStyle={{
              paddingHorizontal: 10,
              height: 50,
            }}
            scrollEnabled={true}
            showsHorizontalScrollIndicator
            endFillColor={color.primary}
          />
        </View>
        <View style={styles.faqList}>
          {questions.map((question, index) => (
            <List.Item
              key={index}
              title={question}
              right={() => (
                <List.Icon icon="chevron-right" color={Colors.grey600} />
              )}
              style={styles.item}
              centered={false}
              titleStyle={{fontSize: hp(2), textTransform: 'capitalize'}}
            />
          ))}
        </View>
      </Container>
    </>
  );
};

export default Faq;

const styles = StyleSheet.create({
  titleContainer: {
    height: hp(25),
    paddingHorizontal: 20,
  },
  title: {
    color: 'white',
    fontSize: hp(4),
    textAlign: 'center',
    marginVertical: hp(5),
    fontFamily: 'Raleway-Bold',
  },
  faqTop: {
    backgroundColor: 'white',
    height: hp(14),
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignSelf: 'center',
    padding: 10,
  },
  faqHeader: {
    height: hp(7),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topic: {
    backgroundColor: '#fff',
    borderColor: '#00ab4a',
    height: 40,
    marginRight: 10,
  },
  topicSelected: {
    backgroundColor: '#00ab4a',
    borderColor: 'white',
    height: 40,
    marginRight: 10,
  },
  faqList: {
    backgroundColor: 'white',
    height: hp(64),
    paddingHorizontal: 10,
  },
  item: {
    borderBottomColor: color.primary,
    backgroundColor: Colors.grey100,
    marginBottom: 5,
  },
});
