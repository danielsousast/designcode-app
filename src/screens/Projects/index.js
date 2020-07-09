import React, { useState, useEffect, useMemo } from "react";
import { PanResponder, Animated } from "react-native";

import { Container, Mask } from "./styles";
import Project from "../../components/Project";

import projects from "../../data/projects";
import store from "../../store";

function getNextIndex(index) {
  var nextIndex = index + 1;
  if (nextIndex > projects.length - 1) {
    return 0;
  }
  return nextIndex;
}

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [pan, setPan] = useState(new Animated.ValueXY());
  const [maskOpacity, setMaskOpacity] = useState(new Animated.Value(0));
  const [scale, setScale] = useState(new Animated.Value(0.9));
  const [translateY, setTranslateY] = useState(new Animated.Value(44));
  const [thirdScale, setThirdScale] = useState(new Animated.Value(0.8));
  const [thirdTranslateY, setThirdTranslateY] = useState(
    new Animated.Value(-50)
  );

  const action = store.getState().app.action;

  const panResponder = useMemo(() => {
    return PanResponder.create({
      onMoveShouldSetPanResponder: (event, gestureState) => {
        if (gestureState.dx === 0 && gestureState.dy === 0) {
          return false;
        } else {
          if (store.getState().app.action === "openCard") {
          } else {
            return true;
          }
        }
      },
      onPanResponderGrant: () => {
        Animated.spring(scale, { toValue: 1, useNativeDriver: false }).start();
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: false, //true
        }).start();

        Animated.spring(thirdScale, {
          toValue: 0.9,
          useNativeDriver: false, //true
        }).start();

        Animated.spring(thirdTranslateY, {
          toValue: 44,
          useNativeDriver: false, //true
        }).start();

        Animated.timing(maskOpacity, {
          toValue: 1,
          useNativeDriver: false, //true
        }).start();
      },

      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),

      onPanResponderRelease: () => {
        const positionY = pan.y.__getValue();

        Animated.timing(maskOpacity, {
          toValue: 0,
          useNativeDriver: false, //true
        }).start();

        if (positionY > 200) {
          Animated.timing(pan, {
            toValue: { x: 0, y: 1000 },
            useNativeDriver: false, //true
          }).start(() => {
            pan.setValue({ x: 0, y: 0 });
            scale.setValue(0.9);
            translateY.setValue(44);
            thirdScale.setValue(0.8);
            thirdTranslateY.setValue(-50);
            setIndex(getNextIndex(index));
          });
        } else {
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false, //true
          }).start();

          Animated.spring(scale, {
            toValue: 0.9,
            useNativeDriver: false, //true
          }).start();

          Animated.spring(translateY, {
            toValue: 44,
            useNativeDriver: false, //true
          }).start();

          Animated.spring(thirdScale, {
            toValue: 0.8,
            useNativeDriver: false, //true
          }).start();

          Animated.spring(thirdTranslateY, {
            toValue: -50,
            useNativeDriver: false, //true
          }).start();
        }
      },
    });
  }, [index]);

  return (
    <Container>
      <AnimatedMask style={{ opacity: maskOpacity }} />
      <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }],
        }}
        {...panResponder.panHandlers}
      >
        <Project
          title={projects[index].title}
          image={projects[index].image}
          author={projects[index].author}
          text={projects[index].text}
          canOpen={true}
        />
      </Animated.View>
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          transform: [{ scale: scale }, { translateY: translateY }],
        }}
      >
        <Project
          title={projects[getNextIndex(index)].title}
          image={projects[getNextIndex(index)].image}
          author={projects[getNextIndex(index)].author}
          text={projects[getNextIndex(index)].text}
        />
      </Animated.View>
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -3,
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          transform: [{ scale: thirdScale }, { translateY: thirdTranslateY }],
        }}
      >
        <Project
          title={projects[getNextIndex(index + 1)].title}
          image={projects[getNextIndex(index + 1)].image}
          author={projects[getNextIndex(index + 1)].author}
          text={projects[getNextIndex(index + 1)].text}
        />
      </Animated.View>
    </Container>
  );
}

const AnimatedMask = Animated.createAnimatedComponent(Mask);
