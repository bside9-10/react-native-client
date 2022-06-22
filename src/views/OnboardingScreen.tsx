import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import React, { useRef } from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import btnOff from '../../assets/images/nextButtonOff.png';
import character1 from '../../assets/images/character_set1.png';
import character2 from '../../assets/images/character_set2.png';
import character3 from '../../assets/images/character_set3.png';
import btnOn from '../../assets/images/btn_main_on.png';
import GoogleButton from '../components/login/ButtonGoogle'
import AppleButton from '../components/login/ButtonApple'

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const DotButton = ({selected} : any) => { 
    let backgroundColor = 'purple';
    backgroundColor = selected ? '#5A50CF' : '#BFBAF6';
        
    return (
        <View
            style={{
                top:-100,
                width: 6,
                height: 6,
                borderRadius: 5,
                marginHorizontal: 3,
                backgroundColor,
            }}
        />
    );
}

const DoneButton = () => (
    <TouchableOpacity style={{paddingTop: 40, paddingRight: 30}}>
        <GoogleButton />
        <AppleButton />
    </TouchableOpacity>
);

const NextButton = ({ ...props}) => (
    <TouchableOpacity style={{paddingTop: 100, paddingRight: 30}}>
        <Image source={btnOff} { ...props}/>
        
    </TouchableOpacity>
);

const SkipButton = ({ ...props}) => (
    <TouchableOpacity style={{paddingBottom: 30, paddingLeft: 30}}>
        <Image source={btnOn} { ...props}/>
    </TouchableOpacity>
);

// const onboardingRef = useRef<Onboarding>(null);

const OnboardingScreen = () => {
    return (
        <Onboarding
            // ref={onboardingRef}
            // pages={pages}
            onDone={() => console.log('done')}
            onSkip={() => console.log('skip')}
            DoneButtonComponent={DoneButton}
            NextButtonComponent={NextButton}
            SkipButtonComponent={SkipButton}
            // showNext={false}
            // showSkip={false}
            bottomBarHeight={250}
            DotComponent={DotButton}
            titleStyles={{ color: 'blue' ,top: DEVICE_HEIGHT/5 * -1}} // set default color for the title
            bottomBarHighlight={false}
            // bottomBarColor="transparent"
            // controlStatusBar={false}
            // containerStyles={{  }}
           // subTitleStyles={{ color:'gray' ,top: DEVICE_HEIGHT/18 * -1 }}
            imageContainerStyles={{top: DEVICE_HEIGHT/10 * -1}}
            pages={[
                {   
                    backgroundColor: '#fff',
                    // eslint-disable-next-line global-require
                    image: <Image source={character1} />,
                    title: '',
                    subtitle: 
                        // <TouchableOpacity>
                            <View style={{alignItems: "center" ,top: DEVICE_HEIGHT/6 * -1}}>
                                <Text>그동안 달성 불가능한 목표를 세워서</Text>
                                <Text>중단하지는 않았나요?</Text>
                                <Text>목표달성을 위해 쓸 수 있는 시간을 입력하고</Text>
                                <Text>라플과 함께 실현 가능한 목표를 설정해요.</Text>
                            </View>
                        // </TouchableOpacity>
                },
                {
                    backgroundColor: '#fff',
                    // eslint-disable-next-line global-require
                    image: <Image source={character2} />,
                    title: '',
                    subtitle:
                        <View style={{alignItems: "center" ,top: DEVICE_HEIGHT/6 * -1}}>
                            <Text>하루하루 그날의 목표를 확인하고</Text>
                            <Text>달성한 목표를 체크해요.</Text>
                            <Text>계획한 목표를 수행하지 못해도 걱정 노노!</Text>
                            <Text>멀리가기 위해서는 잠깐의 쉼도 필요한걸요.</Text>
                        </View>,
                },
                {
                    backgroundColor: '#fff',
                    // eslint-disable-next-line global-require
                    image: <Image source={character3} />,
                    title: '',
                    subtitle: <View style={{alignItems: "center" ,top: DEVICE_HEIGHT/6 * -1}}>
                                <Text>자, 그러면 이제 라플을 만들어 볼까요?</Text>
                                <Text>아래 소셜 로그인을 하시면</Text>
                                <Text>자동으로 회원가입이 진행됩니다!</Text>
                            </View>,
                },
            ]}
        />
    );
};

export default OnboardingScreen; 