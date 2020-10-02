import React, { useRef } from 'react';
import { Animated } from 'react-native';

const SlideUpView = (props) => {
    const slideUpValue = useRef(new Animated.Value(0)).current  
  
    React.useEffect(() => {
      Animated.timing(
        slideUpValue,
        {
          toValue: 1,
          duration: 500,
          useNativeDriver: true
        },
        
      ).start();
    }, [slideUpValue])
  
    return (
      <Animated.View                 
        style={{
          ...props.style,
          transform: [
            {
              translateY: slideUpValue.interpolate({
                inputRange: [0, 1],
                outputRange: [600, 0]
              })
            }
          ],       
        }}
      >
        {props.children}
      </Animated.View>
    );
  }
  
  export default SlideUpView;