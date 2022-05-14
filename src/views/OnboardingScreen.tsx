import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import image from '../../assets/images/nextButtonOff.png';
import character1 from '../../assets/images/character_set1.png';
import btnOn from '../../assets/images/btn_main_on.png';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const DotButton = ({selected} : any) => { 
    let backgroundColor = "purple";
    console.log(selected)
    backgroundColor = selected ? '#5A50CF' : '#BFBAF6';
        
    return (
        <View
            style={{
                top:-100,
                width: 6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor,
            }}
        />
    );
}
const NextButton = () => (
    <TouchableOpacity style={{paddingTop: 100, paddingRight: 30}}>
        <Image source={image} />
    </TouchableOpacity>
);

const SkipButton = () => (
    <TouchableOpacity style={{paddingBottom: 30, paddingLeft: 30}}>
        <Image source={btnOn} />
        {/* <Text>SKIP</Text> */}
    </TouchableOpacity>
);

const OnboardingScreen = () => {
    return (
        <Onboarding
            onDone={() => console.log('done')}
            // showNext={false}
            // showSkip={false}
            bottomBarHeight={250}
            NextButtonComponent={NextButton}
            SkipButtonComponent={SkipButton}
            DotComponent={DotButton}
            titleStyles={{ color: 'blue' ,top: DEVICE_HEIGHT/5 * -1}} // set default color for the title
            bottomBarHighlight={false}
            // bottomBarColor="transparent"
            // controlStatusBar={false}
            // containerStyles={{  }}
           // subTitleStyles={{ color:'gray' ,top: DEVICE_HEIGHT/18 * -1 }}
            imageContainerStyles={{top: DEVICE_HEIGHT/5 * -1}}
            pages={[
                {   
                    backgroundColor: '#fff',
                    // eslint-disable-next-line global-require
                    image: <Image source={character1} />,
                    title: 'First Page',
                    subtitle: 
                        // <TouchableOpacity>
                            <View style={{alignItems: "center" ,top: DEVICE_HEIGHT/6 * -1}}>
                                <Text>그동안 달성 불가능한 목표를 세워서</Text>
                                <Text>중단하지는 않았나요?</Text>
                                <Text>목표달성할 시간을 세워서</Text>
                            </View>
                        // </TouchableOpacity>
                },
                {
                    backgroundColor: '#fe6e58',
                    // eslint-disable-next-line global-require
                    image: <Image source={character1} />,
                    title: 'Second Page',
                    subtitle: 'This is the subtitle that sumplements the title.',
                },
                {
                    backgroundColor: '#999',
                    // eslint-disable-next-line global-require
                    image: <Image source={character1} />,
                    title: 'Third Page',
                    subtitle: "Beautiful, isn't it?",
                },
            ]}
        />
    );
};

export default OnboardingScreen; 