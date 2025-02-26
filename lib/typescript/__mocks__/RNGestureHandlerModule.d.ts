/// <reference types="react" />
declare const _default: {
    TouchableHighlight: import("react").ForwardRefExoticComponent<import("react-native/types").TouchableHighlightProps & import("react").RefAttributes<import("react-native/types").View>>;
    TouchableNativeFeedback: typeof import("react-native/types").TouchableNativeFeedback;
    TouchableOpacity: import("react").ForwardRefExoticComponent<import("react-native/types").TouchableOpacityProps & import("react").RefAttributes<import("react-native/types").View>>;
    TouchableWithoutFeedback: typeof import("react-native/types").TouchableWithoutFeedback;
    ScrollView: typeof import("react-native/types").ScrollView;
    FlatList: typeof import("react-native/types").FlatList;
    Switch: typeof import("react-native/types").Switch;
    TextInput: typeof import("react-native/types").TextInput;
    DrawerLayoutAndroid: typeof import("react-native/types").DrawerLayoutAndroid;
    NativeViewGestureHandler: typeof import("react-native/types").View;
    TapGestureHandler: typeof import("react-native/types").View;
    ForceTouchGestureHandler: typeof import("react-native/types").View;
    LongPressGestureHandler: typeof import("react-native/types").View;
    PinchGestureHandler: typeof import("react-native/types").View;
    RotationGestureHandler: typeof import("react-native/types").View;
    FlingGestureHandler: typeof import("react-native/types").View;
    RawButton: ({ enabled, ...rest }: any) => import("react").JSX.Element;
    BaseButton: ({ enabled, ...rest }: any) => import("react").JSX.Element;
    RectButton: ({ enabled, ...rest }: any) => import("react").JSX.Element;
    BorderlessButton: typeof import("react-native/types").TouchableNativeFeedback;
    PanGestureHandler: typeof import("react-native/types").View;
    attachGestureHandler: () => void;
    createGestureHandler: () => void;
    dropGestureHandler: () => void;
    updateGestureHandler: () => void;
    flushOperations: () => void;
    install: () => void;
    Directions: {
        readonly RIGHT: 1;
        readonly LEFT: 2;
        readonly UP: 4;
        readonly DOWN: 8;
    };
    State: {
        readonly UNDETERMINED: 0;
        readonly FAILED: 1;
        readonly BEGAN: 2;
        readonly CANCELLED: 3;
        readonly ACTIVE: 4;
        readonly END: 5;
    };
};
export default _default;
