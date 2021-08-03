import React from 'react';
import {StyleSheet, View, FlatList, ScrollView} from 'react-native';
import {NavBar, Container, ScrollContainer} from '../components';
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
    {
      q: 'how to pay school fee ?',
      a:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra neque nec feugiat rhoncus. Praesent fringilla dapibus nulla ac feugiat. Suspendisse potenti. Nam fringilla commodo sem vel facilisis. Phasellus mattis, est ac interdum ullamcorper, turpis lorem facilisis nisi, in commodo nunc ligula ut libero. In hac habitasse platea dictumst. Integer ultricies feugiat fringilla. Phasellus massa urna, dictum eu magna nec, volutpat posuere nulla',
    },
    {
      q: 'how to generate RRR number ?',
      a:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra neque nec feugiat rhoncus. Praesent fringilla dapibus nulla ac feugiat. Suspendisse potenti. Nam fringilla commodo sem vel facilisis. Phasellus mattis, est ac interdum ullamcorper, turpis lorem facilisis nisi, in commodo nunc ligula ut libero. In hac habitasse platea dictumst. Integer ultricies feugiat fringilla. Phasellus massa urna, dictum eu magna nec, volutpat posuere nulla',
    },
    {
      q: 'how to print school fee receipt',
      a:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra neque nec feugiat rhoncus. Praesent fringilla dapibus nulla ac feugiat. Suspendisse potenti. Nam fringilla commodo sem vel facilisis. Phasellus mattis, est ac interdum ullamcorper, turpis lorem facilisis nisi, in commodo nunc ligula ut libero. In hac habitasse platea dictumst. Integer ultricies feugiat fringilla. Phasellus massa urna, dictum eu magna nec, volutpat posuere nulla',
    },
    {
      q: 'how to validate payment',
      a:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra neque nec feugiat rhoncus. Praesent fringilla dapibus nulla ac feugiat. Suspendisse potenti. Nam fringilla commodo sem vel facilisis. Phasellus mattis, est ac interdum ullamcorper, turpis lorem facilisis nisi, in commodo nunc ligula ut libero. In hac habitasse platea dictumst. Integer ultricies feugiat fringilla. Phasellus massa urna, dictum eu magna nec, volutpat posuere nulla',
    },
    {
      q: 'how to print payment receipt',
      a:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra neque nec feugiat rhoncus. Praesent fringilla dapibus nulla ac feugiat. Suspendisse potenti. Nam fringilla commodo sem vel facilisis. Phasellus mattis, est ac interdum ullamcorper, turpis lorem facilisis nisi, in commodo nunc ligula ut libero. In hac habitasse platea dictumst. Integer ultricies feugiat fringilla. Phasellus massa urna, dictum eu magna nec, volutpat posuere nulla',
    },
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
      <Container style={{backgroundColor: color.primary}} pad={false}>
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
        <FlatList
          style={styles.faqList}
          keyExtractor={(i, index) => index.toString()}
          data={questions}
          renderItem={({item, key}) => (
            <List.Accordion
              title={item.q}
              style={styles.item}
              centered={false}
              titleStyle={{
                fontSize: hp(1.7),
                textTransform: 'capitalize',
              }}>
              <Text style={{fontSize: hp(1.7), marginBottom: 20}}>{item.a}</Text>
            </List.Accordion>
          )}
        />
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
    marginBottom: hp(5),
  },
  item: {
    borderBottomColor: color.primary,
    backgroundColor: Colors.grey100,
    marginBottom: 5,
  },
});
