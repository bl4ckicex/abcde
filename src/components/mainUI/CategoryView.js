/* eslint no-mixed-spaces-and-tabs: 0 */
/* eslint global-require: 0 */

import React, { Component } from 'react';
import Carousel from 'react-native-looped-carousel';
import Grid from 'react-native-grid-component';
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  View,
  Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');
const HORIZONTAL_PADDING = 6;
const imageDetails = [
        {
          name: 'Comfortable Home',
          image: require('../../../assets/images/ListView/Category1.jpg')
        },
        {
          name: 'Enhancing knowledge',
          image: require('../../../assets/images/ListView/Category2.jpg')
        },
        {
          name: 'Enhancing Events',
          image: require('../../../assets/images/ListView/Category3.jpg')
        },
        {
          name: 'Extra Care',
          image: require('../../../assets/images/ListView/Category4.jpg')
        },
        {
          name: 'Filling Tummies',
          image: require('../../../assets/images/ListView/Category5.jpg')
        },
        {
          name: 'Healthy Lifestyle',
          image: require('../../../assets/images/ListView/Category6.jpg')
        },
        {
          name: 'Helping Hands',
          image: require('../../../assets/images/ListView/Category7.jpg')
        },
        {
          name: 'Look Better',
          image: require('../../../assets/images/ListView/Category8.jpg')
        },
  ];

class CategoryView extends Component {

	constructor(props) {
		super(props);
		this.state = { size: { width, height: height / 4.5 } };
		this.renderItem = this.renderItem.bind(this);
	}

	renderItem(data, index) {
		const { carouselImageStlye, renderItemContainer, itemImageStyle, placeholderItemNameStyle } = styles;
		return (
			<View style={renderItemContainer} key={index}>
				<TouchableOpacity>
					<Image source={data.image} style={itemImageStyle} >
						<Text style={placeholderItemNameStyle}> {data.name} </Text>
					</Image>
				</TouchableOpacity>
			</View>
		);
	}

	renderBlank = () => <View style={[{ backgroundColor: 'white' }, styles.item]} key='empty' />

	render() {
		const { carouselImageStlye, bulletViewStyle } = styles;
		return (
			<View>
				<Carousel
					delay={3000}
					style={this.state.size}
					autoplay
					pageinfo
					//bullets
					//bulletsContainerStyle={bulletViewStyle}
				>
					<View style={this.state.size}>
						<Image source={require('../../../assets/images/dummyCarouselImage/Dummy 1.jpg')} style={carouselImageStlye} />
					</View>

					<View style={this.state.size}>
						<Image source={require('../../../assets/images/dummyCarouselImage/Dummy 2.jpg')} style={carouselImageStlye} />
					</View>

					<View style={this.state.size}>
						<Image source={require('../../../assets/images/dummyCarouselImage/Dummy 3.jpg')} style={carouselImageStlye} />
					</View>
				</Carousel>

				<Grid
					style={styles.list}
				  renderItem={this.renderItem}
					renderPlaceholder={this.renderBlank}
					data={imageDetails}
					itemsPerRow={2}
				/>

			</View>
		);
	}
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: 160,
  },
  carouselImageStlye: {
    resizeMode: 'cover'
  },
  bulletViewStyle: {
  	flex: 1,
  	flexDirection: 'row',
    alignItems: 'flex-end',
    paddingTop: 30
  },
  renderItemContainer: {
  	flex: 1,
  	justifyContent: 'center',
  	alignItems: 'center',
  	paddingTop: 5
  },
  itemImageStyle: {
  	flexDirection: 'row',
  	justifyContent: 'center',
  	alignItems: 'flex-end',
  	width: (width / 2) - HORIZONTAL_PADDING,
  	height: 160,
  },
  placeholderItemNameStyle: {
  	textAlign: 'center',
  	justifyContent: 'center',
  	marginBottom: 5,
  	fontSize: 15,
  	color: 'white',
  	fontWeight: 'bold',
  	backgroundColor: '#0000007F',
  	borderRadius: 5,
  	paddingLeft: 1,
  	paddingRight: 3,
  	overflow: 'hidden'
  },
  list: {
    flex: 1,
    paddingTop: 100,
  },
});

export default CategoryView;
