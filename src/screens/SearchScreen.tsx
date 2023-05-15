import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';

import {
  LocationIcon,
  StarIcon,
  ClockIcon,
  BookmarkIconNormal,
} from '../assets/generatedicons';

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.rootCont}>
      <View style={styles.rooCont1}>
        <View style={styles.secondaryCont}>
          {/* <SearchIconNormal /> */}
          <Text style={styles.iconsearch}>🔍</Text>
          <TextInput
            style={styles.input}
            placeholder="Search by items"
            placeholderTextColor="#B9B9B9"
            // onChangeText={onChangeText}
            // value={text}
          />
        </View>
        <ScrollView horizontal={true} style={styles.categoriesItems}>
          <View style={styles.categoriesItem}>
            <Text style={styles.textCategories}>🍽️ Restaurant</Text>
          </View>
          <View style={styles.categoriesItem}>
            <Text style={styles.textCategories}>🏛️ Sight</Text>
          </View>
          <View style={styles.categoriesItem}>
            <Text style={styles.textCategories}>🛍️ Shop</Text>
          </View>
          <View style={styles.categoriesItem}>
            <Text style={styles.textCategories}>🖼️️ Museum</Text>
          </View>
          <View style={styles.categoriesItem}>
            <Text style={styles.textCategories}>🛏️ Hotel</Text>
          </View>
          <View style={styles.categoriesItem}>
            <Text style={styles.textCategories}>🪩 Club</Text>
          </View>
          <View style={styles.categoriesItem}>
            <Text style={styles.textCategories}>🛝 Park</Text>
          </View>
          <View style={styles.categoriesItem}>
            <Text style={styles.textCategories}>🏨 Hospital</Text>
          </View>
        </ScrollView>
        <ScrollView>
          <View>
            <View style={styles.detailsImg}>
              <View style={styles.bookmarkIcon}>
                <BookmarkIconNormal
                  width="12"
                  height="12"
                  // fill="#fff"
                  stroke="#fff"
                />
              </View>

              <Image
                style={{
                  width: '90%',
                  height: 253,
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}
                source={require('../assets/images/testimg.png')}
              />
            </View>
            <View style={styles.secondaryCintainer}>
              <Text style={styles.textStylePrimaryThird}>Museum in</Text>
              <View style={styles.thirdContainer}>
                <View style={styles.iconstack}>
                  <LocationIcon width="13" />
                  <Text style={styles.textLabel}>13 km</Text>
                </View>
                <View style={styles.iconstack}>
                  <ClockIcon width="13" />
                  <Text style={styles.textLabel}>08:00 - 23:00</Text>
                </View>
                <View style={styles.iconstack}>
                  <StarIcon width="13" />
                  <Text style={styles.textLabel}>4.3</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  rootCont: {
    backgroundColor: '#1C1C1C',
  },
  rooCont1: {
    // flex: 1,
    height: '100%',
    backgroundColor: '#1C1C1C',

    // justifyContent: 'center',
  },
  secondaryCont: {
    marginHorizontal: 18,
    marginVertical: 12,
    paddingTop: 10,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  textStylePrimary: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
  textStyleSecondary: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  detailsImg: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  secondaryCintainer: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderWidth: 1,
    marginHorizontal: 18,
    borderColor: '#262626',
    paddingBottom: 12,
  },
  textStylePrimaryThird: {
    color: '#E8E8E8',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 4,
  },
  thirdContainer: {
    flexDirection: 'row',
    columnGap: 18,
    paddingVertical: 4,
  },
  textLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#E8E8E8',
  },
  iconstack: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 4,
  },
  bookmarkIcon: {
    position: 'absolute',
    zIndex: 9999,
    top: 15,
    right: 35,
    borderRadius: 20,
    padding: 10,
    backgroundColor: '#1C1C1C',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: '#262626',
    borderColor: '#262626',
    fontSize: 14,
    fontWeight: '400',
    padding: 10,
    paddingHorizontal: 40,
    width: '100%',
  },
  iconsearch: {
    position: 'absolute',
    top: 20,
    left: 15,
    zIndex: 9999,
    fontSize: 13,
  },
  categoriesItems: {
    flexDirection: 'row',
    marginLeft: 20,
    marginVertical: 5,
    height: 28,
  },
  categoriesItem: {
    paddingHorizontal: 12,
    paddingVertical: 1,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#262626',
    marginRight: 8,
    height: 25,
  },
  textCategories: {
    color: '#fff',
    fontSize: 14,
  },
});